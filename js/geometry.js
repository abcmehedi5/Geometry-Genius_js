// triangle addEventListener
document.getElementById("triangleBtn").addEventListener("click", function () {
  const triangleBase = geometrysymbole("triangleBase");
  const triangleHeight = geometrysymbole("triangleHeight");
  const areaTriangle = 0.5 * triangleBase * triangleHeight;
  const triangleName = document.getElementById("triangleName").innerText;
  areaCalculation(areaTriangle, triangleName);
});

// Rectangle addEventListener
document.getElementById("rectangleBtn").addEventListener("click", function () {
  const rectangleW = geometrysymbole("rectangleW");
  const rectangleI = geometrysymbole("rectangleI");
  const areaTriangle = rectangleW * rectangleI;
  const rectangleName = document.getElementById("rectangleName").innerText;
  areaCalculation(areaTriangle, rectangleName);
});

// Parallelogram addEventListener
document
  .getElementById("parallelogramBtn")
  .addEventListener("click", function () {
    const parallelogramB = geometrysymbole("parallelogramB");
    const parallelogramH = geometrysymbole("parallelogramH");
    const areaTriangle = parallelogramB * parallelogramH;
    const parallelogramName =
      document.getElementById("parallelogramName").innerText;
    areaCalculation(areaTriangle, parallelogramName);
  });

// Rhombus addEventListener
document.getElementById("rhombusBtn").addEventListener("click", function () {
  const rhombusd1 = geometrysymbole("rhombusd1");
  const rhombusd2 = geometrysymbole("rhombusd2");
  const areaTriangle = 0.5 * rhombusd1 * rhombusd2;
  const rhombusName = document.getElementById("rhombusName").innerText;
  areaCalculation(areaTriangle, rhombusName);
});

// Pentagon addEventListener
document.getElementById("pentagonBtn").addEventListener("click", function () {
  const pentagonP = geometrysymbole("pentagonP");
  const pentagonB = geometrysymbole("pentagonB");
  const areaTriangle = 0.5 * pentagonP * pentagonB;
  const pentagonName = document.getElementById("pentagonName").innerText;
  areaCalculation(areaTriangle, pentagonName);
});

// Ellipse addEventListener
document.getElementById("ellipseBtn").addEventListener("click", function () {
  const ellipseA = geometrysymbole("ellipseA");
  const ellipseB = geometrysymbole("ellipseB");
  const areaTriangle = 0.5 * ellipseA * ellipseB;
  const ellipseName = document.getElementById("ellipseName").innerText;
  areaCalculation(areaTriangle, ellipseName);
});
