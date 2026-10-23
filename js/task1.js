const missionName = "Orbit-7";  
const crewSize = 6;           
const isLaunchReady = true;      
const a = 12, b = 5;

const lines = [
  `Data types: ${typeof missionName}, ${typeof crewSize}, ${typeof isLaunchReady}`,
  `${a} + ${b} = ${a + b}`,
  `${a} - ${b} = ${a - b}`,
  `${a} * ${b} = ${a * b}`,
  `${a} / ${b} = ${a / b}`,
  `${a} % ${b} = ${a % b}`,
  `${a} ** 2 = ${a ** 2}`,
  "Mission " + missionName + " carries " + crewSize + " crew. Launch ready: " + isLaunchReady,
];
lines.forEach(l => console.log(l));
document.getElementById("out").textContent = lines.join("\n");