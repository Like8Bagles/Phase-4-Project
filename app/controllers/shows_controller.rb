class ShowsController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        user = find_user
        shows = user.shows
        render json: shows
    end

    def show
        user = find_user
        show = user.shows.find_by(id: params[:id])
        render json: show
    end

    def create
        user = find_user
        show = user.shows.create!(show_params)
        render json: show, status: :created
    end

    def destroy
        user =find_user
        show = user.shows.find_by(id: params[:id])
        show.delete
        head :no_content
    end

    def update
        user = find_user
        show = user.shows.find_by(id: params[:id])
        show.update(show_params)
        render json: show, status: :created
    end

    private 

    def show_params
        params.permit(:name, :studio, :genre, :rating)
    end

    def find_user
        User.find_by(id: session[:user_id])
    end

end
