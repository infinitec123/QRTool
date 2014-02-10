angular.module('qrgen.controllers', [])

.controller('ScanCtrl', function($scope, NotificationService, ScanService, ClipBoardService) {
   
   function scanHelper(){
   	   ScanService.scan(function (result) {
   	   	  console.log(result);
      	  $scope.scan_result = result.text; 
      	  $scope.format = result.format;  
          $scope.cancelled = result.cancelled;
          if($scope.cancelled){
            $scope.format = 'Scan Canceled';
          }
		}, function (error) {
            NotificationService.alert("Scan Failed", "Alert", "Ok", function(){});
            $scope.format = 'Scan Failed';
      });
   }
   
   $scope.reScan = function () {
	  scanHelper();
   }; 

   $scope.clipboardCopy = function(){
      NotificationService.alert("Successfully copied to Clipboard", "Alert", "Ok", function(){});
      ClipBoardService.copy($scope.scan_result);
   }

   scanHelper();
})


.controller('EncodeCtrl', function($scope, NotificationService, ScanService, ClipBoardService) {
   $scope.encode = function () {
     ScanService.encode("TEXT_TYPE", $scope.text_input, function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
        );
   }; 
})



; //End of ScanControl
