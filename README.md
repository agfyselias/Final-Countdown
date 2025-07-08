# ⏱️ The Almost Final Countdown (React + TypeScript + SCSS)

A simple Stopwatch desktop game built with React and TypeScript, effectively utilizing and handling the state functionality. The closer the watch stops to the goal, the higher the score!

---

# ⚠️ **Disclaimer**:

This project is based on the _"React – The Complete Guide (incl. Redux)"_ course by [Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/).The layout, design and CSS are largely derived from the course materials. All logic and components were re-coded in **TypeScript** and **SCSS** and restructured by me during the learning purposes.

---

# 🧠 What I Did Differently

- 🔄 **Converted the entire codebase to TypeScript**, also adding mock data, interfaces and enums
- 🧩 **Refactored component structure**, for better separation of concerns
- 🧪 **Handled state immutably and predictably**, using modern React practices, like refs and portals
- 📁 **Used Vite for project setup**, instead of Create React App
- 🎨 **Applied global and scoped styles using SCSS**, instead of keeping a global CSS file

---

## 🎮 Features

- ✅ #4 types of timer challenges, with increased difficulty
- ✅ Editable player name
- ✅ User score modal

---

## 📸 Preview

![Game selection Screenshot](https://github.com/user-attachments/assets/c2096939-e0f9-4bdf-80dd-060fedbb946f)
![Score modal](https://github.com/user-attachments/assets/de9d9b9f-1c50-4fba-9749-623a0a849046)

---

## 🛠 Tech Stack

- React: v19.1.0
- Node v20.19.3
- TypeScript: v5.8.3
- SCSS
- Vite: v7.0.0

---

## 🧱 Component Overview

- **`App.tsx`** – Main layout and state manager
- **`Player.tsx`** – Editable player name
- **`ResultsModal.tsx`** – A dialog popup displaying use score and seconds remaining
- **`TimerChallenge.tsx`** – Timer challenge info, such as difficulty, goal, etc

---

## 🛠️ Utilities Overview

- **`TimerChallenges.mock.ts`** – All timer challenges
- **`TimerChallenge.interface.ts`** – Timer Challenge type
- **`TimerChallenge.enum.ts`** – Timer Challenge title / difficulty 

---

## 🚀 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/Tic-Tac-Toe.git
2. **Navigate inside the project files:**
   ```bash
   cd Tic-Tac-Toe
3. **Install dependencies and the run:**
   ```bash
   npm install
   npm run dev
