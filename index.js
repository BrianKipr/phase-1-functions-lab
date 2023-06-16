function distanceFromHqInBlocks(someValue) {
  if (someValue < 42) {
    return 42 - someValue;
  } else {
    return someValue - 42;
  }
}
  function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue)*264;
}
function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue)*264;}

    function distanceTravelledInFeet(a,b){
    if (b>a){
      return((b-a)*264);
    }
    else
      return((a-b)*264);
  }
function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }
//     function distanceFromHqInFeet(pickupLocation) {
//         const blocks = distanceFromHqInBlocks(pickupLocation);
//         const feetPerBlock = 264; // Length of each block in feet
//         return blocks * feetPerBlock;
// }
// function calculatesFarePrice(start, destination) {
//     const distance = Math.abs(start - destination);
//     const feetPerBlock = 264; // Length of each block in feet
  
//     if (distance === 0) {
//       return 0; // Free sample
//     } else if (distance <= 400 / feetPerBlock) {
//       return 0; // Distance within the first 400 feet (free)
//     } else if (distance <= 2000 / feetPerBlock) {
//       return (distance - 400 / feetPerBlock) * 25; // 2 cents per foot after the first 400 feet
//     }else {
//         return 'cannot travel that far'; // Distance exceeds 2500 feet
//       }
//     }function distanceTravelledInFeet(startBlock, endBlock) {
//         const blocks = Math.abs(startBlock - endBlock);
//         const feetPerBlock = 264; // Length of each block in feet
//         return blocks * feetPerBlock;
//       }