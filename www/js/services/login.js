angular.module('WykopApp')
    .service('LoginService', function ($http, $log,$rootScope) {
        return {
            loginWithKey: function (login,accountkey) {
                return $http.post('http://a.wykop.pl/user/login/appkey/'+$rootScope.API_KEY+'/',{login:login,accountkey:accountkey});
            }
        }
    });
