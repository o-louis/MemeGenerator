
function memeGenerator() {
    var memeUrl = "https://api.imgflip.com/get_memes";
    var datas = [];
    var btn = document.getElementsByTagName("button")[0];

    btn.addEventListener("click", function() {

        getMemes().then(json => {
            datas = json.data.memes;
            var meme = loadRandomMeme();
            displayMeme(meme);

            var topText = document.getElementById("topText");
            var bottomText = document.getElementById("bottomText");

            var topContainer = document.getElementsByClassName("topContainer")[0];
            var bottomContainer = document.getElementsByClassName("bottomContainer")[0];

            topContainer.innerHTML = topText.value;
            bottomContainer.innerHTML = bottomText.value;

        }).catch(error => console.error(error))

    });


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
    }
}

window.onload = memeGenerator;