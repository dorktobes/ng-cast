angular.module('video-player')
.service('youTube', function($http) {
  this.search = function (params, callback) { 
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search/',
      params: {
        q: params.query,
        maxResults: params.maxResults ? params.maxResults : 5,
        key: "AIzaSyCIAgkirw1qvLsIondbTYVAPYKzIxZZTdE",
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true,
      }
    }).then(function successCallback(response) {
      callback(response.items);
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    });
  };
});
