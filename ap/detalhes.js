const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

const url=`https://botafogo-atletas.mange.li/${id}`

async function pegar_dados(url){
    const resposta= (await fetch(url)).json()
    return resposta


 }
pegar_dados(url).then((jogador) => {
    const conteudo=document.getElementById('conteudo')
    const img=document.createElement('img')
    const nome=document.createElement('nome')
    const posicao=document.createElement('posicao')
    const descricao=document.createElement('descricao')
    const nome_completo=document.createElement('nome_completo')
    const nascimento=document.createElement('nascimento')
    const altura=document.createElement('altura')

    img.src=jogador.imagem
    conteudo.appendChild(img)
    nome.textContent=jogador.nome
    conteudo.appendChild(nome)
    posicao.textContent=jogador.posicao
    conteudo.appendChild(posicao)
    descricao.textContent=jogador.descricao
    conteudo.appendChild(descricao)
    nome_completo.textContent=jogador.nome_completo
    conteudo.appendChild(nome_completo)
    nascimento.textContent=jogador.nascimento
    conteudo.appendChild(nascimento)
    altura.textContent=jogador.altura
    conteudo.appendChild(altura)


})
const sair=document.getElementById('btn-sair')
sair.onclick = () => {
    window.location.href = 'atletas.html'
        }