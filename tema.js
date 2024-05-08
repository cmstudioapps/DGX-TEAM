let tema = localStorage.getItem("tema") || 0

setInterval(()=> {
  
  tema = document.getElementById("tema").value
  localStorage.setItem("tema",tema)
  
  if (tema == "1") {
  
  document.body.style.backgroundColor = "mediumpurple"
  document.body.style.color = "white"
  
} else {
  
  document.body.style.backgroundColor = "black"
  document.body.style.color = "white"
  
}
  
},100)

