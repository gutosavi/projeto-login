function meuEscopo (){
    const form = document.querySelector('#formulario');

    const dados = [];

    function recebeEvento(evento){
        evento.preventDefault();

        const usuario = form.querySelector('.usuario');
        const senha = form.querySelector('.senha');

        dados.push({
            usuario: usuario.value,
            senha: senha.value
        });

        console.log(dados);
    }

    form.addEventListener('submit', recebeEvento)
}

meuEscopo();