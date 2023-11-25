const btn_entrar=document.getElementById("btn-entrar")
btn_entrar.onclick = () => {
    verifica_senha()
        }

function verifica_senha(){
    const senha=document.getElementById("entrada-senha")

    const senha_passada=hex_md5(senha.value)
    const senha_padrao=hex_md5('SENHA')

    if (senha_passada === senha_padrao){
       window.location.href = 'atletas.html'

    }
    else{
        alert('Senha incorreta')
    }
}