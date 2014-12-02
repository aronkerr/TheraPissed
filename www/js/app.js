// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('therapissed', ['ionic', 'ngCordova'])

.controller('TherapissedCtrl', function($scope, $ionicPlatform, $cordovaNativeAudio) {
    
    // Array of media files
    $scope.sounds = [
        { 
            title: 'Working on Toilet',
            media: 'assets/workingOnToilet.mp3',
            active: false
        }, { 
            title: 'Pissing',
            media: 'assets/pissing.mp3',
            active: false
        }
    ];
    
    // Preload audio
    $ionicPlatform.ready(function() {
        $scope.sounds.forEach(function(sound) {
            $cordovaNativeAudio.preloadComplex(sound.title, sound.media);
        });
    });
    
    // Handle button click
    $scope.onRelease = function(event) {
        var sound = $scope.sounds[this.$index];

        if (!sound.active) {
            $cordovaNativeAudio.loop(sound.title);
            sound.active = true;            
        } else {
            $cordovaNativeAudio.stop(sound.title);
            sound.active = false;
        }
    };
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
