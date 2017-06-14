var app = angular.module('DemoApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
            .state('root', {
				name: 'root',
				url: '',
				templateUrl: 'root-partial.html',
                controller: 'RootController'
			})
			.state('note-detail', {
                parent: 'root',
				name: 'note-detail',
				url: '/notes/:noteId',
				templateUrl: 'note-detail-partial.html',
                controller: 'NoteDetailController'
			})
	}
);