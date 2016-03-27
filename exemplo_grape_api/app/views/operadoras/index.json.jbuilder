json.array!(@operadoras) do |operadora|
  json.extract! operadora, :id, :nome, :codigo, :categoria, :preco
  json.url operadora_url(operadora, format: :json)
end
