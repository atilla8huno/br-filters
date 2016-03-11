## Angular's Brazilian Filters

[![MIT License][license-image]][license-url]
[![Bower](https://img.shields.io/bower/v/br-filters.svg)](http://bower.io/search/?q=br-filters)
[![Build Status](https://travis-ci.org/atilla8huno/br-filters.svg)](https://travis-ci.org/atilla8huno/br-filters)

### Installing

There are multiple ways of adding the required files:

1) Clone, build the repository, and include the files

2) Install via Bower and include files

```shell
bower install br-filters
```

reference the script

```html
<script src="bower_components/br-filters/dist/br-filters.min.js"></script>
```

---

Include the br-filters module in your application

```js
var app = angular.module('myapp', ['br-filters']);
```

### Basic example
The most basic use of the directive in html ([plunker](http://plnkr.co/edit/9Pzo9wbGRfp3kbMM1tQH?p=preview))
```html
CPF before: <span ng-bind="cpf"></span>
CPF then: <span ng-bind="cpf | cpf"></span>
```
Or with an angular controller:
```javascript
angular.module('myapp')
  .controller('ctrl', ['$scope', '$filter', function ($scope, $filter){

    $scope.cnpj = $filter('cnpj')('45215458000104');
    // $scope.cnpj -> will be '45.215.458/0001-04'
}]);
```

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE.md
