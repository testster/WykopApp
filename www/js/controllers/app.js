angular.module('WykopApp').controller('AppCtrl', function ($scope, $rootScope, LoginService) {
        LoginService.loginWithKey('johni4k', 'EAJ00I4wcjWVCmePm0pa').then(function(resp) {
            console.log('Success', resp);
            console.log($rootScope);
            $rootScope.user= resp.data;
            $rootScope.$broadcast("loggedIn", $rootScope.user);
        }, function(err) {
            console.error('ERR', err);
        });

    });

