
function distanceFromHqInBlocks(someValue){
    if(someValue > 42){
       return someValue - 42
    } else {
       return 42 - someValue
    }
}

function distanceFromHqInFeet(someValue) {
   return distanceFromHqInBlocks(someValue) * 264;
   
}


function distanceTravelledInFeet(someValue,otherValue){
      if(someValue > otherValue){
            return (someValue - otherValue) * 264
        } else {
          return (otherValue - someValue) * 264
      }
    }



function calculatesFarePrice(someValue,otherValue){
    if(distanceTravelledInFeet(someValue,otherValue) < 400) {
        return 0;
        }    
    if(distanceTravelledInFeet(someValue,otherValue) > 400 && distanceTravelledInFeet(someValue,otherValue) < 2000){
        return (distanceTravelledInFeet(someValue,otherValue) - 400) * .02;
    }
    if(distanceTravelledInFeet(someValue,otherValue) > 2000 && distanceTravelledInFeet(someValue,otherValue) < 2500){
        return 25;
    }
    if(distanceTravelledInFeet(someValue,otherValue) > 2500){
        return 'cannot travel that far';
    }
}