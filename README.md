# My Profile App

A simple mobile app built with **React Native** and **Expo** that displays a user profile screen. The user's avatar, name, email, and points are shown, and tapping the floating **+** button adds one point.

## Student Details

| Field        | Details                          |
| ------------ | -------------------------------- |
| Name         | HH Nethsara Vimukthi Induwara    |
| Student ID   | 37171                            |

## Features

- Profile screen with avatar and verified badge
- Name, email, and points details
- Floating action button (**+**) that increases the points by 1 on every tap
- Clean black-and-white layout with a custom "My Profile" header

## Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) with [Expo Router](https://docs.expo.dev/router/introduction) (file-based routing)
- TypeScript
- `@expo/vector-icons` for icons

## Project Structure

```
MyFirstApp/
├── assets/            # Images and icons (including the avatar)
├── src/
│   ├── app/
│   │   ├── _layout.tsx   # Stack navigation and header styling
│   │   └── index.tsx     # My Profile screen
│   ├── components/
│   ├── constants/
│   └── hooks/
├── app.json
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [Git](https://git-scm.com/)
- Expo Go app on your phone (optional), or an Android emulator / web browser

### Installation

1. Clone the repository

```bash
   git clone https://github.com/<your-username>/MyFirstApp.git
   cd MyFirstApp
```

2. Install dependencies

```bash
   npm install
```

3. Start the app

```bash
   npx expo start
```

4. Open the app using one of the options shown in the terminal:
   - Press `w` to open in the web browser
   - Press `a` to open in an Android emulator
   - Scan the QR code with Expo Go on your phone

## How It Works

The points value is stored in React state using the `useState` hook. Each press of the **+** button calls `setPoints` and increases the value by 1, and the screen updates immediately.

## Author

**HH Nethsara Vimukthi Induwara**
Student ID: 37171
