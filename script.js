
function memeGenerator() {
    var datas = [];
    var memeUrl = "https://api.imgflip.com/get_memes";
    var btn = document.getElementsByTagName("button")[0];

    getMemes().then(json => {
        datas = json.data.memes;
        btn.addEventListener("click", function () {
            if (datas) {
                var currentMeme = loadRandomMeme();
                displayMeme(currentMeme);
            }
        });
    }).catch(error => console.error(error));

    async function getMemes() {
        return fetch(memeUrl)
                .then(response => response.json())
                .catch(e => console.error(e));
    }

    function loadRandomMeme() {
        var length = datas.length-1;
        var randomNumber = Math.floor(Math.random() * length);
        return datas[randomNumber];
    }

    function displayMeme(meme) {
        var container = document.getElementsByClassName('meme-picture')[0].getElementsByTagName("img")[0];
        container.src = meme.url;

        var topText = document.getElementById("topText");
        var bottomText = document.getElementById("bottomText");

        var topContainer = document.getElementsByClassName("topContainer")[0];
        var bottomContainer = document.getElementsByClassName("bottomContainer")[0];

        topContainer.innerHTML = topText.value;
        bottomContainer.innerHTML = bottomText.value;
    }
}

window.onload = memeGenerator;