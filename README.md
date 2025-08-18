# 🔁 Flashcard App for AWS Certified Developer – Associate (DVA-C02)

This is a cross-platform flashcard study app built with [Electron](https://www.electronjs.org/). It runs **fully offline** and uses a local `.json` file to load and display your questions, answers, and explanations.

> Designed specifically to help you pass the **AWS Certified Developer – Associate (DVA-C02)** exam.
> Use this flashcard application for any topic you would like! Just update the flashcards.json file to fit your needs.

---

## ✨ Features

- Randomized flashcard order
- Flip card to reveal answer & explanation
- Keyboard navigation (`←`, `→`, `space`)
- Supports custom flashcard sets via `flashcards.json`
- Works offline on **Linux, macOS, and Windows**

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/flashcard-app.git
cd flashcard-app
```

### 2. Install Dependencies

Using [Node.js](https://nodejs.org/) 18+ (use `nvm` if needed):

```bash
npm install
```

---

## ▶️ Run the App Locally

```bash
npm start
```

---

## 🛠 Build the App for Desktop

Builds the app for your current OS:

```bash
npm run build
```

To build for all platforms:

```bash
npm run dist
```

> Requires [`electron-builder`](https://www.electron.build/) (already included)

---

## 🧠 Flashcards File Format

Place your flashcards in `flashcards.json` in the root folder.

```json
[
  {
    "question_number": 1,
    "question": "What is AWS Lambda?",
    "answer": "A serverless compute service that runs code in response to events.",
    "explanation": "Lambda automatically provisions and scales infrastructure, and you only pay for what you use."
  }
]
```

You can use the included `aws_dva_c02_strictly_unique_125_flashcards.json` to get started.

---

## 💻 Keyboard Shortcuts

| Key       | Action            |
| --------- | ----------------- |
| `→` / `n` | Next card         |
| `←` / `b` | Previous card     |
| `space`   | Flip card         |
| `r`       | Shuffle deck      |
| `esc`     | Reset & flip back |

---

## 🧹 Code Formatting

This project uses [Prettier](https://prettier.io/) for code style:

```bash
npm run prettier:fix
npm run prettier:check
```

The `.prettierrc` configuration file is already included.

---

## 📄 License

MIT License — free for personal or commercial use.
