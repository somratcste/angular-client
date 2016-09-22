'use strict'
angular.module('Client')
	.factory('NoteResource' , function($resource){
		return $resource("http://localhost/api/public/notes/:id" , {id : "@id"
			}, {
				update : {
					method : "PUT"
				}
			});
	});