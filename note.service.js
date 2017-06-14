app.service("NoteService", function($http, $q) {
    this.getNotes = function() {

        return $http.get("https://jsonplaceholder.typicode.com/posts")
            .then(
                //success
                function(response) {
                    return response.data;
                },
                //error
                function(error) {
                    console.log("made it")
                    return $q.reject("Failed to get notes");
                }
            );
    };
    
    this.getNote = function(id) {

        return $http.get("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(
                //success
                function(response) {
                    return response.data;
                },
                //error
                function(error) {
                    console.log("made it")
                    return $q.reject("Failed to get note");
                }
            );
    };
});