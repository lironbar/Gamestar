angular.
	module('gameDetail').
		component('gameDetail', {
			templateUrl: 'game-detail/game-detail.template.html',
			controller: ['$routeParams', 'Game', '$scope', function GameDetailController($routeParams, Game, $scope) {
				var self = this;
				self.game = Game.get({gameId: $routeParams.gameId}, function(game) {
					self.setImage(game.images[0]);
				});

				self.setImage = function setImage(img){
					console.log('Image have been changed');
					self.bigImage = img;
				};


			}
			]
		});