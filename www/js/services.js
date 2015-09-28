angular.module('starter.services', [])

.factory('ApiCall', function($http) {

  var results = [];
  var track = [];

  return {

    makeCall: function(search_term) {
      var url = 'https://api.audioboom.com/tag/' + search_term + '/audio_clips';

      return $http.get(url).then(function(response) {
        results = response.data.body.audio_clips;
        return results;
      });
    },

    getResults: function() {
      return results;
    },

    setTrack: function(result) {
      track = result;
      return track;
    },

    getTrack: function() {
      return track;
    }
  };

});
