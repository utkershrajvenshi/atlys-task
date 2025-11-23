# Atlys take-home task for frontend developer position

- Built with React and Vite with JavaScript
- Uses tailwind
- Uses `react-icons` for showing icons
- Follows clear separation of concerns and atomic-molecular design methodology

## Core Insights while designing code architecture

<img width="1475" height="827" alt="Screenshot from 2025-11-23 18-33-41" src="https://github.com/user-attachments/assets/cd265e5d-a350-4e07-b3c8-18a7008f398a" />

## Implementation trade-offs

- Instantiated with following test credentials when application loads

| email | password |
| :--- | :--- |
| demo@example.com | password123 |
| test@user.com | testpass |

- `AuthContext` handles authentication-related data for the entire flow
- Uses `sessionStorage` to store `currentUser` data and persist session within same browser tab. Resets on browser refresh
- Signing up as a new user won't update default credentials map, will only set `currentUser` to `sessionStorage`
- Clicking Send post trims post content and if still valid, adds it to `userFeed` state variable directly

*Production build deployed to https://atlys-task-one.vercel.app/*
