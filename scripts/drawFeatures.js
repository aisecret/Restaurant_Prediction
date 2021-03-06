function drawFeatures(){

  document.write('<div class ="features">');
  drawCard("€","Price",1);
  drawCard("&#128205","Distance",2);
  drawCard("&#127926","Loudness",3);
  drawCard("&#x1F336","Spiciness",4);
  drawCard("&#x1F551","Service speed",5);
  document.write("</div>");
  activateButtons();
}

function drawCard(icon,text,feature_num){
  document.write('<div class ="featureCard" >');
  document.write("<button class='featureButton' feature_num="+feature_num+">"+ icon + "</button>");
  document.write("<div class='featuerText lead text-muted'>"+ text + "</div>");
  document.write("</div>");
  let list = JSON.stringify([]);
  localStorage.setItem('priority',list);

}

function activateButtons(){
  $(".featureButton").click(function(){
    if($(this).css("background-color") == "rgb(255, 255, 255)"){
      $(this).css("background-color","rgb(75, 175, 250,0.8)")

      let prioList = JSON.parse(localStorage.priority);
      prioList.push(parseInt($(this).attr("feature_num"),10));
      localStorage.setItem('priority',JSON.stringify(prioList));

    }else{

      $(this).css("background-color","white")
      let prioList = JSON.parse(localStorage.priority);
      prioList = prioList.filter(x => x != $(this).attr("feature_num"))
      localStorage.setItem('priority',JSON.stringify(prioList));
    }
  });
}
