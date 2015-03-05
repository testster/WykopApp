angular.module('WykopApp').controller('PmDetailsCtrl', function ($scope, $rootScope, $timeout, $stateParams, PmService) {


    $scope.author =$stateParams.author;

    var getPm= function () {
        PmService.getPmDetails($scope.author).success(function (data) {
            $scope.pm = data;
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
    if (!$rootScope.user) {
        return;
    }
    getPm();
});/**
 * Created by johniak on 04/03/15.
 */
