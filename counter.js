function counter(string) {
  const array = string.split(", ");
  const counts ={};

  // 1. count each color
  for ( var i = 0; i < array.length; i += 1) {
    counts[array[i]] = 1 + ( counts[array[i]] || 0 );
    if(array[i] === "Purple") {
      return array[i] = `Uncounted: ${counts[array[i]]}`;
    } else if(array[i] === "Green") {
      return array[i] = `Green: ${counts[array[i]]}`
    } else if(array[i] === "Amber") {
      return array[i] = `Amber: ${counts[array[i]]}`
    } else if(array[i] === "Red") {
      return array[i] = `Red: ${counts[array[i]]}`
    }
  };

  // 2. create empty result string
  // 3. build string from results in count: for (const color in count) { add colour and count to string }

  return counts;

  // if(array[0] === "Red") {
  //   return `Red: ${arrayLength}`;
  // } else if(string === "Green") {
  //   return "Green: 1";
  // } else if(string === "Amber") {
  //   return "Amber: 1";
  // } else {
  //   return "Uncounted: 1";
  // }
  
}

let string = "Green, Amber, Red, Purple, Red, Amber";
console.log(counter(string));
module.exports = counter;
