
class Restaurant {
  constructor(price, distance, spiciness, type, animation, service_speed, attractivity, num){
    this.price = price;
    this.distance = distance;
    this.spiciness = spiciness;
    this.type = type;
    this.animation = animation;
    this.service_speed = service_speed;
    this.attractivity =attractivity;
    this.num = num;
    let x = Math.random;
    this.icon = "none"
  }
}

function getFeaturesNormalized(restaurant){
  return [restaurant.price/3, restaurant.distance/15, restaurant.animation/3, restaurant.spiciness/3, /*restaurant.type */restaurant.service_speed/3];
}

function getLabel(restaurant){
  return restaurant.attractivity;
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
  let num = 0;
  for(let i = 0; i<200;i++){
    let price = Math.floor(Math.random()*3);
    let distance =   Math.floor(Math.random() * 15);
    let spiciness =  Math.floor(Math.random()*3);
    let type_list = ["Italian","French","Indonesian","Indian","Chinese","Japanese","British","American"];
    let type = type_list[Math.floor(Math.random() * type_list.length)];
    let animation = Math.floor(Math.random()*3);
    let service_speed = (Math.random()*3);
    let attractivity = Math.random();
    restaurant_list.push(new Restaurant(price, distance, spiciness, type, animation, service_speed, attractivity, num));
    num++;
  }
  return restaurant_list;
}

function getRestaurants(){
  //if no database are stored on the local storage generate one and store it
  //
  localStorage.clear();
  if(!localStorage.restaurantData){
    let restList = create_restaurant_list();
    let restListJSON = JSON.stringify(restList);
    localStorage.setItem('restaurantData',restListJSON);
  }
  let dataBase = JSON.parse(localStorage.restaurantData);
  return dataBase;
}

function reduceDatAttractivityDifference(){
  let restaurants = getRestaurants();

  restaurants.forEach(function(elem, index) {
     restaurants[index].attractivity +=  (0.5-restaurants[index].attractivity)/4 ;
  });
  let restListJSON = JSON.stringify(restaurants);
  localStorage.setItem('restaurantData',restListJSON);


}

function increaseAttractivity(num, icon){
  let restaurants = getRestaurants();
  restaurants[num].attractivity = 1;
  restaurants[num].icon = icon;
  let restListJSON = JSON.stringify(restaurants);
  localStorage.setItem('restaurantData',restListJSON);
}

function decreaseAttractivity(num){

  let restaurants = getRestaurants();
  restaurants[num].attractivity = 0;
  let restListJSON = JSON.stringify(restaurants);
  localStorage.setItem('restaurantData',restListJSON);
}
