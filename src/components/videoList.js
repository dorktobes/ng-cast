angular.module('video-player')

.component('videoList', {
  bindings: {
    videos: '<',
    clicked: '<'
  },
  controller: function () {
    this.onClick = () =>{
      
    };
  },
  
  template: '<div ng-include="\'src/templates/videoList.html\'"></div>'
});
