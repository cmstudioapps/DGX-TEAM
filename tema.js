let tema = localStorage.getItem("tema") || 0
let temaa = document.getElementById("tema")
temaa.value = tema

temaa.addEventListener("blur",function() {
  
  temaa = document.getElementById("tema").value

  
  tema = temaa
  localStorage.setItem("tema",tema)
  
  if (tema === "1") {
  
  document.body.style.backgroundColor = "mediumpurple"
  document.body.style.color = "white"
  
} else {
  
  document.body.style.backgroundColor = "black"
  document.body.style.color = "white"
  
}
})


  
 if (tema === "1") {
  
  document.body.style.backgroundColor = "mediumpurple"
  document.body.style.color = "white"
  
} else {
  
  document.body.style.backgroundColor = "black"
  document.body.style.color = "white"
  
} 
  


