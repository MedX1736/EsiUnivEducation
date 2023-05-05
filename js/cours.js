// Get the query parameters from the current URL
const params = new URLSearchParams(window.location.search);
// Get the value of a specific parameter
const univ = params.get('univ');
const cours = params.get('cours');
const video = params.get('video');

$("#title").text(video)

function showVideo() {
    
    document.getElementById("video-icon").classList.add("active");
    document.getElementById("pdf-icon").classList.remove("active");
    // document.querySelector("#subnav .selected-icon").style.marginLeft = "0";
    console.log(document.getElementById("video-container").style)
    document.getElementById("video-container").style.display = "block";
    document.getElementById("pdf-container").style.display = "none";
}

function showPDF() {
    document.getElementById("pdf-icon").classList.add("active");
    document.getElementById("video-icon").classList.remove("active");
    // document.querySelector("#subnav .selected-icon").style.marginLeft = "50%";
    document.getElementById("pdf-container").style.display = "block";
    document.getElementById("video-container").style.display = "none";
}
