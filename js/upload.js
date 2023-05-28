function onUpload() {
    document.getElementById('file-input').click();
    return false;
}

document.getElementById('file-input').addEventListener('change', function() {
    document.getElementById('upload-form').submit();
    // window.location.href = 'file-upload.html'; // Change the URL to the desired page
});
