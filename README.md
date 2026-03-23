# ⏱️ Countdown App

A modular countdown timer application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite](https://vitejs.dev/) | Fast dev server & bundler |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [ESLint](https://eslint.org/) | Code linting |

---

## 📦 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/achille010/countdown-app.git

# Navigate into the project
cd countdown-app

# Install dependencies
npm install
```

### Running the Dev Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` with Hot Module Replacement (HMR) enabled.

### Building for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🗂️ Project Structure

```
countdown-app/
├── public/             # Static assets
├── src/                # Application source code
│   └── ...             # Components, hooks, utilities
├── index.html          # App entry point
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript base config
├── tsconfig.app.json   # TypeScript app config
├── tsconfig.node.json  # TypeScript Node config
├── eslint.config.js    # ESLint configuration
└── package.json        # Dependencies & scripts
```

---

## 🧹 Linting

```bash
npm run lint
```

This project uses a type-aware ESLint config for stricter, safer code. To enable stricter rules, update `eslint.config.js`:

```ts
tseslint.configs.strictTypeChecked,
tseslint.configs.stylisticTypeChecked,
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you'd like to change.

1. Fork the project
2. Create your branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source. Feel free to use it, break it, and make it yours.

---

> Built with ⚡ by [achille010](https://github.com/achille010)