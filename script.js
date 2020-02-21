
function loadRestaurants(row, rowItem, name, action){
    let restaurant_list = create_restaurant_list();
    
    for (let i = 0; i < row; i++) {
    document.write("<div class='row'>");
    for (let j = 0; j < rowItem; j++) {
        let restaurantType = restaurant_list[j].type;
        let restaurantPrice = restaurant_list[j].price;
        if (restaurantPrice == 0) restaurantPrice = "€";
        else if (restaurantPrice == 1) restaurantPrice = "€€";
            else restaurantPrice = "€€€";
        let restaurantDistance = restaurant_list[j].distance;
        let restaurantSpiciness = restaurant_list[j].spiciness;
        if (restaurantSpiciness == 0) restaurantSpiciness = "none/low";
        else if (restaurantSpiciness == 1) restaurantSpiciness = "medium";
            else restaurantSpiciness = "high";
        let restaurantLoudness = restaurant_list[j].animation;
        if (restaurantLoudness == 0) restaurantLoudness = "calm";
        else if (restaurantPrice == 1) restaurantLoudness = "moderate noise";
            else restaurantLoudness = "rowdy";
        let restaurantSpeed = restaurant_list[j].service_speed;
        if (restaurantSpeed == 0) restaurantSpeed = "< 30 mins";
        else if (restaurantSpeed == 1) restaurantSpeed = "< 1 hour";
            else restaurantSpeed = "> 1 hour";
        
        document.write("<div class='col-3'>");
        document.write("<div class='card'>");
            document.write("<div class='card-horizontal' id ='"+name+i+j+"' onClick='"+action+"(this)' class='card mb-3' style='opacity:1; border: none; max-width: 540px;'>");
            document.write("<div class='img-square-wrapper'>");
                document.write("<img class='' src='images/sample.jpg' width='250' height='170'>");
                document.write("</div>");
                document.write("<div class='card-body'>");
                //document.write("<h4 class='card-title'>Restaurant A</h4>");
                document.write("<p class='card-text'>"+restaurantType+" . "+ restaurantPrice +" . "+ restaurantDistance +" kms</p>");
                document.write("<p class='card-text'>Spiciness: "+restaurantSpiciness+"<br>Crowd: "+restaurantLoudness+"<br>Serving speed: "+restaurantSpeed+"</p>");

                document.write("</div>");
                document.write("</div>");
                    document.write("</div>");
                    document.write("</div>");
    }
    document.write("</div>&nbsp;");  
    }
}

function select(e){
    const element = document.querySelector("#"+e.id);
    if (element.style.border=="none")
    $(e).css("border", "solid green 3px");
    else
    $(e).css("border", "none");
}

function cross(e){
    const element = document.querySelector("#"+e.id);
    if (element.style.opacity<1)
    $(e).css("opacity", "1");
    else
    $(e).css("opacity", "0.5");
}

function acceptProposal(){
    alert('Cool! Enjoy your meal!')
    window.location.href = 'index.html';
}

$(document).ready(function(){
    $("#prediction").hide();
    $("#showPrediction").click(function(){
    $("#prediction").show();
    });
} );      
