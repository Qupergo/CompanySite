

(function() {
    function showImage(file) {
        let divId = "box";

        let upload_div = document.getElementById("show_here");
        let type = /image.*/

        if (!file.type.match(type)) {
            throw "The input file must be and image in order to be classified"
        }

        let img = document.createElement("img");
        img.file = file;
        img.classList.add("uploaded_image")
        upload_div.appendChild(img)

        let reader = new FileReader();
        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        reader.readAsDataURL(file);

    }

    
    let uploadfiles = document.querySelector('#fileinput');
    uploadfiles.addEventListener('change', function () {
        let files = this.files;
        for(let i=0; i<files.length; i++){
            showImage(this.files[i]);
        }

    }, false);
})();

function recognise_image () {
    let image = document.getElementsByClassName("uploaded_image")
    let text = document.getElementById("recognise_text");

    if (image.length !== 0) {
        let items = ["Cat", "Chair", "Person", "Plane", "Paper", "Monster", "Satanic ritual", "Phone", "Book", "Ship", "Dog"]
        let item = items[Math.floor(Math.random()*items.length)];

        text.innerHTML = "It seems to be a " + item
    }

    else {
        text.innerHTML = "There is nothing to recognise."
    }
}