function tedBundyDirective ($interval) {
	var Body = function () { 
		// define person 
	};

    return {
    	link: function tedBundyLink(scope, element, attrs) {
    		var bodies = [];

	    	var killingInterval = $interval(function kill() {
	    		bodies.push(new Body());
			}, 50);

	    	scope.$on('$destroy', function arrestTedBundy() {
	    		//$interval.cancel(killingInterval);
	    	})
	    }
	};
}