class CreateContatos < ActiveRecord::Migration
  def change
    create_table :contatos do |t|
      t.string :nome
      t.string :telefone
      t.references :operadora, index: true
      t.datetime :data

      t.timestamps
    end
  end
end
