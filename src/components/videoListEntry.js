angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<'
  },
  template: '<div ng-include="\'src/templates/videoListEntry.html\'"></div>'
});
