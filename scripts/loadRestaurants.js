function loadRestaurant(list, id){

  let restaurant = list[id];

  let restaurantNum = restaurant.num;
  let restaurantType = restaurant.type;
  let restaurantPrice = restaurant.price;
  if (restaurantPrice == 0) restaurantPrice = "€";
  else if (restaurantPrice == 1) restaurantPrice = "€ €";
      else restaurantPrice = "€ € €";
  let restaurantDistance = "&#128205: " + restaurant.distance + " km";
  let restaurantSpiciness = restaurant.spiciness;
  if (restaurantSpiciness == 0) restaurantSpiciness = "&#x1F336: low";
  else if (restaurantSpiciness == 1) restaurantSpiciness = "&#x1F336: medium";
      else restaurantSpiciness = "&#x1F336: high";
  let restaurantLoudness = restaurant.animation;
  if (restaurantLoudness == 0) restaurantLoudness = "&#127926: calm";
  else if (restaurantPrice == 1) restaurantLoudness = "&#127926: moderate";
      else restaurantLoudness = "&#127926: rowdy";
  let restaurantSpeed = restaurant.service_speed;
  if (restaurantSpeed == 0) restaurantSpeed = "&#x1F551: < 10m";
  else if (restaurantSpeed == 1) restaurantSpeed = "&#x1F551: < 30m";
      else restaurantSpeed = "&#x1F551: > 30m";

  return [restaurantNum, restaurantType, restaurantDistance, restaurantPrice, restaurantLoudness, restaurantSpeed, restaurantSpiciness];
}

function loadRestaurants(row, rowItem, name, action, generatingMethod){
    let restaurant_list = getRestaurants();

    if(generatingMethod == "random"){
        restaurant_list = shuffle(restaurant_list);
    }

    for (let i = 0; i < row; i++) {
    document.write("<div class='row'>");
    for (let j = 0; j < rowItem; j++) {

      let restaurantNum = loadRestaurant(restaurant_list, i*rowItem + j)[0];
      let restaurantType = loadRestaurant(restaurant_list, i*rowItem + j)[1];
      let restaurantDistance = loadRestaurant(restaurant_list, i*rowItem + j)[2];
      let restaurantPrice = loadRestaurant(restaurant_list, i*rowItem + j)[3];
      let restaurantLoudness = loadRestaurant(restaurant_list, i*rowItem + j)[4];              
      let restaurantSpeed = loadRestaurant(restaurant_list, i*rowItem + j)[5];
      let restaurantSpiciness = loadRestaurant(restaurant_list, i*rowItem + j)[6];
      
        document.write("<div class='col-"+ (12/rowItem) +"'>");
        document.write("<div class='card'>");
        document.write("<div class='card-horizontal selection' num='"+ restaurantNum +"' id ='"+name+i+j+"' onClick='"+action+"(this)' class='card mb-3' style='opacity:1; border: none; max-width: 540px;'>");

            document.write("<div class='img-square-wrapper restaurant-rectangle-image' >");
            document.write("<img class='restaurant-image restImg' src='../images/restaurant_image (" + restaurantNum + ").jpg' width='250' height='170'>");
            document.write("<img class='restaurant-image filter' src='../images/white.jpg' width='250' height='170'>");
            document.write("</div>");

            document.write("<div class='card-body' >");
            document.write("<div class='card-text' style='padding-left: 5px'>"+restaurantType +"</div>");
            document.write("<div class='card-text' style='padding-left: 5px'>"+restaurantDistance +"</div>");
            document.write("<div class='card-text' style='color:#7CD3A1; font-weight: bold; padding-left: 5px'>"+restaurantPrice +"</div>");
            document.write("<div class='card-text'>"+restaurantLoudness +"</div>");
            document.write("<div class='card-text'>"+restaurantSpeed +"</div>");
            document.write("<div class='card-text'>"+restaurantSpiciness +"</div>");
            document.write("</div>");


                //document.write("<p class='card-text'>Spiciness: "+restaurantSpiciness+"<br>Crowd: "+restaurantLoudness+"<br>Serving speed: "+restaurantSpeed+"</p>");

                document.write("</div>");
                    document.write("</div>");
                    document.write("</div>");
    }
    document.write("</div>&nbsp;");
    }
}

function select(e){
    const element = document.querySelector("#"+e.id);

    if (element.style.border=="none" || element.style.border=="medium none"){
      $(e).css("border", "solid green 3px");
      $(e).css("background-color", "#AFC");
    }else{
      $(e).css("border", "none");
      $(e).css("background-color", "white");
    }
}

function cross(e){
    /*const element = document.querySelector("#"+e.id);
    if (element.style.opacity<1)
    $(e).css("opacity", "1");
    else
    $(e).css("opacity", "0.5");*/

    const element = document.querySelector("#"+e.id);
    if (element.style.border=="none" || element.style.border=="medium none"){
      $(e).css("border", "solid red 3px");
      $(e).css("background-color", "#FCC");
      $(e).css("opacity", "0.5");
    }else{
      $(e).css("border", "none");
      $(e).css("background-color", "white");
      $(e).css("opacity", "1");
    }

}

function acceptProposal(){
    alert('Cool! Enjoy your meal!')
    window.location.href = 'main.html';
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$(document).ready(function(){
    $("#proposition").hide();
    $("#showproposition").click(function(){
      $("#proposition").show();
      $("#selection").hide();
      //console.log($(".selection"))
      $(".selection").each(function() {
        if($(this).css("background-color") !=  'rgba(0, 0, 0, 0)'){
          increaseAttractivity($(this).attr("num"));
        }
      });

    });
} );
