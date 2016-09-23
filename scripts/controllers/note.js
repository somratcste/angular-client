'use strict'
angular.module('Client')
	.controller('IndexNoteCtrl' , function($scope, NoteResource , $location , $timeout){
		$scope.Notes = NoteResource.query();
		$scope.removeNote = function(id) 
		{
			NoteResource.delete({
				id : id
			});
			Materialize.toast('Note Deleted' , 5000 , 'green accent-4');
			$timeout(function(){
				$location.path('/notes');
			},1000);
		};
	})
	.controller('CreateNoteCtrl', function($scope, NoteResource , $location , $timeout){
		$scope.button = "Save";
		$scope.title = "Create Note";
		$scope.Title = "Title";
		$scope.Description = "Description";
		$scope.Note = {};
		$scope.saveNote = function(){
			//console.log($scope.Note);
			NoteResource.save($scope.Note);
			Materialize.toast('Note Created' , 5000 , 'green accent-4');
			$timeout(function(){
				$location.path('/notes');
			},1000);
		};
	})
	.controller('EditNoteCtrl', function($scope, NoteResource , $location , $timeout , $routeParams){
		$scope.button = "Update";
		$scope.title = "Edit Note";
		$scope.Note = NoteResource.get({
			id : $routeParams.id
		});
		$scope.saveNote = function(){
			NoteResource.update($scope.Note);
			Materialize.toast('Note Updated' , 5000 , 'green accent-4');
			$timeout(function(){
				$location.path('/notes');
			},1000);
		};
	});
