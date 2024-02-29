const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function reducer(total, element) {
  return element + total;
}

let totalBatteries = batteryBatches.reduce(reducer, 0);