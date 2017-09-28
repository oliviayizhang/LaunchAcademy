require "sinatra"
require "sinatra/json"
require "json"
require "pry"

set :bind, '0.0.0.0'

set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/app/views"

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

# HOW TO READ OUR FILE:
def read_movies
  JSON.parse(File.read("movies.json"))
end

# API ENDPOINTS

get "/api/v1/movies" do
  movies = read_movies

  content_type :json
  json movies
end

post "/api/v1/movies" do
  current_movies = read_movies

  movie = JSON.parse(request.body.read)
  movie["id"] = current_movies["movies"].last["id"] + 1

  current_movies["movies"] << movie
  File.write("movies.json", JSON.pretty_generate(current_movies))

  content_type :json
  status 201
  json movie
end

get "*" do
  erb :home
end
