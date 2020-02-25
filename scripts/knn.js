export {getKnnResult};

function euclideanDistance(instance1, instance2){
    let distance = 0
    //console.log(distance,instance1.getFeaturesNormalized())

    for(let x =0; x<instance1.getFeaturesNormalized().length -1;x++){
        distance += Math.pow((instance1.getFeaturesNormalized()[x] - instance2.getFeaturesNormalized()[x]), 2);

    }
    return Math.sqrt(distance)/instance1.getFeaturesNormalized().length;
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
      estimation += (1-distances[i][1])*distances[i][0].getLabel() ;
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
  trainingSet.forEach( function(element){

    let res = getKNeighbors(trainingSet,element,14);
    let estim = res[0];

    if(estim>bestEstimation){
        bestEstimation = estim;
        bestRestaurant = element;
        bestDistances = res[1];
    }
  });

  return [bestRestaurant,bestDistances.sort(higherAttractivity)];
}
