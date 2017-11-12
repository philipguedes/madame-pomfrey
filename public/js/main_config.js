/* 
Itens para adicionar no index:

1 - Na chave html do index adicione ng-app="madame-pomfrey". Ex: <html ng-app="madame-pomfrey"></html> 
2 - adicione os scripts abaixo no head do html:
    <!-- Node modules -->
    <script src="node_modules/angular/angular.js"></script>
    <script src="node_modules/angular-route/angular-route.min.js"></script>
    <script src="node_modules/angular-resource/angular-resource.min.js"></script>
    <script src="node_modules/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="node_modules/angular-ui-router.statehelper/statehelper.js"></script>
    <!-- Main Javascript -->
    <script src="js/main_config.js"></script>
    <script src="js/main_run.js"></script>
    <!-- Controllers -->
    <script src="js/controllers/usuario-controller.js"></script>
    <!-- Directives -->
    <!-- Services -->


*/
angular
    .module('madame-pomfrey', ['ngRoute',
        'ngResource',
        'ui.router',
        'ui.router.stateHelper'
    ])
    .config(function ($routeProvider, $stateProvider, $locationProvider, $httpProvider, $urlRouterProvider, $qProvider) {

        $qProvider.errorOnUnhandledRejections(false);


        var inicio = {
            name: 'inicio',
            templateUrl: 'parcial/index.html'
        }
        var home = {
            name: 'inicio.home',
            url: '/',
            templateUrl: 'parcial/home.html',
            controller: 'UsuarioController',
            controllerAs: 'u'
        }
        var historico = {
            name: 'inicio.historico',
            url: '/',
            templateUrl: 'parcial/historico.html',
            controller: 'UsuarioController',
            controllerAs: 'u'
        }

        $stateProvider
            .state(inicio)
            .state(home)
            .state({
                name: 'inicio.historico',
                url: '/',
                templateUrl: 'parcial/historico.html',
                controller: 'UsuarioController',
                controllerAs: 'u'
            });

        $urlRouterProvider.otherwise('/');



    });