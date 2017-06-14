app.controller('NoteDetailController', function( $scope, $stateParams, NoteService ) {
    
        $scope.resolved = {};
    
        $scope.resolved.preloader = false;
    
        NoteService.getNote($stateParams.noteId).then(
            //success
            function(note) {
                $scope.note = note;
                $scope.resolved.preloader = true;
            },
            //error
            function(error) {
                console.log(error);
                $scope.resolved.preloader = true;
            }
        );

	}
);