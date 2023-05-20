function startClassification()
{
    navigator.medialDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4vakp5eUT/
    ', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}