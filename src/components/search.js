angular.module('video-player')

.component('search', {
  bindings: {
    search: '<'
  },
  controller: function () {
    this.result = (data) => {
      console.log(data);
    };
    this.test = () => { this.search(); };
  },
  template: '<div ng-include="\'src/templates/search.html\'"></div>'
});
