const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const _selectedContentID = urlParams.get('content');

angular
  .module('app', ['ngDialog', 'ui.mask', 'ngMask'])

  .controller('MainController', function ($scope, $http, ngDialog, $sce) {
    console.log('MainController Load');
    $scope.selectedOptions = [];
    $scope.questionPosition = 0;
    $scope.selectedOptionId = '';
    $scope.questions = [
      {
        id: 0,
        title: 'Na escola, você prefere assuntos ligados à:',
        options: [
          {
            option: 'a',
            text: 'Arte, esportes e atividades extracurriculares'
          },
          {
            option: 'b',
            text: 'Biologia e genética'
          },
          {
            option: 'c',
            text: 'Ciências humanas, idiomas'
          },
          {
            option: 'd',
            text: 'Ciências exatas'
          },
        ]
      },
      {
        id: 1,
        title: 'Na escola, você prefere assuntos ligados à:',
        options: [
          {
            id: 'a',
            text: 'Arte, esportes e atividades extracurriculares'
          },
          {
            id: 'b',
            text: 'Biologia e genética'
          },
          {
            id: 'c',
            text: 'Ciências humanas, idiomas'
          },
          {
            id: 'd',
            text: 'Ciências exatas'
          },
        ]
      }
    ];

    var _a = [];
    var _b = [];
    var _c = [];
    var _d = [];

    $scope.onPreviuosPage = function () {
      $scope.questionPosition--;
    }
    $scope.onNextPage = function () {
      $scope.questionPosition++;
    }

    $scope.onSelectOption = function (item, option, index) {

      $scope.selectedOptionId = option.option;

      $scope.selectedOptions[index] = {
        question: item,
        option: option
      };

      console.log($scope.selectedOptions);
    }
  });