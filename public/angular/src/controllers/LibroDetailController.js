/**
* LibroDetailController
* Controlador de la ficha del libro
* $scope - ámbito
* $http - 
* $routeParams - parámetros de la ruta
*/
function LibroDetailController($scope, $http, $routeParams) {
  $scope.id = $routeParams.libroId;

  $http.get('http://localhost:3000/libros/'+$scope.id).success(function(data) {
	  $scope.libro = data;
  });
 
}