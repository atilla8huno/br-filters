/**
 * Created by ATILLA on 27/11/2015.
 */
(function() {
    'use strict';

    angular.module('br-filters', []);
})();

/**
 * Created by ATILLA on 27/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('br-filters')
        .filter('cep', cep);

    /** @ngInject */
    function cep() {

        var cep = function (value) {
            return angular.isUndefined(value) ? value : formattedCEP(value);
        };

        return cep;

        function formattedCEP(value) {
            var formatted = value + '';

            formatted = formatted.replace(/\D/g, '');
            formatted = formatted.replace(/^(\d{2})(\d{3})(\d)/, '$1.$2-$3');

            return formatted;
        }
    }
})();

/**
 * Created by ATILLA on 27/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('br-filters')
        .filter('cnpj', cnpj);

    /** @ngInject */
    function cnpj() {

        var cnpj = function (value) {
            return angular.isUndefined(value) ? value : formattedCNPJ(value);
        };

        return cnpj;

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
 * Created by ATILLA on 27/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('br-filters')
        .filter('cpfCnpj', cpfCnpj);

    cpfCnpj.$inject = ['$filter'];

    /** @ngInject */
    function cpfCnpj($filter) {

        var cpfCnpj = function (value) {
            return angular.isUndefined(value) ? value : formattedCPFCNPJ(value);
        };

        return cpfCnpj;

        function formattedCPFCNPJ(value) {
            var formatted = value + '';
            formatted = formatted.replace(/\D/g, '');

            if (formatted.length <= 11) {
                formatted = $filter('cpf')(value);
            } else {
                formatted = $filter('cnpj')(value);;
            }

            return formatted;
        }
    }
})();

/**
 * Created by ATILLA on 27/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('br-filters')
        .filter('cpf', cpf);

    /** @ngInject */
    function cpf() {

        var cpf = function (value) {
            return angular.isUndefined(value) ? value : formattedCPF(value);
        };

        return cpf;

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
 * Created by ATILLA on 27/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('br-filters')
        .filter('telefone', telefone);

    /** @ngInject */
    function telefone() {

        var telefone = function (value) {
            return angular.isUndefined(value) ? value : formattedTelephone(value);
        };

        return telefone;

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
