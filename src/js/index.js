const btnAtualizar = document.querySelector(".advice-update")
const idDoConselho = document.querySelector(".advice-id")
const textoDoConselho = document.querySelector(".advice-description")

btnAtualizar.addEventListener("click", () => {
    pegarConselho()
})

async function criarConselhoAleatorio() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function pegarConselho() {
    try {
        const conselho = await criarConselhoAleatorio()
        const idConselho = conselho.slip.id
        idDoConselho.innerText = `advice #${idConselho}`
        const textoConselho = conselho.slip.advice
        textoDoConselho.innerText = `"${textoConselho}"`
    }catch(error){
        console.error("Erro ao tentar buscar as informações da API", error)
    }
}

pegarConselho()