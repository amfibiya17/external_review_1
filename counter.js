function counter(string) {

  if(string === "Red") {
    return "Red: 1";
  } else if(string === "Green") {
    return "Green: 1";
  } else if(string === "Amber") {
    return "Amber: 1";
  } else {
    return "Uncounted: 1";
  }
  
}

module.exports = counter;
