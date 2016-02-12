/**
 * Filter para CEP Brasileiro
 *
 * Created by ATILLA on 27/11/2015
 */
(function () {
    'use strict';

    angular
        .module('br-filters')
        .filter('cep', cep);

    /** @ngInject */
    function cep() {

        return function (value) {
            return angular.isUndefined(value) ? value : formattedCEP(value);
        };

        function formattedCEP(value) {
            var formatted = value + '';

            formatted = formatted.replace(/\D/g, '');
            formatted = formatted.replace(/^(\d{2})(\d{3})(\d)/, '$1.$2-$3');

            return formatted;
        }
    }
})();
