function cambioVisible(idbloque) {
    var panel = document.getElementById(idbloque);
    if(panel.style.display == "none")
        panel.style.display = "block";
    else
        panel.style.display = "none";
}

