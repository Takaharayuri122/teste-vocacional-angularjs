const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const _selectedContentID = urlParams.get('content');

angular
  .module('app', ['ngDialog', 'ui.mask', 'ngMask'])

  .controller('MainController', function ($scope, $http, ngDialog, $sce) {

    $scope.entity = [];
    console.log('MainController Load');
    $scope.selectedOptions = [];
    $scope.questionPosition = 0;
    $scope.reference = [];
    $scope.questions = [];
    $scope.screen = 'pontuation';

    $http.get('questionario.json').then(response => {
      $scope.questions = response.data;
    })

    $scope._a = [];
    $scope._b = [];
    $scope._c = [];
    $scope._d = [];

    $scope.onPreviuosPage = function () {
      $scope.questionPosition--;
    }
    $scope.onNextPage = function () {
      $scope.questionPosition++;

      if ($scope.questionPosition == 19) {
        processQuestions();
      }


    }


    $scope.onSelectOption = function (item, option, index) {

      $scope.entity[item.id] = {
        question: item,
        option: option.id
      };
    }


    processQuestions = function () {
      $scope.entity.map(item => {
        if (item.option == 'a') $scope._a.push(item.option)
        if (item.option == 'b') $scope._b.push(item.option)
        if (item.option == 'c') $scope._c.push(item.option)
        if (item.option == 'd') $scope._d.push(item.option)
      });

      console.log('_a', $scope._a);
      console.log('_b', $scope._b);
      console.log('_c', $scope._c);
      console.log('_d', $scope._d);

    }

    $scope.nextScreen = function (screen) {
      console.log('iefneo');
      $scope.screen = screen;
    }

    $scope.getPontuation = function () {
      var _arrays = [$scope._a, $scope._b, $scope._c, $scope._d];
      _arrays.sort(function(a, b){return b.length - a.length});
      $scope.screen = _arrays[0][0];
    }


  });