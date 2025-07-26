# Codeq Project

Welcome to the official website of Codeq, an innovative educational platform designed to empower youth. Our platform offers a dynamic space where young individuals can learn, collaborate, and bring their startup ideas to life.

Through a modern, user-friendly interface, users can explore opportunities, join collaborative projects, and gain real-world experience — all before stepping into the job market.

Built with scalability and simplicity in mind, the website allows seamless registration, project showcasing, and community interaction, ensuring a smooth journey from learning to launching.

![App Screenshot](screenshots/main-screenshot.png)

## Table of Contents

- [Screenshots](#screenshots)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Screenshots

### Home Page

![Home Page](screenshots/home-page.png)

### Mobile View

<img src="screenshots/mobile-view.png" alt="Mobile View" width="300">

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (version 16.0 or higher)
- npm (version 8.0 or higher) or yarn (version 1.22 or higher)

### Steps

1. Clone the repository

   ```bash
   git clone https://github.com/riadosman/Codeq_project.git
   ```

2. Navigate to the project directory

   ```bash
   cd Codeq_project
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the development server

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Usage

### Development

Start the development server:

```bash
npm run dev
```

The app will open in development mode at [http://localhost:3000](http://localhost:3000).

### Production Build

Create a production build:

```bash
npm run build
```

## Available Scripts

In the project directory, you can run:

- `npm run dev` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
├── .next
├── .vscode
├── public
├── screenshots
├── src
    ├── app
    ├── vendor-chunks
      ├── icon.png
    ├── chunks
    ├── css
    ├── development
    ├── media
    ├── webpack
      ├── app
      ├── app
    ├── app
  ├── fonts
  ├── images
    ├── IBM_Plex_Sans_Arabic
    ├── icons
  ├── app
  ├── components
    ├── AboutUs
    ├── Blogs
    ├── FAQ
    ├── Footer
    ├── Gallery
    ├── Header
    ├── Hero
    ├── JoinUs
    ├── Projects
    ├── Services
    ├── Testimonial
```

## Configuration

### Package.json Scripts

Custom scripts you can add to your `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Testing

```bash
# Run tests
npm test
# or
yarn test

# Run tests with coverage
npm test -- --coverage
```

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Create React App](https://create-react-app.dev/) - React toolchain
- [React Router](https://reactrouter.com/) - For routing (if used)
- [Next js](https://nextjs.org/) - The React Framework for the Web

## Contact

Your Name - riyados973@gmail.com

Project Link: [https://github.com/riadosman/Codeq_project](https://github.com/riadosman/Codeq_project)
