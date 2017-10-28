angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    clicked: '<'
  },
  template: '<div ng-include="\'src/templates/videoListEntry.html\'"></div>'
});
