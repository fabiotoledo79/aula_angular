angular.module("listaTelefonica").filter("name", function(){
  return function(input){
    var array = input.split(" ");
    var variavelFormatada = array.map(function(nome){
      if (/(de|da)/.test(nome)) return nome;
      return nome.charAt(0).toUpperCase() + nome.substr(1).toLowerCase();
    });
    return variavelFormatada.join(" ");
  };
});
