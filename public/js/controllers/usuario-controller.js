angular
    .module('madame-pomfrey')
    .controller('UsuarioController', function ($scope, $http) {
        vm = this;



        $scope.usuario = { nome: 'Lukas' }

        $http.post('/user/read', { path: '706905129075639' })
            .then((resposta, erro) => {
                if (erro) {
                    console.log('Deu ruim carai');
                    console.log(erro)
                } else {
                    console.log(resposta);
                    vm.usuario = resposta.data.response
                    console.log(vm.usuario);
                }
            })



    })