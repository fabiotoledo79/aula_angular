angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI, serialGenerator){
  $scope.app = "Lista Telefonica";
  $scope.contatos = [];
  $scope.operadoras = [];
  var carregarContatos = function () {
    contatosAPI.getContatos().success(function (data) {
      $scope.contatos = JSON.parse(data);
    }).error(function (data, status) {
      $scope.error = "Não foi possivel carregar os dados";
    });
  };
  var carregarOperadoras = function () {
    operadorasAPI.getOperadoras().success(function (data) {
      $scope.operadoras = JSON.parse(data);
    });
  };
  $scope.adicionarContato = function(contato){
    contato.serial = serialGenerator.generate();
    $scope.contatos.push(contato);
    delete $scope.contato;
    $scope.contatosForm.$setPristine();
  };
  $scope.apagarContatos = function(contatos){
    $scope.contatos = contatos.filter(function(contato){
      if (!contato.selecionado) return contato;
    });
  };
  $scope.isContatoSelecionado = function(contatos){
    return contatos.some(function(contato){
      return contato.selecionado;
    });
  };
  $scope.ordernarCampo = function(campo){
    $scope.ordernar = campo;
    $scope.contrario = !$scope.contrario;
  };
  carregarContatos();
  carregarOperadoras();
});
