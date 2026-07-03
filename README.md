# 🔮 Lucky Number Fortune Teller

> *"Your name is your destiny, type it and discover your fortune."*

A mystical fortune teller web app that calculates your unique lucky number based on the vowels and consonants in your name, then reveals a personal fortune message.

---

## ✨ Live Demo

Type your first and last name — and let the stars decide. 🌙

---

## 🎯 How It Works

The lucky number is calculated using a custom algorithm:

1. **Split** the full name into first and last name
2. **Count** the vowels and consonants in each name
3. **Compare** counts across both names to find smaller and larger values
4. **Multiply** smaller counts × shorter name length
5. **Multiply** larger counts × longer name length
6. **Subtract** smaller value from larger value = your lucky number
7. **Map** the lucky number to a fortune message

```
Example: "John Doe"
John → vowels: 1, consonants: 3, length: 4
Doe  → vowels: 2, consonants: 1, length: 3

small = 1 × 1 × 3 = 3
large = 3 × 2 × 4 = 24
Lucky Number = 24 - 3 = 21 🔮
```

---

## 🌟 Features

- **Custom algorithm** — unique lucky number based on your name
- **7 personal fortune messages** — each tied to a number range
- **Loading animation** — suspense before the reveal
- **Smooth card animation** — dramatic fortune reveal
- **Input validation** — regex ensures valid first and last name
- **Edge case handling** — numbers, single names and special characters blocked
- **Responsive design** — works on mobile and desktop

---

## 🎨 Design

Built with a mystical midnight palette:

| Color | Hex | Usage |
|---|---|---|
| Midnight | #0d0d2b | Background |
| Deep Purple | #2d1b69 | Button, accents |
| Gold | #c9a227 | Headings, borders |
| Soft Gold | #f0d060 | Lucky number display |
| Card Background | #1a1040 | Fortune card |
| Text Light | #f5f0ff | Body text |

**Fonts:** Cinzel (headings) + Raleway (body) from Google Fonts

---

## 🛠️ Built With

- HTML5 — semantic structure
- CSS3 — custom properties, animations, responsive design
- Vanilla JavaScript — no frameworks or libraries

---

## 💡 JavaScript Concepts Used

- DOM Manipulation
- Regex validation
- Array methods — forEach, split
- Math.min / Math.max
- Web Animations API
- setTimeout for suspense effect
- Hidden attribute for show/hide

---

## 🚀 Getting Started

```bash
git clone https://github.com/a2-112/lucky-number.git
cd Lucky-Number
open index.html
```

No installation or build step required.

---

## 📁 Project Structure

```
lucky-number/
├── index.html
├── style.css
└── script.js
```

---

## 👩‍💻 Author

Built from scratch as part of a personal problem-solving curriculum — no tutorials, no copy-paste, just pure reasoning and JavaScript fundamentals. 💙

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
