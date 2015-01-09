'use strict';

function leeHarveyOswaldDirective () {
	var bullet;

    return function leeHarveyLink(scope, element, attrs) {
    	var bullet = angular.element('<bullet>');

    	element.append(bullet);

    	// shoot

    	scope.$on('$destroy', function arrestLeeHarvey() {
    		element[0].removeChild(bullet[0]);
    		//bullet.remove();
    	})
    };
}