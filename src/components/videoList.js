angular.module('video-player')

.component('videoList', {
  bindings: {
    videos: '<'
  },
  controller: function () {
    // debugger;
    this.data;
  },
  
  template: '<div ng-include="\'src/templates/videoList.html\'"></div>'
});
