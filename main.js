function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CwUy-GOTC/model.json',modelReady)
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
if(error){
    console.error(error);
}else{
    console.log(results);
    random_nr_r = Math.floor(Math.random()*255)+1;
    random_nr_g = Math.floor(Math.random()*255)+1;
    random_nr_b = Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML="i can hear: " +results[0].label;
document.getElementById("result_confidence").innerHTML="accuracy: " +(results[0].confidence *100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+random_nr_r+","+random_nr_g+","+random_nr_b+")";
document.getElementById("result_confidence").style.color="rgb("+random_nr_r+","+random_nr_g+","+random_nr_b+")";
img =document.getElementById("image")
if(results[0].label=="cat"){
    img.src="Cat_November_2010-1a.jpg";
}
else if(results[0].label=="barking"){
    img.src="golden-retriever-royalty-free-image-506756303-1560962726.jpg";
}
else if(results[0].label=="moo"){
    img.src="Cow_female_black_white.jpg";
}
else{
    img.src="download (1).png";
}
}
}