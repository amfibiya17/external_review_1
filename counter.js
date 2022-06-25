function counter(string) {
  const array = string.split(", ");
  const counts ={};
  
  // 1. count each color
  for ( var i = 0; i < array.length; i += 1) {
    if(array[i] === "Red") {
      counts[array[i]] = 1 + ( counts[array[i]] || 0 );
    } else if(array[i] === "Green") {
      counts[array[i]] = 1 + ( counts[array[i]] || 0 );
    } else if(array[i] === "Amber") {
      counts[array[i]] = 1 + ( counts[array[i]] || 0 );
    } else {
      counts[`Uncounted`] = 1 + ( counts[`Uncounted`] || 0 );
    }
  };
  
  // 2. create empty result string
  let result = '';

  // 3. build string from results in count
  if(array.includes("Green")) {
    result += `Green: ${counts['Green']}\n`
  }
  if(array.includes("Amber")) {
    result += `Amber: ${counts['Amber']}\n`
  }
  if(array.includes("Red")) {
    result += `Red: ${counts['Red']}\n`
  }
  if(counts[`Uncounted`]) {
    result += `Uncounted: ${counts['Uncounted']}`;
  }
  return result.trim();
}

let string = "Green, Amber, Red, Purple, Red, Amber";
console.log(counter(string));
module.exports = counter;
