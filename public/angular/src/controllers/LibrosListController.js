/**
* LibrosListController
* Controlador del listado de libros
*/
function LibrosListController($scope, $http) {
  $http.get('http://localhost:3000/libros').success(function(data) {
	$scope.libros = data;
  });
 
  //defines una variable
  $scope.var1 = "variable definida desde el controlador";
  
  //selecciona el desplegable y ordena automaticamente, variable definida en la vista con ng-model
  $scope.orderField = "titulo";
  $scope.orderReverse = "true";
}