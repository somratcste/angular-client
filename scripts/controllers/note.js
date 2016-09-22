'use strict'
angular.module('Client')
	.controller('IndexNoteCtrl' , function(){})
	.controller('CreateNoteCtrl', function($scope, NoteResource){
		$scope.button = "Save";
		$scope.title = "Create Note";
		$scope.Note = {};
		$scope.saveNote = function(){
			//console.log($scope.Note);
			NoteResource.save($scope.Note);
		};
	});
