angular.module('video-player')

.component('app', {
  bindings: {

  },
  controller: function () {
    // debugger;
    this.data = exampleVideoData;
  },
  
  template: '<div  ng-include="\'src/templates/app.html\'" ></div>'
});
