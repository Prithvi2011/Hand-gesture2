prediction1="";
prediction2="";
Webcam.set({
    width:350,
    heigtht:300,
    image_foramt:"png",
    png_quality:90
});
camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+ data_uri+"'/>"
    });
}
console.log("ml5 verion:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jnDyTOcUK/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
function speak(){
    var synth=window.SpeechSynthesis;
    speakdata_1="the first prediction is"+prediction1;
    speakdata_2="the second prediction is"+prediction2;
    utterThis=new SpeechSynthesisUtterance(speakdata_1+speakdata_2);
    synth.speak(utterThis);

}