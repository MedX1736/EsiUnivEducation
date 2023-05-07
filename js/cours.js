// Get the query parameters from the current URL
const params = new URLSearchParams(window.location.search);
// Get the value of a specific parameter
const univ = params.get('univ');
const region = params.get('region');
const cours = params.get('cours');
const video = params.get('video');

const apiLink = `http://192.168.137.49:81/api/${region}/${univ}/${cours}`

const iframeVideo = document.getElementById('video-source');
iframeVideo.src = `${apiLink}/Cours.mp4`;

const iframePdf = document.getElementById('pdf-iframe');
const iDataPdf = document.getElementById('pdf-data');
console.log(iframePdf);
console.log(iDataPdf);
iframePdf.src = `${apiLink}/sample.pdf`;
iDataPdf.data = `${apiLink}/sample.pdf`;



$("#title").text(video)

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

