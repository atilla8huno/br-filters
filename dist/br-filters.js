/**
 * Module for the filters
 *
 * Created by ATILLA on 27/11/2015
 */
(function() {
    'use strict';

    angular.module('br-filters', []);
})();

/**
 * Filter para exibir os bytes de um arquivo em formato legível.
 * Ex.: O valor 7020 será convertido em '6,85 KB'
 *
 * Created by ATILLA on 12/02/2016.
 */
(function() {

    angular
        .module('br-filters')
        .filter('bytes', bytes);

    /** @ngInject */
    function bytes() {

        return function(bytes, precision) {
            if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) {
                return '-';
            }

            if (typeof precision === 'undefined') {
                precision = 2;
            }

            var units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
            var number = Math.floor(Math.log(bytes) / Math.log(1024));

            return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +  ' ' + units[number];
        };
    }
})();

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

/**
 * Filter para CNPJ Brasileiro
 *
 * Created by ATILLA on 27/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('br-filters')
        .filter('cnpj', cnpj);

    /** @ngInject */
    function cnpj() {

        return function (value) {
            return angular.isUndefined(value) ? value : formattedCNPJ(value);
        };

        function formattedCNPJ(value) {
            var formatted = value + '';

            formatted = formatted.replace(/\D/g, '');
            formatted = formatted.replace(/^(\d{2})(\d)/, '$1.$2');
            formatted = formatted.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
            formatted = formatted.replace(/\.(\d{3})(\d)/, '.$1/$2');
            formatted = formatted.replace(/(\d{4})(\d)/, '$1-$2');

            return formatted;
        }
    }
})();

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

/**
 * Filter para Telefones Brasileiros
 *
 * Created by ATILLA on 27/11/2015
 */
(function () {
    'use strict';

    angular
        .module('br-filters')
        .filter('telefone', telefone);

    /** @ngInject */
    function telefone() {

        return function (value) {
            return angular.isUndefined(value) ? value : formattedTelephone(value);
        };

        function formattedTelephone(value) {
            var formatted = value + '';

            formatted = formatted.replace(/\D/g, '');
            if (formatted.length === 11) {
                formatted = formatted.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else {
                formatted = formatted.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
            }

            return formatted;
        }
    }
})();
