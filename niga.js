var app = angular.module('try',[]);
	app.controller('Controller', function($scope){
			$scope.tasklist =[];

			$scope.addtask = function(){
				$scope.tasklist.push
				(
					{
						task: $scope.taskinput,
						done: false,
					}
				);
				$scope.taskinput = '';
			}
			 $scope.delete = function(index){
			 	$scope.tasklist.splice(index, 1);
			 }
			 $scope.deleteall = function(){
			 	$scope.tasklist = [];
			 }
			
});