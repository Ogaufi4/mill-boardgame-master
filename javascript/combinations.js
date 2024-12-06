const ADJACENT_COMBINATIONS = {
  "node-1": ["node-2", "node-10", "node-24"], // Diagonal connection
  "node-2": ["node-1", "node-3", "node-5", "node-23"], // Diagonal connection
  "node-3": ["node-2", "node-15", "node-22"], // Diagonal connection
  "node-4": ["node-11", "node-5"],
  "node-5": ["node-2", "node-4", "node-6", "node-8"],
  "node-6": ["node-5", "node-14"],
  "node-7": ["node-8", "node-12"],
  "node-8": ["node-5", "node-7", "node-9"],
  "node-9": ["node-8", "node-13"],
  "node-10": ["node-1", "node-11", "node-22"],
  "node-11": ["node-10", "node-4", "node-19", "node-12"],
  "node-12": ["node-11", "node-7", "node-16"],
  "node-13": ["node-9", "node-18", "node-14"],
  "node-14": ["node-13", "node-6", "node-21", "node-15"],
  "node-15": ["node-14", "node-3", "node-24"],
  "node-16": ["node-12", "node-17"],
  "node-17": ["node-16", "node-18", "node-20"],
  "node-18": ["node-17", "node-13"],
  "node-19": ["node-11", "node-20"],
  "node-20": ["node-19", "node-17", "node-21", "node-23"],
  "node-21": ["node-20", "node-14"],
  "node-22": ["node-10", "node-23"],
  "node-23": ["node-22", "node-20", "node-24"],
  "node-24": ["node-23", "node-15"]
};


const MILL_COMBINATIONS = [
  // across
  ["node-1", "node-2", "node-3"],
  ["node-4", "node-5", "node-6"],
  ["node-7", "node-8", "node-9"],
  ["node-10", "node-11", "node-12"],
  ["node-13", "node-14", "node-15"],
  ["node-16", "node-17", "node-18"],
  ["node-19", "node-20", "node-21"],
  ["node-22", "node-23", "node-24"],
  // down
  ["node-1", "node-10", "node-22"],
  ["node-4", "node-11", "node-19"],
  ["node-7", "node-12", "node-16"],
  ["node-2", "node-5", "node-8"],
  ["node-17", "node-20", "node-23"],
  ["node-9", "node-13", "node-18"],
  ["node-6", "node-14", "node-21"],
  ["node-3", "node-15", "node-24"],
  // diagonals
  ["node-1", "node-4", "node-7"],  // top-left to bottom-right
  ["node-3", "node-6", "node-9"],  // top-right to bottom-left
  ["node-16", "node-19", "node-22"], // bottom-left to top-right
  ["node-18", "node-21", "node-24"]  // bottom-right to top-left
];
