// Code your solution in this file!
// Code your solution in this file!
const Hq = 42;
function distanceFromHqInBlocks(pickUp){
    return Math.abs(pickUp-Hq);    
    
}
function  distanceFromHqInFeet(pickUp){
    return distanceFromHqInBlocks(pickUp)*264;
}

function distanceTravelledInFeet(start, dest){
    return Math.abs((dest-start)*264);
}
function calculatesFarePrice(start, dest){

    if(distanceTravelledInFeet(start, dest)<=400){
        console.log("This ride is free");
        return 0;
    }else if(distanceTravelledInFeet(start, dest)>400 && distanceTravelledInFeet(start, dest)<=2000){

        return (distanceTravelledInFeet(start, dest)-400)*0.02;

    }else if(distanceTravelledInFeet(start, dest) > 2000 && distanceTravelledInFeet(start, dest) <= 2500){

        return 25 ;

    }else{
        return 'cannot travel that far';
    }

}


