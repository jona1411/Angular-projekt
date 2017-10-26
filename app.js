(function(){
    var app = angular.module('absenceList', []);

    app.controller('StudentsController', function($scope) {
        $scope.studentList = students;

    });

    var students =[
        { name: 'Jacob', absence: true, id:1},
        { name: 'Henrik', absence: false, id:2},
        { name: 'Peter',absence: false, id:3},
        { name: 'Bastian', absence: true, id:4},
        { name: 'Frank', absence: true, id:5},
        { name: 'Casper', absence: false, id: 6},
        { name: 'Mia', absence: false, id: 7},
        { name: 'Iben', absence: true, id: 8},
        { name: 'Michael', absence: false, id: 9},
        { name: 'Buster', absence: false, id: 10},
        { name: 'Gob', abssence: false, id: 11},
        { name: 'Lucille', absence: true, id: 12},
        { name: 'George', absence: false, id: 13},
        { name: 'Slick Rick', absence: true, id: 14}
    ];



})();
