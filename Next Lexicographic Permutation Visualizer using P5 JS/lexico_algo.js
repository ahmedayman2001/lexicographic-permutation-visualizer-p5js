let inputN, inputP, inputQ, startBtn, nextBtn;
let perm1 = [], perm2 = [];
let n = 0;
let base = [];
let allPerms = [];
let index1 = -1, index2 = -1;
let currentIndex = 0;
let found = false;
let started = false;

function setup() {
  let canvas = createCanvas(1000, 600);
  canvas.parent(document.body);
  textAlign(CENTER, CENTER);
  textSize(20);
  noLoop();

  inputN = select("#inputN");
  inputP = select("#inputP");
  inputQ = select("#inputQ");
  startBtn = select("#startBtn");
  nextBtn = select("#nextBtn");

  startBtn.mousePressed(startVisualization);
  nextBtn.mousePressed(() => {
    if (started && currentIndex <= allPerms.length) redraw();
  });
}

function draw() {
  background(30);
  fill("#0ff");
  textSize(26);
  text("🔷 Lexicographic Permutation Visualizer (With Input & Steps)", width / 2, 40);

  fill(255);
  textSize(20);
  if (!started) return;

  if (currentIndex < allPerms.length) {
    let p = allPerms[currentIndex];
    for (let i = 0; i < p.length; i++) {
      fill(255);
      rect(200 + i * 60, 100, 50, 50, 10);
      fill(0);
      text(p[i], 225 + i * 60, 125);
    }

    fill(255, 204, 0);
    text("Current Index: " + (currentIndex + 1), width / 2, 200);

    if (currentIndex + 1 === index1 || currentIndex + 1 === index2) {
      fill(0, 255, 0);
      text("✔️ Matched Permutation", width / 2, 230);
    }

    currentIndex++;
  } else if (!found) {
    found = true;
    fill(0, 255, 255);
    text("Index of P: " + index1, width / 2, 260);
    text("Index of Q: " + index2, width / 2, 290);
    text("|" + index1 + " - " + index2 + "| = " + abs(index1 - index2), width / 2, 330);
  }
}

function startVisualization() {
  n = int(inputN.value());
  if (n < 2 || n > 8) return alert("N must be between 2 and 8.");

  perm1 = inputP.value().trim().split(" ").map(Number);
  perm2 = inputQ.value().trim().split(" ").map(Number);

  if (perm1.length !== n || perm2.length !== n) return alert("P and Q must have N elements.");

  base = Array.from({ length: n }, (_, i) => i + 1);
  allPerms = [];
  currentIndex = 0;
  index1 = -1;
  index2 = -1;
  found = false;

  let pos = 1;
  do {
    let current = [...base];
    allPerms.push(current);
    if (arraysEqual(current, perm1)) index1 = pos;
    if (arraysEqual(current, perm2)) index2 = pos;
    pos++;
  } while (nextPermutation(base));

  started = true;
  nextBtn.show();
  redraw();
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}

function nextPermutation(arr) {
  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) i--;
  if (i < 0) return false;
  let j = arr.length - 1;
  while (arr[j] <= arr[i]) j--;
  [arr[i], arr[j]] = [arr[j], arr[i]];
  let left = i + 1, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return true;
}
