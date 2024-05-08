let primeiraVez = localStorage.getItem("pv") || 0
console.log("Boas vindas: "+primeiraVez)
 login = localStorage.getItem("login")
let email = localStorage.getItem("email")

let nome = localStorage.getItem("nome")


let mensagem = `Opa ${nome} seja bem vindo(a), agradecemos sua chegada aqui então aproveite (;`

let _subject = `DGX TEAM Te da as boas vindas!❤️`

if (primeiraVez === 0 && login == "true") {
  console.log("pv: "+primeiraVez)
  fetch('https://formsubmit.co/ajax/'+email, {
  
  method: "post",
  body: new URLSearchParams ({
    
    _subject,mensagem
    
  })
  
  })
  
  .then(response => response.json())
  .then(data => {
    
    primeiraVez = 1
    localStorage.setItem("pv",primeiraVez)
    console.log("Boas vinda enviada")
  })
  .catch(error => console.error("Erro no envio de e-mails"))
  
}

console.log(email)
console.log("primeiraVez: "+primeiraVez)