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
        'ui.router.stateHelper',
        'uiRouterStyles'
    ])
    .config(function ($routeProvider, $stateProvider, $locationProvider, $httpProvider, $urlRouterProvider, $qProvider) {

        $qProvider.errorOnUnhandledRejections(false);


        var inicio = {
            name: 'usuario',
            templateUrl: 'parcial/usuario/index.html'
        }
        var home = {
            name: 'usuario.home',
            url: '/',
            templateUrl: 'parcial/usuario/home.html',
            controller: 'UsuarioController',
            controllerAs: 'u',
            data: {
                css: 'parcial/postit.css'
            }
        }


        $stateProvider
            .state(inicio)
            .state(home)
            .state({
                name: 'usuario.perfil',
                url: '/perfil',
                templateUrl: 'parcial/usuario/perfil.html',
                controller: 'UsuarioController',
                controllerAs: 'u'
            })
            .state({
                name: 'usuario.prontuario',
                url: '/prontuario',
                templateUrl: 'parcial/usuario/prontuario.html',
                controller: 'UsuarioController',
                controllerAs: 'u'
            })
            .state({
                name: 'usuario.atestado',
                url: '/atestado',
                templateUrl: 'parcial/usuario/atestado.html',
                controller: 'UsuarioController',
                controllerAs: 'u'
            })
            .state({
                name: 'profissional',
                templateUrl: 'parcial/profissional/index.html'
            })
            .state({
                name: 'profissional.profissional',
                url: '/profissional',
                templateUrl: 'parcial/profissional/profissional.html',
                controller: 'ProfissionalController',
                controllerAs: 'u'
            })
            .state({
                name: 'certificado',
                templateUrl: 'parcial/certificado/index.html'
            })
            .state({
                name: 'certificado.certificado',
                url: '/certificado',
                templateUrl: 'parcial/certificado/certificado.html',
                controller: 'CertificadoController',
                controllerAs: 'u'
            });

        $urlRouterProvider.otherwise('/');



    });