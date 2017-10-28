angular.module('video-player')

.component('app', {
  bindings: {

  },
  controller: function (youTube) {
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = (data) => {
      this.videos = data;
      this.currentVideo = data[0];
    }; 
    this.init = (data) => {
      this.videos = data;
      this.currentVideo = data[0];
    },
    this.videos = youTube.search({query: 'king charles spaniel'}, this.init);
    this.currentVideo;
  },
  
  template: '<div  ng-include="\'src/templates/app.html\'" ></div>'
});
