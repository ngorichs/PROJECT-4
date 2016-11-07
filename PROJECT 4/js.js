/**
 * Created by noah.gorichs123 on 11/1/16.
 */
function spin (){

    //var picture = ["white", "red", "orange", "yellow", "green", "blue", "purple", "black", "gray", "aqua"];
    var picture = ["img/dragon.png", "img/pin.png", "img/puss.png", "img/ginger.jpg", "img/human.jpg", "img/shrek.png", "img/farquad.jpg", "img/fiona.png", "img/donkey.png"];


    var slot1 = document.getElementById("1");
    var slot2 = document.getElementById("2");
    var slot3 = document.getElementById("3");
    c1 = Math.floor((Math.random() * 9));
    c2 = Math.floor((Math.random() * 9));
    c3 = Math.floor((Math.random() * 9));
    var score = parseInt(document.getElementById("score").value);
//
    var img1 = document.getElementById("img1");
   var img2 = document.getElementById("img2");
   var img3 = document.getElementById("img3");



//
    img1.src = picture[c1];
    img2.src = picture[c2];
    img3.src = picture[c3];
    //slot1.bgColor = picture[c1];
    //slot2.bgColor = picture[c2];
    //slot3.bgColor = picture[c3];

   try {
       if (!(c1 == c2 || c1 == c3 || c2 == c3)) {
           score = score - 5;
           document.getElementById("score").value = score;
       }

       if (c1 == c2 && c1 == c3 && c2 == c3) {
           score += 45;
           document.getElementById("score").value = score;
       }

       if (c1 == c2 || c1 == c3 || c2 == c3) {
           score += 15;
           document.getElementById("score").value = score;
       }

       if (score < 0 && c1 != c2 && c1 != c3 && c2 != c3) {
           score = 35;
           document.getElementById("score").value = score;
           alert("Loser");
       }

   }
   catch (e) {
       alert("ERROR");
   }

    // Math.floor((Math.random() * 9));
}