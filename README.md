# Minimalist Expense Tracker

A clean, dark-themed dashboard built with React to help track cash flow. I wanted a straightforward way to log income and expenses without a bloated UI, so I built this focusing on a smooth user experience and a glassmorphic design.

This is a fully functional, **local-first** application. It calculates balances dynamically and persists your data using the browser's local storage so you don't lose your entries on refresh. Because it has no backend database, your financial data is 100% private and never leaves your device.

## Features (So far)

- **Income & Expense Logging:** Clean toggle interface to add transactions.
- **Dynamic Charting:** A real-time doughnut chart that visually balances money in vs. money out.
- **Local Persistence:** Data is automatically saved to `localStorage`.
- **Clean UI:** Custom CSS featuring a dark, glassmorphic aesthetic.

## Tech Stack

- **React (Vite):** Frontend framework and build tool.
- **Chart.js / react-chartjs-2:** For the dynamic data visualization.
- **Pure CSS:** No UI libraries, just custom styling.

## What's Next (WIP)

- [ ] **Data Export/Import:** Allowing users to download their transaction history as a JSON/CSV file, and import it back to backup or move their data between devices.
- [ ] **Edit Functionality:** Allowing users to edit existing transactions instead of just deleting them.

## How to Run Locally

If you want to pull this down and run it on your machine:

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
