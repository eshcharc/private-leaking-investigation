'use strict';

function alCaponeDirective ($window) {
	return {
	    link: function (scope, element, attrs) {
	    	console.log($window.alCaponeTreasure)
	    	if(!$window.alCaponeTreasure) {
	    		$window.alCaponeTreasure = [];
	    	}

	    	$window.alCaponeTreasure.push($window.document.createElement('div'));
	    	$window.alCaponeTreasure.push($window.document.createElement('div'));

	    	scope.$on('$destroy', function findCaponeTreasure() {
	            //$window.alCaponeTreasure = null;
	        });
	    },
	    template: '<div>Al capone treasure</div></div><br/>'
	};
}