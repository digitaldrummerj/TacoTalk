
    angular.module('talkDemo')
        .service('CollectionRepeatService', ['$q', '$http',
            function ($q, $http) {
     
        return {
                    getData: getData
                };
                
	 	 function getData() {
            var deferred = $q.defer();
              $http.get('demos/collectionrepeat/collectionrepeatdata.json')
              .success(function(data) {
                deferred.resolve(data);
               })
               .error(function (data, status) {
                    console.log("Error while getting collection repeat data json");
                    deferred.reject();
               }); 
          
            return deferred.promise;
        };
	 
	  }]);
