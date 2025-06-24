# 📁 Two Pages Task

## 🚀 Project Purpose

This project consists of two pages. The first page, **Users**, displays a table of users. You can add new users and remove existing ones. The data can be sorted by name, role and age.  
The second page is for **Chuck Norris jokes**. It fetches and displays a new random joke from the API every 15 seconds.

## 🧩 Features

- Displays a table of users
- Add a new user
- Remove a user
- Sort table data by name, role and age
- Fetch a random joke from the API on page load ([https://api.chucknorris.io/jokes/random?category=dev](https://api.chucknorris.io/jokes/random?category=dev))
- Fetch a new random joke every 15 seconds
- Display the date and time of the last fetch
- Stop ongoing data requests when navigating away

## ⚙️ Tech Stack

- **React (TypeScript)** — for building the user interface
- **React Router DOM** — for handling page navigation
- **Vite** — as the build tool and development server

## 🌐 How To Run Project

```bash
git clone https://github.com/KestutisRuockus/two-pages
cd two-pages
npm install      # or yarn install
npm run dev
```
