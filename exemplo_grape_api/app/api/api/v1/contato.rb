module API
  class V1::Contato < Grape::API
    version 'v1'
    format :json

    resource :contato do
      desc "Retorna a lista dos contatos"
      get do

        api_response(::Contato.all.to_json(:include => :operadora))
      end
    end
  end
end

