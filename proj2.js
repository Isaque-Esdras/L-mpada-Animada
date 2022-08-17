const but1on = document.getElementById('buton')
const but2off = document.getElementById('butoff')
const acao = document.getElementById('deslig')

but1on.addEventListener('click' , ligando)
but2off.addEventListener('click' , desligando)
acao.addEventListener('mouseenter' , quebrando)
acao.addEventListener('mouseleave', permanecer)

function ligando() {
    if (!permanecer()) {
        acao.src = './ybxlO.jpg'
    }
}

function desligando() {
    if (!permanecer()) {
        acao.src = './img p js 3.jpg'
    }
}

function quebrando() {
    acao.src = './MRjsF.jpg'
}

function permanecer() {
    return acao.src.indexOf('MRjsF')>-1
}
