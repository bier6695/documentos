function go_to_player(url) {
    var displayVideo = document.querySelector(".ShowPlay");
   displayVideo.classList.add('ShowPlayX');
   displayVideo.innerHTML = `
   <span onclick="listPlayer('', 2);">
       <img src="https://bier6695.github.io/documentos/Playervip/cambiardeservidor.png"  >
   </span>
   <iframe   id="iframe" src="` + url + `" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`;

 
}

function IdiomaSet(a, b) {
    document.querySelector(".PlayerView").classList.add("PlayerViewer"), null != document.querySelector(".set") && document.querySelector(".set").classList.remove("set"), a.classList.add("set"), setTimeout(function() {
        document.querySelector(".PlayerView").classList.remove("PlayerViewer"), null != document.querySelector(".Actived") && document.querySelector(".Actived").classList.remove("Actived"), document.querySelector(".Player" + b).classList.add("Actived")
    }, 300)
}

function listPlayer(){
	var displayVideo = document.querySelector(".ShowPlay");
    displayVideo.classList.remove('ShowPlayX');
	displayVideo.innerHTML = '';
}