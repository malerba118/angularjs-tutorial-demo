app.controller('RootController', function( $scope, NoteService ) {
    
        NoteService.getNotes().then(
            //success
            function(notes) {
                $scope.notes = notes;;
            },
            //error
            function(error) {
                console.log(error);
            }
        );

	}
);