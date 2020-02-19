
// Create a KNN classifier
const knnClassifier = ml5.KNNClassifier();

// Create a featureExtractor that can extract features of an image
const featureExtractor = ml5.featureExtractor("MobileNet", modelReady);

// Get the features of an image
const features = featureExtractor.infer(myImg);

// Add an example with a label to the KNN Classifier
knnClassifier.addExample(features, label);

// Use KNN Classifier to classify these features
knnClassifier.classify(features, function(err, result) {
  console.log(result); // result.label is the predicted label
});

class Restaurant {
  constructor(price, distance, spiciness, type, animation, service_speed){
    this.price = price;
    this.distance = distance;
    this.spiciness = spiciness;
    this.type = type;
    this.animation = animation;
    this.service_speed = service_speed;
    this.attractivity;
  }
}


function random_Gaussian(borne_inf, borne_max, around){
  let r = 0;
  let v = 10;
  let around_minim = (around- borne_inf)/(borne_max-borne_inf)
  for(let i = 0; i<v; i++){
    r += Math.random()*2*around_minim;
  }
  return borne_inf +  (r/v)*(borne_max-borne_inf);
}


function create_restaurant_list(){
  let restaurant_list = [];

  for(let i = 0; i<200;i++){
    let price = Math.floor(Math.random()*3);
    let distance =  Math.random()*15;
    let spiciness =  Math.floor(Math.random()*3);
    let type_list = ["Italian","French","Indonesian","Indian","Chinese","Japanese","British","American"];
    let type = type_list[Math.floor(Math.random() * type_list.length)];
    let animation = Math.floor(Math.random()*3);
    let service_speed = (Math.random()*3);
    let attractivity = Math.random();
    restaurant_list.push(new Restaurant(price, distance, spiciness, type, animation, service_speed));
  }
  return restaurant_list;
}

let restaurant_list = create_restaurant_list();


console.log('aaa');
