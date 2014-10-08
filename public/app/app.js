angular.module('app', []);
angular.module('app').controller('testCtrl', function($scope) {
    $scope.jobs = [{
            title: 'Sales Person',
            description: 'first job'
        }, {
            title: 'Accountant',
            description: 'second  job'
        }

    ];

});