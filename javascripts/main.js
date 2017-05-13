var app = angular.module("Callan", []);

app.controller("ItemCtrl", ($scope) => {
	$scope.showListView = false;
	$scope.link = "/images/Thoughts.png";

	$scope.items = [
	{
		food: "Pie"
	},
	{
		food: "Pizza"
	},
	{
		food: "Donuts"
	},
	{
		food: "Cookies"
	},
	{
		food: "Ice Cream"
	}
	];

	$scope.randomFood = $scope.items[Math.floor(Math.random() * $scope.items.length)];

	$scope.showFav = () =>{
		// let count = $scope.items.id;
		$scope.showListView = true;
		
	};
	
});