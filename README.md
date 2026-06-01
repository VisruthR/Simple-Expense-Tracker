# Minimalist Expense Tracker

A clean, dark-themed dashboard built with React to help track cash flow. I wanted a straightforward way to log income and expenses without a bloated UI, so I built this focusing on a smooth user experience and a glassmorphic design.

Right now, this is a fully functional **frontend-only** application. It calculates balances dynamically and persists your data using the browser's local storage so you don't lose your entries on refresh.

## Features (So far)

- **Income & Expense Logging:** Clean toggle interface to add transactions.
- **Dynamic Charting:** A real-time doughnut chart that visually balances money in vs. money out.
- **Local Persistence:** Data is automatically saved to `localStorage`.
- **Clean UI:** CSS featuring a dark, glassmorphic aesthetic.

## Tech Stack

- **React (Vite):** Frontend framework and build tool.
- **Chart.js / react-chartjs-2:** For the dynamic data visualization.
- **Pure CSS:** No UI libraries, just custom styling.

## What's Next (WIP)

The core frontend is complete, but I am actively working on turning this into a full-stack application. Upcoming features include:

- [ ] **Authentication:** Adding proper Login/Logout functionality.
- [ ] **Database Integration:** Moving away from `localStorage` to a real backend (e.g., Firebase, Supabase, or Node/Express) to sync data across devices.
