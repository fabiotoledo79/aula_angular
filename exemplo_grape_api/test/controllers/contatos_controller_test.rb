require 'test_helper'

class ContatosControllerTest < ActionController::TestCase
  setup do
    @contato = contatos(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:contatos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create contato" do
    assert_difference('Contato.count') do
      post :create, contato: { data: @contato.data, nome: @contato.nome, operadora_id: @contato.operadora_id, telefone: @contato.telefone }
    end

    assert_redirected_to contato_path(assigns(:contato))
  end

  test "should show contato" do
    get :show, id: @contato
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @contato
    assert_response :success
  end

  test "should update contato" do
    patch :update, id: @contato, contato: { data: @contato.data, nome: @contato.nome, operadora_id: @contato.operadora_id, telefone: @contato.telefone }
    assert_redirected_to contato_path(assigns(:contato))
  end

  test "should destroy contato" do
    assert_difference('Contato.count', -1) do
      delete :destroy, id: @contato
    end

    assert_redirected_to contatos_path
  end
end
