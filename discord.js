let adDiscord = document.getElementById("ad-discord")
let videoDiscord = document.getElementById("videoDiscord")
data = new Date
let dia = data.getDate()
let Anterior = localStorage.getItem("Anterior") || 0

if (Anterior != dia) {
  
  adDiscord.showModal()
  Anterior = dia
  localStorage.setItem("Anterior",Anterior)
}

videoDiscord.addEventListener("ended", function() {
  
  adDiscord.close()
  
})