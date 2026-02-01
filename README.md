
<div align="center">

<img src="https://skillicons.dev/icons?i=react,ts,tailwindcss,vite&theme=dark&perline=4" alt="React, TypeScript, Tailwind CSS, Vite" />

**Built with React, TypeScript, Tailwind CSS & Vite**
# Countdown App

</div>

A modular React, Vite and Tailwind app to perform countdown timer operations.

## Overview

Countdown App is a modular React application scaffolded with Vite and styled using Tailwind CSS. It provides a clean interface for setting and running countdown timers, with the codebase split into reusable components for maintainability and scalability.

## How It Works

The application follows a modular structure, separating timer logic and UI into distinct components:

**src/**: Contains all React components and TypeScript logic
```typescript
// Modular components handling timer state, display, and controls
```

**public/**: Serves static assets for the app
```
// Static files and the entry HTML served by Vite
```

**Timer copy**: A backup/reference copy of the timer implementation
```
// Alternate version of the timer logic for reference
```

### Core Functionality

1. **Countdown Timer**: Set hours, minutes, and seconds and watch the timer count down in real time
2. **Modular Components**: Timer logic is broken into reusable pieces for easy maintenance and extension
3. **Reactive UI**: React state drives live updates to the display on every tick
4. **Tailwind Styling**: Utility-first CSS keeps the interface clean and responsive across devices

### The Countdown Process

When a user starts a countdown:
1. The user inputs the desired hours, minutes, and/or seconds
2. React calculates the target end time from the current timestamp
3. A `setInterval` decrements the remaining time every second
4. The UI re-renders with updated values on each tick
5. When the timer hits zero, it stops and signals completion to the user

### Key Concepts Demonstrated

- **React Hooks**: `useState` and `useEffect` for managing timer state and intervals
- **TypeScript**: Type-safe props and logic across all components
- **Modular Design**: Separation of concerns with dedicated components for input, display, and controls
- **Tailwind CSS**: Rapid, responsive styling with utility classes
- **Vite**: Fast bundling and instant hot module replacement during development
- **Interval Cleanup**: Proper `clearInterval` usage inside `useEffect` to prevent memory leaks

## Installation

1. Clone the repository:
```bash
git clone https://github.com/achille010/countdown-app.git
cd countdown-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Limitations

- No persistent storage (timer resets on page refresh)
- No alarm or sound notification on completion
- No support for multiple simultaneous timers
- No backend integration

This is intentionally minimal to demonstrate a clean modular React + TypeScript + Tailwind setup.

## Requirements

- Node.js 18 or higher
- npm or yarn
- Web browser

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests for improvements.

## License

MIT License - Read details from the LICENSE file

---

*Built as a modular countdown timer app using React, TypeScript & Tailwind CSS*
