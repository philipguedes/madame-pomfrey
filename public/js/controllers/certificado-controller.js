angular
    .module('madame-pomfrey')
    .controller('CertificadoController', function ($scope, $http, $location, $anchorScroll) {
        vm = this;
        vm.buscar = { certificado: 'c511cf33-3d17-48df-9c9c-25397a6ce012', path: '706905129075639' };

        vm.buscarCertificado = function () {
            $http.post('/user/certificate/recover', vm.buscar)
                .then((resposta, erro) => {
                    if (erro) {
                        console.log(erro);
                    } else {
                        console.log(resposta);
                        vm.usuario = resposta.data.response;
                        $location.hash('conteudo');
                        $anchorScroll();
                    }
                })
        }

    })