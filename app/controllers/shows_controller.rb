class ShowsController < ApplicationController

    def index
        user = find_user
        shows = user.shows
        render json: shows
    end

    def show
    end

    def create
        user = find_user
        show = user.shows.create!(show_params)
        render json: show, status: :created
    end

    def destroy
    end

    private 

    def show_params
        params.permit(:name, :studio, :genre, :rating)
    end

    def find_user
        User.find_by(id: session[:user_id])
    end

end
