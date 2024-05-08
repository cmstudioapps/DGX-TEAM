 nome = localStorage.getItem("nome")
 email = localStorage.getItem("email")
let data = new Date
let diaAtual = data.getDate()
let diaAnterior = localStorage.getItem("diaAnterior") || 0
let diasUsando = parseInt(localStorage.getItem("dias") || 0)

if (diaAtual != diaAnterior) {
  
  diaAnterior = diaAtual
  localStorage.setItem("diaAnterior",diaAnterior)
  
  diasUsando++
  localStorage.setItem("dias",diasUsando.toString())
  
}

//Renderizar:


let user = document.getElementById("user")
let Email = document.getElementById("E-mail")
let tempo = document.getElementById("tempo")

user.innerHTML = `Nome: ${nome}`
Email.innerHTML = `E-mail: ${email}`
tempo.innerHTML = `${diasUsando} Dias Logando.`