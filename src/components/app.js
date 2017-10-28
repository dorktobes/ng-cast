angular.module('video-player')

.component('app', {
  bindings: {

  },
  controller: function (youTube) {
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = (params, cb) => {
      // debugger;
      youTube.search(params, cb);
    };
    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData;
  },
  
  template: '<div  ng-include="\'src/templates/app.html\'" ></div>'
});
