# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController::Base

  def index
    # React app index page
    render file: '/home/like8bagels/Development/code/Phase-4-Project/project-template-react-rails-api/public/index.html'
  end
end
