angular
    .module('madame-pomfrey')
    .controller('UsuarioController', function ($scope, $http, $state) {
        vm = this;
        vm.tipo = 'Usuario';
        //teste
        vm.home = [{
            imagem: "http://www.metodista.br/rronline/noticias/saude/2013/04/carteira-de-vacinacao/@@images/208c32ee-8d51-487a-bee5-5bbcb0b3fe46.jpeg",
            link: "https://www.visaooeste.com.br/estado-pode-ter-carteira-de-vacinacao-informatizada/ ",
            nome: "Visão Oeste",
            texto: "Estado pode ter carteira de vacinação informatizada",
            data: "Postado há 1h atrás",
        },
        {
            imagem: "https://i1.wp.com/www.vozdepernambuco.com/wp-content/uploads/2017/04/UBS.jpg?fit=570%2C317",
            link: "http://www.prefeitura.sp.gov.br/cidade/secretarias/saude/",
            nome: "Unidades Básica de Saúde",
            texto: "Veja como funciona uma UBS e os Postos mais próximos da sua casa.",
            data: "Postado há 1h atrás",
        },
        {
            imagem: "http://santacasadeparanaiba.com/wp-content/uploads/2015/10/Campanha-Nacional-de-Vacina%C3%A7%C3%A3o-11.jpg",
            link: "http://bvsms.saude.gov.br/bvs/publicacoes/cart_vac.pdf",
            nome: "Cartilha de vacinas",
            texto: "Para quem quer mesmo saber das coisas.",
            data: "Postado há 1h atrás",
        },

        {
            imagem: "https://s2.glbimg.com/MG8l8FfoU3jL2Zn-6Ojj55EB0o8=/0x0:1600x3183/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/R/c/FWR6EnQ8erSF7W02bdKA/febre-amarela.png",
            link: "https://g1.globo.com/sao-paulo/noticia/ubs-tem-longa-fila-para-vacinacao-contra-febre-amarela-mesmo-com-chuva-em-sp.ghtml",
            nome: "Febre Amarela",
            texto: "Febre Amarela",
            data: "Postado há 1h atrás",
        }
        ]


        vm.path = '706905129075639'

        $http.post('/user/read', { path: vm.path })
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

        vm.atualizarDados = function () {
            console.log('Tentando atualizar...')
            $http.post('/user/update', { path: vm.path, data: vm.usuario })
                .then((resposta, erro) => {
                    if (erro) {
                        console.log(erro);
                    } else {
                        console.log(resposta);
                        vm.usuario = resposta.data.message
                    }
                })
        }
        vm.generateCertificate = function () {
            $http.post('/user/certificate', { path: vm.path })
                .then((resposta, erro) => {
                    if (erro) {
                        console.log('Deu ruim carai');
                        console.log(erro)
                    }
                    else {
                        console.log('uhu')
                        console.log(resposta);
                        var res = resposta.data.data;
                        vm.DATA = res.data;
                        vm.CODIGO = res.codigo;
                        console.log(vm.DATA);
                        console.log(vm.CODIGO)
                    }
                })
        }



    })