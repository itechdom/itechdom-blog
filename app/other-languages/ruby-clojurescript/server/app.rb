require 'json'
require 'eventmachine'
require 'sinatra/base'


def run(opts)

  $logger.info "Parsing options..."
  $logger.info "Starting websocket server"

end

class MapApp < Sinatra::Base

  configure do
    set :threaded, false
  end

  get '/' do
    redirect to('/map')
  end

  get '/map' do
    $logger.info "Serving incoming request from #{@request.ip}"
  end

  not_found do
    status 404
  end

end
$logger.info "Starting application"
run app: MapApp.new
