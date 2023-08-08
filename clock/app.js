setInterval(() => {
   document.getElementById("time").textContent = new Date().toLocaleTimeString();  
},1000);

setInterval(() => {
    document.getElementById("day").textContent = new Date().toLocaleDateString();  
})

