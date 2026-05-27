# 🎧 Podcast App (React)

## 📋 About This Project

- This is my final React project for the DJS course, where I built a fully functional podcast web application. The app started with a basic structure that included a landing page with searchable, sortable, and filterable podcast previews, as well as a show detail page with season toggling.

- In this final phase, I enhanced it into a polished, production-ready application with global audio playback, favourites functionality, theme switching, and deployment best practices.

- The goal of this project was to demonstrate my ability to build a modern React application with real-world features and a strong user experience.

## 🎯 Project Goals

- Build a global audio player with full playback control
- Add favourites functionality with persistent storage
- Improve UI with a recommended shows carousel
- Implement light/dark theme switching
- Deploy a production-ready React app
- Optionally track listening progress across sessions

## 🚀 Features

## 🔊 Global Audio Player

- Plays audio using a placeholder API
- Fixed at the bottom of the app (always visible)
- Supports play, pause, seek, and progress tracking
- Continues playing when navigating between pages
- Shows a confirmation prompt when refreshing during playback

## ❤️ Favourites System

- Users can favourite/unfavourite episodes
- Data is saved using localStorage
- Favourite state is visually indicated (e.g., heart icon)
- Sorting options:
  A–Z / Z–A
  Newest / Oldest

## 🎠 Recommended Shows Carousel

- Horizontally scrollable carousel on the homepage
- Displays:
  Show image
  Title
  Genre tags
  Supports swipe and arrow navigation
  Clicking a show navigates to its detail page

## 🌗 Theme Toggle

- Light and dark mode support
- Theme preference saved in localStorage
- Smooth UI transition between themes
- Sun/moon icon indicator for current theme
- Applies across the entire application

## 🌟 Stretch Feature

### ⏱️ Listening Progress Tracking

- Saves playback position per episode
- Allows resume from where the user left off
- Marks episodes as completed when finished
- Shows progress indicators
- Option to reset listening history

## 🚀 Deployment

- Deploy your app to **Vercel** using a **custom domain or URL**
- (https://bukgub-25140-pto-2505-a-bukho-keanu.vercel.app/)
- Add a **custom favicon** for easy identification in browser tabs - Use tools like [metatags.io](https://metatags.io) to set **rich social media preview metadata**
- Ensure that direct access to dynamic routes (e.g. /show/1) works correctly (SPA routing fallback)

## ✅ Deliverables

- A fully functional and deployed podcast app - Source code in **GitHub** with clear commit history - Live demo link (**Vercel**) - (Optional) Short demo video

## 🧑‍💻 Tech Stack

- React
- JavaScript (ES6+)
- Html & Css
- LocalStorage API
- Vercel (deployment)

---

## 🧑‍⚖️ Panel Review

- During this project, I had to think carefully about component structure, state management, and user experience. I also made decisions around how to persist data, how to keep audio playback consistent across pages, and how to design a clean and responsive interface.

### 🧠 I am prepared to demonstrate and explain:

- How each feature works in the codebase
- My component structure and state management approach
- How localStorage is used for persistence
- My routing and deployment setup
- Why I made certain design and implementation choices

## 📦How to Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:
   ```
    npm run dev
   ```
3. Visit http://localhost:5173/ in your browser.
