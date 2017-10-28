angular.module('video-player')

.component('search', {
  bindings: {
    search: '<',
    videos: '=',
    video: '='
  },
  controller: function () {
    this.result = (data) => {
      this.videos = data;
      this.video = data[0];
    };
  },
  template: '<div ng-include="\'src/templates/search.html\'"></div>'
});
