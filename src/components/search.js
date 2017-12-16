angular.module('video-player')
.component('search', {
  bindings: {
    result: '<'
  },
  controller: function(youTube) {
    this.service = youTube;
    this.liveSearch = function(query) {
      this.search(query);
    };
    this.search = (query) => {
      this.service.search(this.result, query);
    };
    
    this.handleEnter = function(e, query) {
      if (e === 13) {
        this.search(query);
      }
    };
  },
  
  templateUrl: 'src/templates/search.html'
});
