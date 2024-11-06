const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_com_acesso_a_educacao/1e9) 
    const pessoasNoMundo = (dados.total_pessoas_mundo/1e9) 
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    const minutos = Math.round((dados.tempo_medio_dia_estudando - horas)*60)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${pessoasNoMundo} </span> de pessoas e que aproximadamente <span> ${pessoasConectadas} </span> estão empregadas em serviços registrados. Eles trabalham <span> ${horas} </span> horas e <span>${minutos}</span> minutos por semana.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

visualizarInformacoesGlobais()