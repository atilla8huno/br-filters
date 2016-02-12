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
