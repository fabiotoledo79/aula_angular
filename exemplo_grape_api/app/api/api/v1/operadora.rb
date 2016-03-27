module API
  class V1::Operadora < Grape::API
    version 'v1'
    format :json

    resource :operadora do
      desc "Retorna a lista das operadoras"
      get do
        api_response(::Operadora.all.to_json)
      end
    end
  end
end
