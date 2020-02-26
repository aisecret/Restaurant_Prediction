
function euclideanDistance(instance1, instance2){
    let distance = 0
    for(let x =0; x<getFeaturesNormalized(instance1).length ;x++){

        distance += Math.pow((getFeaturesNormalized(instance1)[x] - getFeaturesNormalized(instance2)[x]), 2);
    }
    return Math.sqrt(distance)/getFeaturesNormalized(instance1).length;
}

function higherDist(a,b){
  return (a[1]<b[1])? -1 : 1;
}

function getKNeighbors(trainingSet, testInstance, k){
    let distances = []
    trainingSet.forEach( function(element){
      if(element !== testInstance){
        let dist = euclideanDistance(testInstance, element);
        distances.push([element, dist]);
      }
    });
    distances.sort(higherDist);

    let estimation=0;
    for(let i =0; i<k;i++){
      estimation += (1-distances[i][1])*getLabel(distances[i][0]) ;
    }
    return [estimation, distances.slice(0, 20)];

}
  function higherAttractivity(a,b){
    let aScore = a[0].attractivity;
    let bScore = b[0].attractivity;
    return (aScore<bScore)? 1 : -1;
  }

function getKnnResult(trainingSet){

  let bestRestaurant = null;
  let bestEstimation = 0;
  let bestDistances = null;

  let reffusedList = localStorage.reffusedList;
  if(reffusedList){reffusedList = JSON.parse(reffusedList)}else{reffusedList = []}
  trainingSet.forEach( function(element){

    if(reffusedList.includes(""+element.num)){
      return;
    }

    let res = getKNeighbors(trainingSet,element,14);
    let estim = res[0];

    if(estim>bestEstimation ){
        bestEstimation = estim;
        bestRestaurant = element;
        bestDistances = res[1];
    }
  });
  let neighboors = bestDistances.sort(higherAttractivity).map(element => element[0]);
  return [bestRestaurant,neighboors];
}
