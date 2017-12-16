angular.module('video-player')
.component('search', {
  bindings: {
    result: '<'
  },
  controller: function(youTube) {
    this.service = youTube;
    this.search = (query) => {
      this.service.search(this.result, query);
    };
  },
  
  templateUrl: 'src/templates/search.html'
});
