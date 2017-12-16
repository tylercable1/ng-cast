angular.module('video-player')

.component('app', {
  
  
  controller: function(youTube) {
    
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    
    this.searchResults = (query = 'HEYYEYAAEYAAAEYAEYAA') => {
      youTube.search(this.setSearchResults, query);
    };
    
    this.setSearchResults = (videos) => {
      this.videos = videos;
      this.currentVideo = videos[0];
    };

    this.searchResults();
  },

  templateUrl: 'src/templates/app.html'
});
