angular.module('video-player')

.component('search', {
  bindings: {
    search: '<',
    videos: '=',
    video: '='
  },
  controller: function (youTube) {
    this.result = (data) => {
      this.videos = data;
      this.video = data[0];
    };
    this.searchYoutube = (params, cb) => {
      console.log('you called?');
      youTube.search(params, cb);
    };
  },
  template: '<div ng-include="\'src/templates/search.html\'"></div>'
});
