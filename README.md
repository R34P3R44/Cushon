# Investment App (React + Vite + TypeScript)

This is a modern web application built with **React**, **Vite**, and **TypeScript**.  
It allows users to authenticate and manage their investment portfolio through a clean, modular UI.

## Features

- 🔐 **User Authentication**  
  Login and manage user sessions with lightweight global state.

- 📈 **Investments Dashboard**  
  Add and manage investments using interactive forms with sliders, dropdowns, and visual indicators.

- ⚡ **React Query (TanStack Query)**  
  Efficient data fetching, caching, and background updates for server state.

- 🗂️ **Modular Architecture**  
  Feature-based folder structure for scalability and maintainability.

- 🛠️ **Vite + TypeScript**  
  Fast development experience, optimized builds, and type-safe codebase.

## Getting Started

clone repo

npm install

npm run dev

Projetc Structure:

src/
├── components/          # Reusable UI components
├── features/            # Feature-based folders (auth, investments)
├── layout/              # App layout components
├── store/               # Global state management
├── utils/               # Utility functions
├── App.tsx              # Main app component
└── main.tsx             # Entry point


Notes:

Automated testing (unit and integration) is planned but not yet implemented.

Form validation and accessibility improvements are under consideration for future iterations.

The app uses React Query to manage server state for investment data and mutations.

Lightweight global state is used only where necessary (e.g. authentication).


Enhancements for future:
* Testing:
    * Currently, there is no test setup (Vitest / React Testing Library not included yet).
    * I considered adding unit tests and integration tests but prioritized building feature completeness first.
* Form validation:
    * Investment forms seem to lack full form validation (no form libraries like React Hook Form visible yet).
* Accessibility (a11y):
    * Could be improved — no ARIA roles, keyboard navigation, or focus management is shown.
* CI/CD pipeline:
    * No configuration for automated testing, linting, or CI pipeline is shown in the repo.
* Error boundaries:
    * The app lacks React error boundaries to catch and display UI-level errors gracefully.