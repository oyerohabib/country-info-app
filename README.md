# Country Info Mobile App

A React Native mobile application that allows users to explore information about countries worldwide, with theme customization support.

## Features

- View a list of all countries
- Search countries by name
- View detailed country information:
  - Name
  - Flag
  - Capital city
  - Population
  - Continent
  - Country code
  - States/Provinces (if available)
- Theme customization (Light/Dark mode)
- Responsive design for various screen sizes

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd country-info-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npx expo start
```

## Usage

- Launch the app on your device/emulator
- Browse through the list of countries
- Use the search bar to find specific countries
- Tap on a country to view detailed information
- Toggle between light and dark themes using the theme switch button

## Dependencies

- React Native
- Expo
- React Navigation
- React Native Paper
- Axios
- AsyncStorage

## Project Structure

```
country-info-app/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   └── CountryDetailsScreen.js
│   ├── context/
│   │   └── ThemeContext.js
│   ├── utils/
│   │   └── api.js
│   └── assets/
├── App.js
├── package.json
└── README.md
```

## API Reference

This app uses the [REST Countries API](https://restcountries.com/) to fetch country data.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
