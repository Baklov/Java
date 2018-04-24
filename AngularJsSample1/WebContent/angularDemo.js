/**
 *  Angular Test
 */

/**
 *  Create Controller
 */
var app = angular.module("demoApp", [])

app.controller("DemoController", function($scope){
		$scope.message = "Angular test, Здравейте";
})
// Define the `PhoneListController` controller on the `phonecatApp` module
app.controller('PhoneListController', function PhoneListController($scope) {
	$scope.message = "Angular test 2 controller, Здравейте 2 контролер";
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});

//Define the `PhoneListController` controller on the `phonecatApp` module
app.controller('DemoCtrl', function PhoneListController($scope) {
	$scope.names =[ "Robert","Steven", "Viki"];
	$scope.add= function(){
		$scope.names.push($scope.newNames);
		$scope.newContact ="";
	}
	
 
});

