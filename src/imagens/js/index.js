/*Escrever a descrição do algoritomo, o que ele fará antes de começar a codar*/
/*Ao clicar, o card do pokemon correspondente abre, o que estava aberto se esconde.
----------------------------------------------------------------------------------------
Serão necessários dois elementos:
1-listagem
2-cartão pokemon
--------------------------------------------------------------------------------------
const nome = "Abel" = Const é uma variavel constante.
console.log(nome)
--------------------------------------------------------------------------------------
Serão necessários duas variaveis no JS para trabalhar com elementos na tela.
Vamos precisar trabalhar com evento de click acionado pelo user na listagem de pokemon.

- remover a classe aberto só do cartão que está aberto

- ao clicar em algum item da lista, pegamos  id do ite, para saber qual card mostrar

- remover a classe ativo que marca o pokemon selecionado
- adicionar a classe ativo no item lista selecionado
*/
/*Precisamos criar duas variáveis no JS para trabalhar*/



//Vamos precisar trabalhar com evento de click acionado pelo user na listagem de pokemon.
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
    //remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover class ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem =  document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a class ativo

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})