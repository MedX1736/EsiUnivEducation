// Get the query parameters from the current URL
const params = new URLSearchParams(window.location.search);
// Get the value of a specific parameter
const univ = params.get('univ');
const region = params.get('region');
const cours = params.get('cours');
const video = params.get('video');

document.getElementById("title").innerHTML = video ;

const apiLink = `http://192.168.178.114/api/${region}/${univ}/${cours}`

const iframeVideo = document.getElementById('video-source');
iframeVideo.src = `${apiLink}/Cours.webm?autoplay=1`;

const iframePdf = document.getElementById('pdf-iframe');
const iDataPdf = document.getElementById('pdf-data');
iframePdf.src = `${apiLink}/Cours.pdf`;
iDataPdf.data = `${apiLink}/Cours.pdf`;



function showVideo() {
    
    document.getElementById("video-icon").classList.add("active");
    document.getElementById("pdf-icon").classList.remove("active");
    console.log(document.getElementById("video-container").style)
    document.getElementById("video-container").style.display = "block";
    document.getElementById("pdf-container").style.display = "none";
}

function showPDF() {
    document.getElementById("pdf-icon").classList.add("active");
    document.getElementById("video-icon").classList.remove("active");
    document.getElementById("pdf-container").style.display = "block";
    document.getElementById("video-container").style.display = "none";
}


function downloadVideo(){
    window.location.assign(`${apiLink}/Cours.webm`);
}

function downloadPDF(){
    window.location.assign(`${apiLink}/sample.pdf`);
}