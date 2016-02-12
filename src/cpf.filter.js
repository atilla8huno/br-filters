/**
 * Filter para CPF Brasileiro
 *
 * Created by ATILLA on 27/11/2015
 */
(function () {
    'use strict';

    angular
        .module('br-filters')
        .filter('cpf', cpf);

    /** @ngInject */
    function cpf() {

        return function (value) {
            return angular.isUndefined(value) ? value : formattedCPF(value);
        };

        function formattedCPF(value) {
            var formatted = value + '';

            formatted = formatted.replace(/\D/g, '');
            formatted = formatted.replace(/(\d{3})(\d)/, '$1.$2');
            formatted = formatted.replace(/(\d{3})(\d)/, '$1.$2');
            formatted = formatted.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

            return formatted;
        }
    }
})();
