(function(angular){
    "use strict";

    angular.module('hackaton-stefanini').config(function ($routeProvider) {
        $routeProvider

            /** Rota para Home */
            .when('/', {
                templateUrl: 'app/spas/homePage/template/home.tpl.html',
                controller: 'HomeController as vm'
            })
            /** Rotas para Pessoas */
            .when('/listarPessoas', {
                templateUrl: 'app/spas/pessoas/template/pessoa-listar.tpl.html',
                controller: 'PessoaListarController as vm'
            })
            .when('/EditarPessoas/:idPessoa', {
                templateUrl: 'app/spas/pessoas/template/pessoa-incluir-alterar.tpl.html',
                controller: 'PessoaIncluirAlterarController as vm'
            })
            .when('/cadastrarPessoa', {
                templateUrl: 'app/spas/pessoas/template/pessoa-incluir-alterar.tpl.html',
                controller: 'PessoaIncluirAlterarController as vm'
            })

        /** Rotas para Perfil */
        .when('/listarPerfil', {
            templateUrl: 'app/spas/perfil/template/perfil-listar.tpl.html',
            controller: 'PerfilListarController as vm'
        })
        /*.when('/EditarPerfils/:idPerfils', {
            templateUrl: 'app/spas/perfil/template/pessoa-incluir-alterar.tpl.html',
            controller: 'PessoaIncluirAlterarController as vm'
        })*/
        .when('/cadastrarPerfil', {
            templateUrl: 'app/spas/perfil/template/perfil-incluir-alterar.tpl.html',
            controller: 'PerfilIncluirAlterarController as vm'
        })
            
            .otherwise({
                templateUrl: 'index_ERROR.html'
            });
    });

}(angular));

