angular.module('video-player')

.component('search', {
  bindings: {
    renderResults: '<',
  },
  controller: function (youTube) {
    this.result = (data) => {
      this.renderResults(data);
    };
    this.searchYoutube = (params, cb) => {
      youTube.search(params, cb);
    };
  },
  template: '<div ng-include="\'src/templates/search.html\'"></div>'
});
