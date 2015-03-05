/**
 * Created by johniak on 03/03/15.
 */
angular.module('WykopApp').controller('PmListCtrl', function ($scope, $rootScope, $timeout, PmService) {

    console.log('test');
    $rootScope.$on('loggedIn', function (user) {
        getPmList();
    });

    var getPmList = function () {
        PmService.getPmList().success(function (data) {
            $scope.pmList = data;
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
    $scope.doRefresh=getPmList;
    if (!$rootScope.user) {
        return;
    }
});