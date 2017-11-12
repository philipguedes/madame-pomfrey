angular
    .module('madame-pomfrey')
    .controller('UsuarioController', function ($scope, $http) {
        vm = this;

        var home = [{
            imagem:"http://www.metodista.br/rronline/noticias/saude/2013/04/carteira-de-vacinacao/@@images/208c32ee-8d51-487a-bee5-5bbcb0b3fe46.jpeg",
            link:"https://www.visaooeste.com.br/estado-pode-ter-carteira-de-vacinacao-informatizada/ ",
            nome:"Visão Oeste",
            texto:"",
            data:"",
        },
        {
            link:"",
            nome:"",
            texto:"",
            data:"",
        },{
            link:"",
            nome:"",
            texto:"",
            data:"",
        },{
            link:"",
            nome:"",
            texto:"",
            data:"",
        },
    ]


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