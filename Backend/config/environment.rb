# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
# Rails.application.initialize!

FoodFinderBeta::Application.initialize!

# Set the default host and port to be the same as Action Mailer.
FoodFinderBeta::Application.default_url_options = FoodFinderBeta::Application.config.action_mailer.default_url_options
