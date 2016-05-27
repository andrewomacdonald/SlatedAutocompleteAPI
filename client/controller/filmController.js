app.controller('movieSearchController', function($scope, $http, $q, MovieSearchFactory){
  $scope.searchText = '';
  $scope.selectedItem = [];
  $scope.searchTextChange = function(str){
    return MovieSearchFactory.getMovies(str);
  }
});
