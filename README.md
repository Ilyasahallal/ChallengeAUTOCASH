# MonApp - ChallengeAUTOCASH 🚗

A modern React Native mobile application built with Expo for managing car listings and automotive services.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

MonApp is a mobile application designed for the automotive industry, providing features for car listings, garage management, and vehicle expertise tracking. Built with React Native and Expo, it offers a seamless cross-platform experience for iOS, Android, and web.

## ✨ Features

- 📱 Cross-platform support (iOS, Android, Web)
- 🚗 Car listing management with detailed information
- 🏢 Garage and location tracking
- 📊 Status tracking (Published/Expertise)
- 🎨 Modern UI with tab-based navigation
- 🔄 Real-time updates
- 📍 Location-based services

## 🛠️ Tech Stack

- **Framework:** [React Native](https://reactnative.dev/) (v0.81.5)
- **Platform:** [Expo](https://expo.dev/) (~54.0.27)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (~5.9.2)
- **Navigation:** [Expo Router](https://docs.expo.dev/router/introduction/) (~6.0.17)
- **UI Components:** React Native with Expo Vector Icons
- **State Management:** React Hooks
- **Animations:** React Native Reanimated (~4.1.1)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- For iOS development: [Xcode](https://developer.apple.com/xcode/)
- For Android development: [Android Studio](https://developer.android.com/studio)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ChallengeAUTOCASH.git
   cd ChallengeAUTOCASH/MonApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 📱 Running the App

Start the development server:

```bash
npm start
# or
npx expo start
```

Then choose your platform:

- Press `i` for iOS simulator
- Press `a` for Android emulator
- Press `w` for web browser
- Scan the QR code with [Expo Go](https://expo.dev/go) app on your physical device

### Platform-Specific Commands

```bash
# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
```

## 📁 Project Structure

```
MonApp/
├── app/                    # App screens and navigation (file-based routing)
│   ├── (tabs)/            # Tab-based navigation screens
│   ├── _layout.tsx        # Root layout
│   └── index.tsx          # Entry screen
├── assets/                # Images, fonts, and other static files
├── components/            # Reusable React components
├── constants/             # App constants and configuration
├── data/                  # Static data and mock data
├── types/                 # TypeScript type definitions
│   └── car.ts            # Car interface and types
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## 📜 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint for code quality
- `npm run reset-project` - Reset to a fresh project

## 💻 Development

### File-Based Routing

This project uses [Expo Router](https://docs.expo.dev/router/introduction/) for navigation. Create new screens by adding files to the `app/` directory.

### TypeScript

The project is fully typed with TypeScript. Type definitions are located in the `types/` directory.

### Styling

The app uses React Native's StyleSheet API for styling. Constants and theme values are defined in the `constants/` directory.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the ChallengeAUTOCASH initiative.

## 📞 Support

For support, please open an issue in the GitHub repository.

---

Built with ❤️ using [Expo](https://expo.dev) and [React Native](https://reactnative.dev)
