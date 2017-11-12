angular
    .module('madame-pomfrey')
    .controller('CertificadoController', function ($scope, $http) {
        vm = this;

        vm.buscarCertificado = function () {
            $http.post('/user/certificate/recover', vm.buscar)
                .then((resposta, erro) => {
                    if (erro) {
                        console.log(erro);
                    } else {
                        console.log(resposta);
                    }
                })
        }

    })