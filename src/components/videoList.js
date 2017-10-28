angular.module('video-player')

.component('videoList', {
  bindings: {
    videos: '<',
    clicked: '<'
  },
  
  template: '<div ng-include="\'src/templates/videoList.html\'"></div>'
});
