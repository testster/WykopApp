'use strict';

angular.module('WykopApp')
    .factory('HttpInterceptor', function ($rootScope) {
        return {
            request: function (config) {
                if (!config.url.startsWith('http://a.wykop.pl/'))
                    return config;
                var data = $rootScope.API_SECRET + config.url;
                if (config.data) {
                    var keys = Object.keys(config.data);
                    keys.sort();
                    for (var i = 0; i < keys.length; i++) {
                        data += config.data[keys[i]];
                        if (i + 1 < keys.length) {
                            data += ','
                        }
                    }
                    config.data = $.param(config.data);
                }
                var hash = CryptoJS.MD5(data);
                config.headers['apisign'] = hash;
                config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                return config;
            }
        };
    });
/**
 * Created by johniak on 27/02/15.
 */
