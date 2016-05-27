app.factory('MovieSearchFactory', function($http, $q){
  return {
    getMovies: function(str){
      var url = 'https://www.slated.com/films/autocomplete/profiles/?callback=JSON_CALLBACK&term=' + encodeURIComponent(str);
      return $http.jsonp(url)
        .then(function(response){
          if(typeof response.data === 'object'){
            return response.data
          } else {
            return $q.reject(response.data);
          }
        }, function(response){
          return $q.reject(response.data);
        });
    }
  };
});
