# Tenzies

A modern, interactive, and engaging dice game built with React. This project showcases core React fundamentals, including state management, event handling, and component-based UI, while delivering a fun and dynamic user experience.

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
4. [Available Scripts](#available-scripts)
5. [Dependencies](#dependencies)
6. [Project Structure](#project-structure)

## Features

- Responsive design, compatible with all devices
- Interactive Dice Rolling: players roll 10 dice simultaneously and try to match them
- Play time counter: the game counts in seconds how long the user is playing
- Roll counter: the game shows the number of rolls it took to win the game
- Conditional Rendering for Game Status – The UI updates dynamically with "new game" option after matching all dice
- Component-Based UI Design: for maintainability and reusability, the game is structured with components.
- Clear and modular code structure

## Getting Started

### Installation

Install the dependencies and run the project

- npm install
- npm start

Head over to https://vitejs.dev/ to learn more about configuring vite

## Usage

To start the development server, run:
**npm run dev**
The application will be accessible at **http://localhost:5173.**

## Available Scripts

Available Scripts
In the project directory, you can run:

- npm run dev : Starts the development server
- npm run build : Builds the application for production
- npx prettier --check : Checks prettier formatting
- npx prettier --write : Runs prettier and formats it

## Dependencies

- "nanoid": "5.0.7",
- "react": "18.3.1",
- "react-confetti": "^6.1.0",
- "react-dom": "18.3.1",
- "vite": "latest"

## Project Structure

This project follows a modular structure for better organization and maintainability. Here's an overview of the folder structure:

- **components**: Stateless components used in multiple places.
- **css**: View (page) css (style) file exported into index.html.
- **node_modules**: stores all dependencies and libraries used throughout the project.
- **pages**: Main folder for all the views (pages) in the application.
- **public**: Stores all static assets that are not processed by the build system

Below is an example folder structure for the "pages" view:

```
pages/
├── App.jsx/

```
