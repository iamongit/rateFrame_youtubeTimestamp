angular.module('rateframe', [])

.controller('appController', function($scope, $http, $window) {

    const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 2. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      let player;
      $window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('player', {
          width: '640',
          height: '360',
          playerVars: {
                    autoplay: 1,
                    loop: 1,
                    controls: 1,
                    showinfo: 0,
                    autohide: 1,
                    modestbranding: 1,
                    vq: 'hd1080'},
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 3. The API will call this function when the video player is ready.
        const onPlayerReady = (event) => {
          event.target.playVideo();
          // player.mute();
        }

        const onPlayerStateChange = (event) => {

        }
        const stopVideo = () => {
          player.stopVideo();
        }
    $scope.getTimeStamp = function(){
      const body = angular.element(document).find('body').eq(0);
      if(player.getPlayerState() ===1){
        body.append(player.getCurrentTime());
        body.append(angular.element('<br>'));
      }
    }
})
