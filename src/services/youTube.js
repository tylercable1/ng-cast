angular.module('video-player')
.service('youTube', function($http) {
  this.search = (callback, query) => {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true' 
      }
    }).then(function(response) {
      console.log('youtube triggered')
      callback(response.data.items);
    }, function() {
      console.log('GOOOFED');
    });
  };
});
