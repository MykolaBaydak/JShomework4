const calculateCylinderSurfaceArea = (r, h) => 2 * Math.PI * r * h + 2 * Math.PI * r * r;

// Використання функції
const surfaceArea = calculateCylinderSurfaceArea(3, 5);
console.log(surfaceArea);