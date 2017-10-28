angular.module('video-player')
.service('youTube', function($http) {
  this.search = function (params, callback) { 
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search/',
      params: {
        q: params.query,
        maxResults: params.maxResults ? params.maxResults : 5,
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true,
      }
    }).then(function successCallback(response) {
      callback(response.data.items);
    }, function errorCallback(response) {
      console.log('did not complete request', response);
    });
  };
});
