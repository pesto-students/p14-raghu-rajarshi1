// Function to draw a triangle in the console
function drawTriangle(triangleSize) {
    for (let row = 1; row <= triangleSize; row++) {
      let stars = '';
      for (let col = 1; col <= row; col++) {
        stars += '*';
      }
      console.log(stars);
    }
  }
  
 
drawTriangle(4);
  

  