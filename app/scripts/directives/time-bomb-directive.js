'use strict';

function timeBombDirective () {
    return function (scope, element, attrs) {
        function setTimeBomb() {
            element.datepicker();
        }

        setTimeBomb();

        scope.$on('$destroy', function neutralizeTimeBomb() {
            //element.datepicker('destroy');
        });
    };
}