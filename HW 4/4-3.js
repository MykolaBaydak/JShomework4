function calculateCylinderSurfaceArea(r, h) {
    const pi = Math.PI;

    const baseArea = 2 * pi * r * r;
    const lateralArea = 2 * pi * r * h;

    const totalArea = baseArea + lateralArea;

    return totalArea;
}

const cylinderSurfaceArea = calculateCylinderSurfaceArea(3, 5);
console.log(cylinderSurfaceArea);