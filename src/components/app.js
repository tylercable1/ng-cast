angular.module('video-player')

.component('app', {
  
  
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    
    this.selectVideo = (index) => {
      this.video = this.videos[index];
      console.log('suhhhhh dudde');
    };
    
    this.searchResults = (query = 'suhh dude') => {
      console.log(query);
      youTube.search(this.setSearchResults, query);
    };
    
    this.setSearchResults = (videos) => {
      this.videos = videos;
      this.video = videos[0];
    };
    
    // this.searchResults();
  },



  templateUrl: 'src/templates/app.html'
});
