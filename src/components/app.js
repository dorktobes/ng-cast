angular.module('video-player')

.component('app', {
  bindings: {

  },
  controller: function (youTube) {
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = (params, cb) => {
      // var debouncedSearch = _.debounce(youTube.search, 500);
      // debouncedSearch(params, cb);
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
