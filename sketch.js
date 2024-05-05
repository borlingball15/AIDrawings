// let sketchRNN;
// let currentStroke;
// let x, y;
// let nextPen = 'down';
// let seedPath = [];
// let seedPoints = [];
// let personDrawing = false;
// let word;
// let drawingComplete = false;

// function preload() {
//   sketchRNN = ml5.sketchRNN(word);
// }

// function submitWord() {
//   word = document.getElementById('wordInput').value;
//   sketchRNN = ml5.sketchRNN(word);
//   drawingComplete = false; // Reset drawingComplete to false when submitting a new word
// }

// function clearDrawing() {
//   document.getElementById('wordInput').value = "";
//   seedPath = [];
//   seedPoints = [];
//   personDrawing = false;
//   drawingComplete = false;
//   currentStroke = null;
//   nextPen = 'down';
//   background(255);
// }

// function setup() {
//   let canvas = createCanvas(400, 400);
//   canvas.mousePressed(startDrawing);
//   canvas.mouseReleased(sketchRNNStart);
//   background(255);
// }

// function gotStrokePath(error, strokePath) {
//   console.log(strokePath);
//   currentStroke = strokePath;
// }

// function draw() {
//   stroke(0);
//   strokeWeight(4);

//   if (personDrawing) {
//     line(mouseX, mouseY, pmouseX, pmouseY);
//     seedPoints.push(createVector(mouseX, mouseY));
//   }

//   if (currentStroke && !drawingComplete) {
//     if (nextPen == 'end') {
//       drawingComplete = true; // Set drawingComplete to true after the first drawing is complete
//       return;
//     }
//     if (nextPen == 'down') {
//       line(x, y, x + currentStroke.dx, y + currentStroke.dy);
//     }

//     x += currentStroke.dx;
//     y += currentStroke.dy;
//     nextPen = currentStroke.pen;
//     currentStroke = null;
//     sketchRNN.generate(gotStrokePath);
//   }
// }

// function startDrawing() {
//   personDrawing = true;
//   x = mouseX;
//   y = mouseY;
// }

// function sketchRNNStart() {
//   personDrawing = false;

//   const rdpPoints = [];
//   const total = seedPoints.length;
//   const start = seedPoints[0];
//   const end = seedPoints[total - 1];
//   rdpPoints.push(start);
//   rdp(0, total - 1, seedPoints, rdpPoints);
//   rdpPoints.push(end);

//   background(255);
//   stroke(0);
//   strokeWeight(4);
//   beginShape();
//   for (let v of rdpPoints) {
//     vertex(v.x, v.y);
//   }
//   endShape();

//   x = rdpPoints[rdpPoints.length - 1].x;
//   y = rdpPoints[rdpPoints.length - 1].y;

//   seedPath = [];
//   for (let i = 1; i < rdpPoints.length; i++) {
//     let strokePath = {
//       dx: rdpPoints[i].x - rdpPoints[i - 1].x,
//       dy: rdpPoints[i].y - rdpPoints[i - 1].y,
//       pen: 'down'
//     }
//     seedPath.push(strokePath);
//   }

//   sketchRNN.generate(seedPath, gotStrokePath);
// }

// function rdp(startIndex, endIndex, allPoints, rdpPoints) {
//   const nextIndex = findFurthest(allPoints, startIndex, endIndex);
//   if (nextIndex > 0) {
//     if (startIndex != nextIndex) {
//       rdp(startIndex, nextIndex, allPoints, rdpPoints);
//     }
//     rdpPoints.push(allPoints[nextIndex]);
//     if (endIndex != nextIndex) {
//       rdp(nextIndex, endIndex, allPoints, rdpPoints);
//     }
//   }
// }

// function findFurthest(points, a, b) {
//   let recordDistance = -1;
//   const start = points[a];
//   const end = points[b];
//   let furthestIndex = -1;
//   for (let i = a + 1; i < b; i++) {
//     const currentPoint = points[i];
//     const d = lineDist(currentPoint, start, end);
//     if (d > recordDistance) {
//       recordDistance = d;
//       furthestIndex = i;
//     }
//   }
//   if (recordDistance > epsilon) {
//     return furthestIndex;
//   } else {
//     return -1;
//   }
// }

// function lineDist(c, a, b) {
//   const norm = scalarProjection(c, a, b);
//   return p5.Vector.dist(c, norm);
// }

// function scalarProjection(p, a, b) {
//   const ap = p5.Vector.sub(p, a);
//   const ab = p5.Vector.sub(b, a);
//   ab.normalize();
//   ab.mult(ap.dot(ab));
//   const normalPoint = p5.Vector.add(a, ab);
//   return normalPoint;
// }

// function submitWord() {
//   word = document.getElementById('wordInput').value;
//   sketchRNN = ml5.sketchRNN(word);
//   clearDrawing();
//   sketchRNNStart();
// }




// let sketchRNN;
// let currentStroke;
// let x, y;
// let nextPen = 'down';
// let seedPath = [];
// let seedPoints = [];
// let personDrawing = false;
// let word;
// let drawingComplete = false;

// function preload() {
//   let storedWord = localStorage.getItem('spokenWord');
//   if (storedWord) {
//     word = storedWord;
//     sketchRNN = ml5.sketchRNN(word);
//     console.log("Retrieved Word:", storedWord);
//   }
// }

// function clearDrawing() {
//   seedPath = [];
//   seedPoints = [];
//   personDrawing = false;
//   drawingComplete = false;
//   currentStroke = null;
//   nextPen = 'down';
//   background(255);
// }

// function setup() {
//   let canvas = createCanvas(windowWidth, windowHeight);
//   canvas.mousePressed(startDrawing);
//   canvas.mouseReleased(sketchRNNStart);
//   background(255);
// }

// function gotStrokePath(error, strokePath) {
//   console.log(strokePath);
//   currentStroke = strokePath;
// }

// function draw() {
//   stroke(0);
//   strokeWeight(4);

//   let spokenColor = localStorage.getItem('spokenColor');
//   if (spokenColor) {
//     console.log('Spoken color:', spokenColor);
//     let c = color(spokenColor);
//     stroke(c);
//   } else {
//     stroke(0); // Default to black if no spoken color is set
//   }

//   if (personDrawing) {
//     line(mouseX, mouseY, pmouseX, pmouseY);
//     seedPoints.push(createVector(mouseX, mouseY));
//   }

//   if (currentStroke && !drawingComplete) {
//     if (nextPen == 'end') {
//       drawingComplete = true; // Set drawingComplete to true after the first drawing is complete
//       return;
//     }
//     if (nextPen == 'down') {
//       line(x, y, x + currentStroke.dx, y + currentStroke.dy);
//     }

//     x += currentStroke.dx;
//     y += currentStroke.dy;
//     nextPen = currentStroke.pen;
//     currentStroke = null;
//     sketchRNN.generate(gotStrokePath);
//   }
// }

// function startDrawing() {
//   personDrawing = true;
//   x = mouseX;
//   y = mouseY;
// }

// function sketchRNNStart() {
//   personDrawing = false;

//   const rdpPoints = [];
//   const total = seedPoints.length;
//   const start = seedPoints[0];
//   const end = seedPoints[total - 1];
//   rdpPoints.push(start);
//   rdp(0, total - 1, seedPoints, rdpPoints);
//   rdpPoints.push(end);

//   background(255);
//   stroke(0);
//   strokeWeight(4);
//   beginShape();
//   for (let v of rdpPoints) {
//     vertex(v.x, v.y);
//   }
//   endShape();

//   x = rdpPoints[rdpPoints.length - 1].x;
//   y = rdpPoints[rdpPoints.length - 1].y;

//   seedPath = [];
//   for (let i = 1; i < rdpPoints.length; i++) {
//     let strokePath = {
//       dx: rdpPoints[i].x - rdpPoints[i - 1].x,
//       dy: rdpPoints[i].y - rdpPoints[i - 1].y,
//       pen: 'down'
//     }
//     seedPath.push(strokePath);
//   }

//   sketchRNN.generate(seedPath, gotStrokePath);
// }

// function rdp(startIndex, endIndex, allPoints, rdpPoints) {
//   const nextIndex = findFurthest(allPoints, startIndex, endIndex);
//   if (nextIndex > 0) {
//     if (startIndex != nextIndex) {
//       rdp(startIndex, nextIndex, allPoints, rdpPoints);
//     }
//     rdpPoints.push(allPoints[nextIndex]);
//     if (endIndex != nextIndex) {
//       rdp(nextIndex, endIndex, allPoints, rdpPoints);
//     }
//   }
// }

// function findFurthest(points, a, b) {
//   let recordDistance = -1;
//   const start = points[a];
//   const end = points[b];
//   let furthestIndex = -1;
//   for (let i = a + 1; i < b; i++) {
//     const currentPoint = points[i];
//     const d = lineDist(currentPoint, start, end);
//     if (d > recordDistance) {
//       recordDistance = d;
//       furthestIndex = i;
//     }
//   }
//   if (recordDistance > epsilon) {
//     return furthestIndex;
//   } else {
//     return -1;
//   }
// }

// function lineDist(c, a, b) {
//   const norm = scalarProjection(c, a, b);
//   return p5.Vector.dist(c, norm);
// }

// function scalarProjection(p, a, b) {
//   const ap = p5.Vector.sub(p, a);
//   const ab = p5.Vector.sub(b, a);
//   ab.normalize();
//   ab.mult(ap.dot(ab));
//   const normalPoint = p5.Vector.add(a, ab);
//   return normalPoint;
// }






let sketchRNN;
let currentStroke;
let x, y;
let nextPen = 'down';
let seedPath = [];
let seedPoints = [];
let personDrawing = false;
let word;
let drawingComplete = false;

function preload() {
  let storedWord = localStorage.getItem('spokenWord');
  if (storedWord) {
    word = storedWord;
    sketchRNN = ml5.sketchRNN(word);
    console.log("Retrieved Word:", storedWord);
  }
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.mousePressed(startDrawing);
  canvas.mouseReleased(sketchRNNStart);
  background(255);
}

function clearDrawing() {
  seedPath = [];
  seedPoints = [];
  personDrawing = false;
  drawingComplete = false;
  currentStroke = null;
  nextPen = 'down';
  background(255);
}

function gotStrokePath(error, strokePath) {
  console.log(strokePath);
  currentStroke = strokePath;
}

function draw() {
  stroke(0);
  strokeWeight(4);

  let spokenColor = localStorage.getItem('spokenColor');
  console.log('Stored color', spokenColor);

  // if (spokenColor) {
  //   console.log('Spoken color:', spokenColor);
  //   let c = color(spokenColor);
  //   console.log('Parsed color:', c);
  //   stroke(c);
  // } else {
  //   stroke(0); // Default to black if no spoken color is set
  // }

  if (personDrawing) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    seedPoints.push(createVector(mouseX, mouseY));
  }

  if (currentStroke && !drawingComplete) {
    if (nextPen == 'end') {
      drawingComplete = true; 
    }
    if (nextPen == 'down') {
      line(x, y, x + currentStroke.dx, y + currentStroke.dy);
    }

    x += currentStroke.dx;
    y += currentStroke.dy;
    nextPen = currentStroke.pen;
    currentStroke = null;
    sketchRNN.generate(gotStrokePath);
  }
}

function startDrawing() {
  personDrawing = true;
  x = mouseX;
  y = mouseY;
}

function sketchRNNStart() {
  personDrawing = false;

  const rdpPoints = [];
  const total = seedPoints.length;
  const start = seedPoints[0];
  const end = seedPoints[total - 1];
  rdpPoints.push(start);
  rdp(0, total - 1, seedPoints, rdpPoints);
  rdpPoints.push(end);

  background(255);
  stroke(0);
  strokeWeight(4);
  beginShape();
  for (let v of rdpPoints) {
    vertex(v.x, v.y);
  }
  endShape();

  x = rdpPoints[rdpPoints.length - 1].x;
  y = rdpPoints[rdpPoints.length - 1].y;

  seedPath = [];
  for (let i = 1; i < rdpPoints.length; i++) {
    let strokePath = {
      dx: rdpPoints[i].x - rdpPoints[i - 1].x,
      dy: rdpPoints[i].y - rdpPoints[i - 1].y,
      pen: 'down'
    }
    seedPath.push(strokePath);
  }

  sketchRNN.generate(seedPath, gotStrokePath);
}

function rdp(startIndex, endIndex, allPoints, rdpPoints) {
  const nextIndex = findFurthest(allPoints, startIndex, endIndex);
  if (nextIndex > 0) {
    if (startIndex != nextIndex) {
      rdp(startIndex, nextIndex, allPoints, rdpPoints);
    }
    rdpPoints.push(allPoints[nextIndex]);
    if (endIndex != nextIndex) {
      rdp(nextIndex, endIndex, allPoints, rdpPoints);
    }
  }
}

function findFurthest(points, a, b) {
  let recordDistance = -1;
  const start = points[a];
  const end = points[b];
  let furthestIndex = -1;
  for (let i = a + 1; i < b; i++) {
    const currentPoint = points[i];
    const d = lineDist(currentPoint, start, end);
    if (d > recordDistance) {
      recordDistance = d;
      furthestIndex = i;
    }
  }
  if (recordDistance > epsilon) {
    return furthestIndex;
  } else {
    return -1;
  }
}

function lineDist(c, a, b) {
  const norm = scalarProjection(c, a, b);
  return p5.Vector.dist(c, norm);
}

function scalarProjection(p, a, b) {
  const ap = p5.Vector.sub(p, a);
  const ab = p5.Vector.sub(b, a);
  ab.normalize();
  ab.mult(ap.dot(ab));
  const normalPoint = p5.Vector.add(a, ab);
  return normalPoint;
}
