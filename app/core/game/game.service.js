angular.
	module('core.game').
		factory('Game', ['$resource', 
			function($resource) {
				return $resource('games/:gameId.json', {}, {
					query: {
						method: 'GET',
						params: {gameId: 'games'},
						isArray: true
					}
				});
			}
			]);

