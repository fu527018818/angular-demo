//配置路由
        var app = angular.module('app', ['ngRoute','ngSanitize'])
        app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    template: '<h1>首页a</h1>'
                })
                .when('/list', {
                    // template:'<h1>列表页</h1><h5 ng-repeat="i in list">{{i.title}}</h5>',
                    templateUrl: './tpl/list.html', // 模板文件路径
                    controller: 'listCtrl'   //控制器
                })
                .when('/news', {
                    template: '<h1>最新资讯</h1>'
                })
                .when('/me', {
                    template: '<h1>关于我</h1>'
                })
                .when('/book_detail/:id', {
                    templateUrl: './tpl/detail.html',
                    controller: 'detailCtrl'
                })
                .otherwise({ redirectTo: '/' });   //其他路由时
            $locationProvider.hashPrefix('')    
        }])