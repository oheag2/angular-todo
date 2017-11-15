angular.module('TodoDirective', [].directive('todoTable', function(){
	return {
		restrict: 'E',   //  e-> element
		templateUrl: 'templates/directives/todo-table.html'

	};
});