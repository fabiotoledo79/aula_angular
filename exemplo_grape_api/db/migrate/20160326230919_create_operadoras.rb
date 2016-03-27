class CreateOperadoras < ActiveRecord::Migration
  def change
    create_table :operadoras do |t|
      t.string :nome
      t.string :codigo
      t.string :categoria
      t.float :preco

      t.timestamps
    end
  end
end
