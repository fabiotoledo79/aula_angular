module API
  class V1 < Grape::API
    content_type :json, 'application/json; charset=UTF-8'
    prefix :api
    format :json

    before do
      header['Access-Control-Allow-Origin'] = '*'
      header['Access-Control-Request-Method'] = '*'
    end

    helpers do
      def api_response response
        case response
        when Integer
          status response
        when String
          response
        when Hash
          response
        when Net::HTTPResponse
          "#{response.code}: #{response.message}"
        else
          status 400 # Bad request
        end
      end
    end

    mount Contato
    mount Operadora
    # mount API::V2::Root (next version)
    error_formatter :json, API::ErrorFormatter
  end
end
