require "sinatra"
require "sinatra/reloader"
require "sinatra/json"
require "json"
require 'pry'

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/app/views"

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

def load_skills
  JSON.parse(File.read("skills.json"))
end

def load_education
  JSON.parse(File.read("education_experiences.json"))
end

def load_projects
  JSON.parse(File.read("projects.json"))
end

def load_project(project_id)
  projects = load_projects
  projects.find do |project|
    project["id"] == project_id
  end
end

def load_volunteer
  JSON.parse(File.read("volunteer_experiences.json"))
end

def load_work
  JSON.parse(File.read("work_experiences.json"))
end

get "/" do
  erb :home
end

get "/projects" do
  erb :home
end

get "/projects/:id" do
  erb :home
end

get "/resume" do
  erb :home
end

get "/api/v1/skills.json" do
  @skills = load_skills
  content_type :json
  json @skills
end

get "/api/v1/work_experiences.json" do
  @work_experiences = load_work
  content_type :json
  json @work_experiences
end

get "/api/v1/education_experiences.json" do
  @education_experiences = load_education
  content_type :json
  json @education_experiences
end

get "/api/v1/volunteer_experiences.json" do
  @volunteer_experiences = load_volunteer
  content_type :json
  json @volunteer_experiences
end

get "/api/v1/projects.json" do
  @projects = load_projects
  content_type :json
  json @projects
end

get "/api/v1/projects/:id" do
  @project = load_project(params[:id].to_i)
  content_type :json
  json @project
end
