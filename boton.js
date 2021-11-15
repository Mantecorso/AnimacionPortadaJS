window.addEventListener('load', function() {
    
    const banner2 = this.document.getElementsByClassName('banner2')[0];
    const blocks2 = this.document.getElementsByClassName('blocks2');
    let numeo;
    numeo = true;
    
    let botonaco;
    botonaco = this.document.getElementById('botonaco');

    botonaco.addEventListener('click', function() {
          
        if (numeo == false) {
            for (var i = 0; i < 400; i++) {
                blocks2[i].style.display = "none";
            }
            numeo = true;
        } else {
            for (var i = 0; i < 400; i++) {
                banner2.innerHTML += "<div class = 'blocks2'></div>";
                blocks2[i].style.display = "block";
                blocks2[i].style.animationDelay = `${i * 0.05}s`;
            }
            numeo = false;
        }
    })
})