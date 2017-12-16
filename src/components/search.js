angular.module('video-player')
.component('search', {
  bindings: {
    searchResults: '<'
  },
  controller: function(youTube) {
    this.result = () => {
    };
  },
  
  templateUrl: 'src/templates/search.html'
});
