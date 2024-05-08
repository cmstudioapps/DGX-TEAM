let nome = localStorage.getItem("nome")
let email = localStorage.getItem("email")
let login = localStorage.getItem("login") || false
let codigo = Math.floor(Math.random()*300)+100
console.log(codigo)


if (login != false) {
  
  
  window.location.href = "home.html"
  
}


function ir() {
  
  if (login != true) {
  
  nome = document.getElementById("Nome").value
  localStorage.setItem("nome",nome)
  
  email = document.getElementById("email").value
  localStorage.setItem("email",email)
  
  let aviso = document.getElementById("aviso")
  
  if (nome && email && email.includes("@")) {
    
    aviso.innerHTML = "Aguarde..."
    aviso.style.backgroundColor = "yellow"
    aviso.style.color = "black"
  } else {
    
     aviso.innerHTML = "Preencha todos os campos corretamente!"
    aviso.style.backgroundColor = "yellow"
    aviso.style.color = "black"
    
    
  }
  
  
  
  
  
  let mensagem = `Oi ${nome}, Seu codigo de verificação é ${codigo}`
  let _subject = "DGX TEAM (Codigo de verificação)"
  
  if (nome && email && email.includes("@")) {
  
  fetch('https://formsubmit.co/ajax/'+email, {
    
    method: "post",
    body: new URLSearchParams({
      
      _subject,mensagem
      
    })
    
    
  })
  
  .then(response => response.json())
  .then(data => {
    
    aviso.innerHTML = `Enviamos um e-mail para ${email} com um código.`
    aviso.style.backgroundColor = "pink"
    
  })
  .catch(error => {
    
    aviso.innerHTML = "Não conseguimos enviar o código para "+email
    aviso.style.backgroundColor = "red"
    
  })
  
  }
  } else {
    
    aviso.innerHTML = "Você ja fez login!"
    aviso.style.backgroundColor = "greenyellow"
  }
}


function cood() {
  
  let cod = document.getElementById("cod").value
  
  if (cod == codigo) {
    
    
    
    aviso.innerHTML = "Verificado com sucesso!<br>Aguarde..."
    aviso.style.backgroundColor = "greenyellow"
    
    let dados = {
    
    Usuários: nome,
    Email: email
    
  }
    
  
    fetch('https://api.sheetmonkey.io/form/ji8NmjvDgWvoc9qQZnciQ9', {
      
      method: "post",
      headers: {
        
        "Content-type": "application/json"
      },
      body: JSON.stringify(dados)
      
      
    })
    
    .then(response => response.text())
    .then(data => {
      
      login = true
     localStorage.setItem("login", login)
     
     window.location.href = "home.html"
      
    })
    .catch(error => {
      
      aviso.innerHTML = "Ouve um erro ao enviar dados "+error
    aviso.style.backgroundColor = "red"
      
      
    })
    
  } else {
    
    aviso.innerHTML = "Código não encontrado."
    aviso.style.backgroundColor = "red"
    
    
  }
  
}