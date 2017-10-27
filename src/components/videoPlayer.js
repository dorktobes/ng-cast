angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  template: '<div ng-include="\'src/templates/videoPlayer.html\'"></div>'
});
