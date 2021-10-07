"use strict";

const modal = document.getElementById("settingsButton");
const info = document.getElementById("infoButton");

document.getElementsByClassName("tabButton")[0].click();

function changeTab(evt, tabName) {
    const x = document.getElementsByClassName("tab");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    } else if (event.target === info) {
        info.style.display = "none";
    }
}
