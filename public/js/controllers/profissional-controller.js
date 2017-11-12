angular
    .module('madame-pomfrey')
    .controller('ProfissionalController', function ($scope, $sce, $http, $state) {
        vm = this;
        vm.mensagem = 'Profissional'
        vm.tipo = 'Profissional';
        //vm.path = '';
        vm.path = '706905129075639'
        vm.data = "kkkkkkkkkk"
        console.log()

        // vm.notImplemented()

        vm.test = function () {
            if (vm.path == $scope.path) {
                $scope.relatorio = $sce.trustAsHtml(
                    '<div class="nav-tabs-responsive scrollbars">' +
                    '<div>O paciente não tomou as seguintes vacinas: <p>Vacina contra Hepatite B</p>' +
                    '<ul class="nav nav-justified">' +
                    '<li class="disabled">' +
                    '<button class="btn btn-linkt">Clique aqui para registrar nova vacina</button>' +
                    '</li>' +
                    '</ul>' +
                    '</div>'
                    + '</div>');
            } else {
                $scope.relatorio = $sce.trustAsHtml('<div>Paciente não encontrado!</div>');
            }
            // $http.post('/user/read', { path: $scope.path })
            // .then((resposta, erro) => {
            //     if (erro) {
            //         $scope.relatorio = $sce.trustAsHtml('<div>Paciente não encontrado!</div>');
            //         console.log('Deu ruim carai');
            //         console.log(erro)
            //     } else {
            //             $scope.relatorio = $sce.trustAsHtml('<div>O paciente não tomou as seguintes vacinas: <br> - Vacina contra Hepatite B</div>');
            //             console.log(resposta);
            //             vm.usuario = resposta.data.response
            //             console.log(vm.usuario);
            //         }
            //     })

        }
    })