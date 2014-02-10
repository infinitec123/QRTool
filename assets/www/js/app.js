angular.module('qrgen', ['ionic', 'qrgen.services', 'qrgen.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.encode', {
      url: '/encode',
      views: {
        'encode-tab': {
          templateUrl: 'templates/encode.html',
          controller: 'EncodeCtrl'
        }
      }
    })

    .state('tab.scan', {
      url: '/scan',
      views: {
        'scan-tab': {
          templateUrl: 'templates/scan.html',
          controller: 'ScanCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/encode');

});