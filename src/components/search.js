angular.module('video-player')

.component('search', {
  bindings: {
    renderResults: '<',
  },
  controller: function (youTube) {
    this.searchYoutube = (params, cb) => {
      youTube.search(params, cb);
    };
  },
  template: '<div ng-include="\'src/templates/search.html\'"></div>'
});
