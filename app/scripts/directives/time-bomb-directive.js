'use strict';

function timeBombDirective () {
    return function (scope, element, attrs) {
        element.datepicker();

        scope.$on('$destroy', function neutralizeTimeBomb() {
            //element.datepicker('destroy');
        });
    };
}