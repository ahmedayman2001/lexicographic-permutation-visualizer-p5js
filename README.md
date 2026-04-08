# 🔷 Next Lexicographic Permutation Visualizer (p5.js)

An interactive visualization tool built with **p5.js** that generates all lexicographic permutations of an input array and allows step-by-step exploration while comparing two target arrays.

---

## 🎯 Built With

- :contentReference[oaicite:0]{index=0}
- HTML5
- JavaScript (ES6)

---

## ✨ Features

- Generate all permutations in lexicographic order
- Step-by-step visualization using canvas animation
- Compare two user-defined arrays:
  - Array P
  - Array Q
- Highlight matching permutations
- Display:
  - Index of P
  - Index of Q
  - |P index - Q index|

---

## 🧠 Visualization Concept (p5.js)

The project uses **p5.js draw loop system**:

- `setup()` → initializes canvas & UI
- `draw()` → renders permutations frame-by-frame
- `noLoop()` + `redraw()` → controlled stepping system

This makes the algorithm visually interactive instead of static output.

---

## 🎮 How It Works

1. User enters:
   - N (array size)
   - Permutation P
   - Permutation Q

2. System:
   - Starts from `[1...N]`
   - Uses **Next Permutation Algorithm**
   - Stores all permutations in order
   - Tracks index of P and Q

3. Visualization:
   - Click **Start Visualization**
   - Click **Next Step ➡️**
   - Watch permutations appear one by one

---

## 🧮 Algorithm Used

### Next Permutation (O(N!))

Steps:
1. Find first decreasing element from right
2. Find next greater element
3. Swap
4. Reverse suffix

---

## 🖥️ UI Controls

| Button | Function |
|--------|----------|
| Start Visualization | Generate permutations |
| Next Step ➡️ | Show next permutation |

---

