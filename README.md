# Slank

Slank is a dead-simple reactive signal system for JavaScript — no tooling, no build steps, no opinions.

It gives you just three primitives:

- explicit() – create manually updated reactive values  
- implicit() – create derived values that automatically update  
- fx() – create reactive effects that re-run when dependencies change  

⚡ Tiny. Tool-free. Trivially composable. Reactive state that stays out of your way.

---

## 🚀 Installation

```bash
npm install slank
```

Or load it from a CDN:

```js
import { explicit, implicit, fx } from 'https://esm.sh/slank'
```
---

## 🧠 Core API

### explicit(initialValue)

Creates a reactive value that can be read and written.

```js
const count = explicit(0)

count.value++       // update
console.log(count.value)  // read
```

---

### implicit(fn)

Creates a derived value that updates automatically when dependencies change.

```js
const double = implicit(() => count.value * 2)

console.log(double.value) // 0 → 2 → 4 as count changes
```

---

### fx(fn)

Runs a function and re-runs it whenever any signals it read change.

```js
fx(() => {
  console.log(`Count is ${count.value}, double is ${double.value}`)
})
```
---

## 🧩 Example

```js
const count = explicit(0)
const double = implicit(() => count.value * 2)

fx(() => {
  document.body.textContent = `Double is: ${double.value}`
})

setInterval(() => count.value++, 1000)
```
---

## ✨ Why Slank?

- Minimal: Fits in your head
- Declarative: You write what depends on what — Slank handles the rest  
- Zero-config: No compiler, no JSX, no weird syntax  
- Just works in vanilla JS, small projects, or anywhere else  

---

## 🛠 Use Cases

- Quick UIs without a framework  
- Micro-interactions with state  
- State + derived logic in web components  
- Building your own reactive framework  

---

## 🙏 Acknowledgements

The core design of Slank was inspired by Joy of Code — an excellent resource for learning reactive programming concepts in JavaScript.

---

## 📄 License

MIT