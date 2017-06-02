function cambiar(id1, id2) {
    var i = document.getElementById(id2).src
    document.getElementById(id2).src = document.getElementById(id1).src;
    document.getElementById(id1).src = i;

}