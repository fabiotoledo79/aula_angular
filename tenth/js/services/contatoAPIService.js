//factore
angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
  var _getContatos = function(){
    return $http.get(config.baseURL + "/contato")
  };
  return { getContatos: _getContatos };
});
