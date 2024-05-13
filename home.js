
let configuracao = document.getElementById("config")
 let dispositivo = navigator.userAgent
 dispositivo = dispositivo.toLowerCase()
  let appBaixado =  localStorage.getItem("app") || false

let exibirApp = document.getElementById("app")
let login = localStorage.getItem("login") || false
let ativarEmails = localStorage.getItem("AtivarEmails") || true
let selectEmail = document.getElementById("AtivarEmails")
selectEmail.value = ativarEmails

setInterval(()=> {
  
  ativarEmails = document.getElementById("AtivarEmails").value
  localStorage.setItem("AtivarEmails",ativarEmails)
  
},100)

if (login === false) {
  
  
  alert("Não encontramos seu login...")
  window.location.href = "index.html"
}



if (dispositivo.includes("android")) {
  
  if (appBaixado === false) {
    
   exibirApp.showModal()
    
  }
  
}



function baixar() {
  
  appBaixado = true
  localStorage.setItem("app",appBaixado)
  exibirApp.close()
  
  
}
 
 function maisTarde() {
   
   exibirApp.close()
   
   
 }

function config() {
  
  configuracao.showModal()
  
  
}

function fecharConfig() {
  
  
  configuracao.close()
  
}

function chat() {
  
  window.open("https://www.mediafire.com/file/r9gxb87i5vudhhe/DGX_CHAT_11.6.apk/file")
  
}

function comunidade() {
  
  window.open("https://chat.whatsapp.com/HD4ytGwdsWz7RqDRwjTTxQ")
  
}

function compartilhar() {
  
  let url = window.location.href
window.open("https://wa.me/?text="+url)
  
  
}

function gc() {
  
 window.open("https://chat.whatsapp.com/Emm5uCKCiFI7f8pO0QWOcF")
  
}

function crossover() { 
  
window.open("https://chat.whatsapp.com/J5AqVzHRggJBnLJpghETob")
  
}
 function cars() {
   
   
window.open("https://chat.whatsapp.com/DZpzWWkRKQNGX4kkQA9fZI")
   
 }
 
 
 function entrarDicord() {
   
   window.open("https://discord.com/invite/aX9tFVEf")
   
   
 }
 
window.addEventListener("contextmenu", function(event) {
  
  event.preventDefault()
  
})