
<div align="center">

<img src="https://skillicons.dev/icons?i=ts,react,tailwindcss,vite&theme=dark&perline=4" alt="TypeScript, React, Tailwind CSS, Vite" />

**Built with TypeScript, React, Tailwind CSS & Vite**
# Timer

</div>

A countdown web app built with TypeScript and Tailwind CSS for a clean, responsive timer experience.

## Overview

Timer is a React-based countdown web application scaffolded with Vite and styled using Tailwind CSS. It provides a minimal and intuitive interface for setting and running countdown timers directly in the browser.

## How It Works

The application is structured using a standard React + Vite project layout:

**src/**: Contains all the application logic and components
```typescript
// Core React components and TypeScript logic for the countdown timer
```

**public/**: Serves static assets
```
// Static files and the entry HTML served by Vite
```

**vite.config.ts**: Configures the Vite build tool
```typescript
// Handles bundling, hot module replacement (HMR), and dev server setup
```

### Core Functionality

1. **Countdown Timer**: Allows users to set a target time and counts down in real time
2. **Reactive UI**: React state updates the display every second as the timer ticks
3. **Tailwind Styling**: Utility-first CSS keeps the interface clean and responsive
4. **Fast Dev Experience**: Vite provides instant HMR during development

### The Countdown Process

When a user starts a timer:
1. The user inputs hours, minutes, and/or seconds
2. React calculates the target end time using the current timestamp
3. A `setInterval` updates the remaining time every second
4. The UI re-renders with the new time values on each tick
5. When the timer reaches zero, it stops and notifies the user

### Key Concepts Demonstrated

- **React Hooks**: `useState` and `useEffect` for state and side-effect management
- **TypeScript**: Type-safe component props and timer logic
- **Tailwind CSS**: Utility classes for rapid, responsive styling
- **Vite**: Fast module bundling and hot module replacement
- **Interval handling**: Proper cleanup of `setInterval` to avoid memory leaks

## Installation

1. Clone the repository:
```bash
git clone https://github.com/achille010/timer.git
cd timer
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

- No persistent storage (timer state resets on page refresh)
- No alarm or sound notification when the timer ends
- No support for multiple simultaneous timers
- No backend integration

This is intentionally minimal to showcase a clean React + TypeScript + Tailwind setup.

## Requirements

- Node.js 18 or higher
- npm or yarn
- Web browser

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests for improvements.

## License

MIT License - Read details from the LICENSE file

---

*Built as a demonstration of a React + TypeScript + Tailwind countdown web app*