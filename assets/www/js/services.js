angular.module('qrgen.services', [])


.factory("NotificationService", function ($rootScope) {
    return {
            alert: function (message, title, buttonText, buttonAction) {
                navigator.notification.alert(message,
                    function () {
                        $rootScope.$apply(function () {
                            buttonAction();
                        })
                    },
                    title,
                    buttonText);
            }
        }
})

.factory("ClipBoardService", function ($rootScope) {
    return {
            copy: function (textinput) {
              cordova.plugins.clipboard.copy($scope.scan_result);
            },
            paste: function(callback){
              $rootScope.$apply(function () {
                  callback();
              })
            }
        }
})

.factory("ScanService", function ($rootScope) {
    return {
            scan: function (successCallback, failureCallback) {
              cordova.plugins.barcodeScanner.scan(function(result){
                $rootScope.$apply(function () {
                   successCallback(result);
                })
              }, 
              function(error){
                $rootScope.$apply(function () {
                  failureCallback(error);
                })
              }
              );
            }, 
            encode: function(type, input, successCallback, failureCallback){
              cordova.plugins.barcodeScanner.encode(type, input, successCallback, failureCallback);
            }
          } 
})

;