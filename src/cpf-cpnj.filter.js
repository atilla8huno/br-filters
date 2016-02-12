/**
 * Filter para CPF ou CNPJ Brasileiros
 *
 * Created by ATILLA on 27/11/2015
 */
(function () {
    'use strict';

    angular
        .module('br-filters')
        .filter('cpfCnpj', cpfCnpj);

    cpfCnpj.$inject = ['$filter'];

    /** @ngInject */
    function cpfCnpj($filter) {

        return function (value) {
            return angular.isUndefined(value) ? value : formattedCPFCNPJ(value);
        };

        function formattedCPFCNPJ(value) {
            var formatted = value + '';
            formatted = formatted.replace(/\D/g, '');

            if (formatted.length <= 11) {
                formatted = $filter('cpf')(value);
            } else {
                formatted = $filter('cnpj')(value);
            }

            return formatted;
        }
    }
})();
