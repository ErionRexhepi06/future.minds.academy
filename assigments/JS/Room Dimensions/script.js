function drawRoom(width, length) {
    let roomElement = document.getElementById("room");
    let dimensionsElement = document.getElementById("dimensions");
    let perimeterElement = document.getElementById("perimeter");
    let areaElement = document.getElementById("area");
  
   
    if (width < length) {
      let temp = width;
      width = length;
      length = temp;
    }
  
    let dimensionsText = "Dimensions: " + width.toFixed(2) + "m x " + length.toFixed(2) + "m";
    let perimeterText = "Perimeter: " + (2 * (width + length)).toFixed(2) + "m";
    let areaText = "Area: " + (width * length).toFixed(2) + "m²";
  
    dimensionsElement.textContent = dimensionsText;
    perimeterElement.textContent = perimeterText;
    areaElement.textContent = areaText;
  
    roomElement.style.width = (width * 10) + "px"; 
    roomElement.style.height = (length * 10) + "px";
  }
  
  let width = parseFloat(prompt("Enter the width of the room (in meters):"));
  let length = parseFloat(prompt("Enter the length of the room (in meters):"));
  
  drawRoom(width, length);