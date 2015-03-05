angular.module('WykopApp')
    .service('PmService', function ($http,$rootScope, $log) {
        return {
            getPmList: function () {
                return $http.get('http://a.wykop.pl/pm/conversationslist/appkey/'+$rootScope.API_KEY+'/userkey/'+$rootScope.user.userkey);
            },
            getPmDetails: function (author) {
               return $http.get('http://a.wykop.pl/pm/conversation/'+author+'/appkey/'+$rootScope.API_KEY+'/userkey/'+$rootScope.user.userkey);
            }
        }
    });
