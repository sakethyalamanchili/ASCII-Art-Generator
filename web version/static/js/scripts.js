function filesize(elem){
    document.cookie = `filesize=${elem.files[0].size}`
}
let fileName = document.querySelector('.file-name');
function onUpload(elem) {
    fileName.innerHTML = `${elem.files[0].name} selected`;
    filesize(elem);
}
