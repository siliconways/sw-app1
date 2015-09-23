
angular.module('ngApp.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
	$scope.$state = $state.current;
    $scope.params = $stateParams;
	$scope.bodyClass = '';
})

.controller('cAboutUsCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cAboutUs'; }).controller('cContactUsCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cContactUs'; }).controller('cContentCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cContent'; }).controller('cECommerceCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cECommerce'; }).controller('cFormsCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cForms'; }).controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
	$scope.showMenu = function () {
		$ionicSideMenuDelegate.toggleLeft();
	  };
	  $scope.showRightMenu = function () {
		$ionicSideMenuDelegate.toggleRight();
	  };
});

