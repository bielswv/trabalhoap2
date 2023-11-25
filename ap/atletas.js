const btn_masculino=document.getElementById('btn-masculino')
btn_masculino.onclick =async() =>{
const jogadores=await pegar_dados('https://botafogo-atletas.mange.li/masculino')
    cria_jogador(jogadores)
}

const btn_feminino=document.getElementById('btn-feminino')
btn_feminino.onclick =async() =>{
    const jogadores=await pegar_dados('https://botafogo-atletas.mange.li/feminino')
        cria_jogador(jogadores)
    }

const btn_todos=document.getElementById('btn-todos')
btn_todos.onclick =async() =>{
    const jogadores=await pegar_dados('https://botafogo-atletas.mange.li/all')
        cria_jogador(jogadores)
    }


async function pegar_dados(url){
   const resposta= (await fetch(url)).json()
   return resposta


}


const elenco=document.getElementById('elenco')


function cria_jogador(jogadores){
    elenco.innerHTML=' '

    for (const jogador of jogadores) {
        const card=document.createElement('div')
        card.className='card'
        const img=document.createElement('img')
        const nome=document.createElement('nome')
        const posicao=document.createElement('posicao')

        img.src=jogador.imagem
        card.appendChild(img)
        nome.textContent=jogador.nome
        card.appendChild(nome)
        posicao.textContent=jogador.posicao
        card.appendChild(posicao)

        card.onclick = () => {
            window.location.href = `detalhes.html?id=${jogador.id}`
                }

        elenco.appendChild(card)
    }

}

const sair=document.getElementById('btn-sair')
sair.onclick = () => {
    window.location.href = 'index.html'
        }



