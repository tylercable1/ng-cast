angular.module('video-player')
.component('search', {
  bindings: {
    searchResults: '<',
    setSearchResults: '<'
  },
  controller: function(youTube) {
    this.service = youTube;
    this.result = (videos) => {
      this.setSearchResults(videos);
      // youTube.search(this.result, this.query);
    };
  },
  
  templateUrl: 'src/templates/search.html'
});
