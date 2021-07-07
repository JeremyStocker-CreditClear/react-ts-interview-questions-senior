export {};

const a1 = true;
const a2 = true;

// === TEST ===
// What's the output?
console.log(a1 === a2);

const c1: [] = [];
const c2: [] = [];

// === TEST ===
// What's the ouput?
console.log(c1 === c2);

const b1 = "true";
const b2 = "true";

// === TEST ===
// Fix the TS errors
// What's the output?
console.log(b1 === b2);

const d1 = {};
const d2 = {};

// === TEST ===
// Whats the output?
console.log(d1 === d2);

const e1 = {};
const e2 = { ...e1 };

// === TEST ===
// What's the output?
console.log(e1 === e2);
