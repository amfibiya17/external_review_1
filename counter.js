function counter(string) {

  if(string === "Red") {
    return "Red: 1";
  } else if(string === "Green") {
    return "Green: 1";
  } else {
    return "Amber: 1";
  }
  
}

module.exports = counter;
