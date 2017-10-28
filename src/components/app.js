angular.module('video-player')

.component('app', {
  bindings: {

  },
  controller: function () {
    // debugger;
    this.selectVideo = (video) => {
      $ctrl.currentVideo = video;
      console.log('I Clicked');
    };
    this.searchResults = () => {
      
    };
    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData;
  },
  
  template: '<div  ng-include="\'src/templates/app.html\'" ></div>'
});
