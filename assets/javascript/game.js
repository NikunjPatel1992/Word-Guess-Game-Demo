var win = 0;
var loss = 0;
var word = ["tom", "jerry", "robert", "lee"]

//var titleAudio = new Audio('assets/audio/main-title-short.mp3');
var firstaudio = new Audio('assets/song/first.mp3')
var secondaudio = new Audio('assets/song/second.mp3')
var thirdaudio = new Audio('assets/song/third.mp3')
var forthaudio = new Audio('assets/song/forth.mp3')


var left = 10;
var guesslatter = [];
var remaininglatter = [];
var isCorrectOrRepeated;

var answerDiv = document.getElementById('answer');

var computerguess = word[Math.floor(Math.random() * word.length)];
console.log(computerguess);
var remainingLatter = computerguess.length;


var displaystring = guesslatter.join(" ");

//var latter = "<div style= color:white;> <h2> Wins : " + displaystring + "</h2></div>";
//document.querySelector("#answer").innerHTML = latter;

//space.innerHTML = "<h2> Answer : " + displaystring + "</h2>";


for (var i = 0; i < computerguess.length; i++) {
    // console.log(word[i]);
    guesslatter.push("-");
}

var displaystring = guesslatter.join(" ");

//answerDiv.innerHTML =  displayString ;

document.onkeyup = function (event) {
    var userguess = event.key;
    userguess = userguess.toLowerCase();



    var latter = "<div style= color:white;> <h2> Current Word : " + displaystring + "</h2></div>";
    document.querySelector("#answer").innerHTML = latter;

    if (userguess === 'a' || userguess === 'b' || userguess === 'c' || userguess === 'd' || userguess === 'e' || userguess === 'f' || userguess === 'g' || userguess === 'h' || userguess === 'i' || userguess === 'j' || userguess === 'k' || userguess === 'l' || userguess === 'm' || userguess === 'n' || userguess === 'o' || userguess === 'p' || userguess === 'q' || userguess === 'r' || userguess === 's' || userguess === 't' || userguess === 'u' || userguess === 'v' || userguess === 'w' || userguess === 'x' || userguess === 'y' || userguess === 'z') {

        for (var i = 0; i < computerguess.length; i++) {
            if (computerguess[i] === userguess) {
                guesslatter[i] = userguess;
                displaystring = guesslatter.join(" ");
                //console.log("if con" + displaystring);
                var latter = "<div style= color:white;> <h2> Current Word : " + displaystring + "</h2></div>";
                document.querySelector("#answer").innerHTML = latter;
                remainingLatter--;
                isCorrectOrRepeated = true;
            } else {
                // left--
                // var rem = "<div style= color:white;> <h2> Number Of Guesses remaining : " + left + "</h2></div>";
                // document.querySelector("#remaining").innerHTML = rem;
                //if (computerguess[i] != userguess) {
                //remaininglatter[i] = userguess;
                //var remainingstring = guesslatter.join(" ");
                //console.log(remaininglatter)
            }
        }

        if (computerguess === guesslatter.join("")) {
            win++;
            var win1 = "<div style= color:white;> <h2> Win : " + win + "</h2></div>";
            document.querySelector("#wins").innerHTML = win1;
            switch (computerguess) {
                case "tom":
                    //alert("tom is hear");
                    var img = "<div> <img src='assets/image/first.jpg' style='height: 200; width: 200'></div>"
                    document.querySelector("#photo").innerHTML = img;
                    firstaudio.play();
                    break;
                case "jerry":
                    //alert("jerry is hear");
                    var img = "<div> <img src='assets/image/second.png' style='height: 200; width: 200'></div>"
                    document.querySelector("#photo").innerHTML = img;
                    secondaudio.play();
                    break;
                case "robert":
                    var img = "<div> <img src='assets/image/third.jpg' style='height: 200; width: 200'></div>"
                    //alert("robert is hear");
                    document.querySelector("#photo").innerHTML = img;
                    thirdaudio.play();
                    break;
                case "lee":
                    var img = "<div> <img src='assets/image/forth.jpg' style='height: 200; width: 200'></div>"
                    //alert("lee is hear");
                    document.querySelector("#photo").innerHTML = img;
                    forthaudio.play();
                    break;

            }
            left = 10;
        }


    }
}


