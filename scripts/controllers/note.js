'use strict'
angular.module('Client')
	.controller('IndexNoteCtrl' , function($scope, NoteResource){
		$scope.Notes = NoteResource.query();
	})
	.controller('CreateNoteCtrl', function($scope, NoteResource , $location , $timeout){
		$scope.button = "Save";
		$scope.title = "Create Note";
		$scope.Note = {};
		$scope.saveNote = function(){
			//console.log($scope.Note);
			NoteResource.save($scope.Note);
			Materialize.toast('Note Created' , 5000 , 'green accent-4');
			$timeout(function(){
				$location.path('/notes');
			},1000);
		};
	});
