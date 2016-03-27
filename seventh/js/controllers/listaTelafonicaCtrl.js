angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http){
  $scope.app = "Lista Telefonica";
  $scope.contatos = [];
  $scope.operadoras = [];
  var carregarContatos = function () {
    $http.get("http://localhost:3000/api/v1/contato").success(function (data) {
      $scope.contatos = JSON.parse(data);
    }).error(function (data, status) {
      $scope.message = "Aconteceu um problema: " + data;
    });
  };
  var carregarOperadoras = function () {
    $http.get('http://localhost:3000/api/v1/operadora').success(function (data) {
      $scope.operadoras = JSON.parse(data);
    });
  };
  $scope.adicionarContato = function(contato){
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
