json.array!(@contatos) do |contato|
  json.extract! contato, :id, :nome, :telefone, :operadora_id, :data
  json.url contato_url(contato, format: :json)
end
