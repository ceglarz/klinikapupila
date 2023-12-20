var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-img");
//var captionText = document.getElementById("caption");

openModal = function (element) {

    var src = element.src
    var positionStart = src.length - 6;
    var positionStop = positionStart+2;
    src = [src.slice(0, positionStart), src.slice(positionStop)].join('');
    modal.style.display = "block";
    modalImg.src = src;
//    captionText.innerHTML = element.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}