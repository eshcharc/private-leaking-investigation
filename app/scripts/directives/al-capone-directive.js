'use strict';

function alCaponeDirective ($window) {
	return {
	    link: function alCaponeLink(scope, element, attrs) {
			if(!$window.alCaponeTreasure) {
				$window.alCaponeTreasure = [];
			}

			(function perform100Robberies() {
				var tree = $window.document.createElement('div'),
					div,
					i;

				for(i = 0; i < 1000; i+=1) {
					div = $window.document.createElement('div');
					tree.appendChild(div);
				}
				$window.alCaponeTreasure.push(div);
			})();

			scope.$on('$destroy', function findCaponeTreasure() {
		    	//$window.alCaponeTreasure = null;
		  	});
		}
	};
}