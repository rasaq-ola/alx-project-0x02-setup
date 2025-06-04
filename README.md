# Next.js Project Setup and Basics

## Introduction

Welcome to the **alx-project-0x02-setup** repository!  
This project serves as a foundational guide to setting up and working with a modern **Next.js** application using **TypeScript**, **Tailwind CSS**, and reusable components.  
It's designed to demonstrate project structure, routing, component reusability, API data fetching, and dynamic UI interactions—all essential skills in frontend web development.

---

## 📁 Project Structure

The main working directory is:

# alx-project-0x02-setup

alx-project-0x02/
├── components/
│ ├── common/
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ ├── PostCard.tsx
│ │ ├── PostModal.tsx
│ │ └── UserCard.tsx
│ └── layout/
│ └── Header.tsx
├── interfaces/
│ └── index.ts
├── pages/
│ ├── index.tsx
│ ├── home.tsx
│ ├── about.tsx
│ ├── posts.tsx
│ └── users.tsx
├── public/
│ └── assets/
│ └── images/

---

## ✅ Tasks Overview

### 0. Create the GitHub Repository and Initial Setup
- Repository name: `alx-project-0x02-setup`
- Initialized with this `README.md`
- Title: **Next.js Project Setup and Basics**
- Purpose: Document setup and functionality of a basic yet robust Next.js project.

---

### 1. Set Up a Next.js Project
- Scaffolded using `npx create-next-app@latest`
- TypeScript, ESLint, and Tailwind CSS enabled
- Basic folder structure and welcome page implemented
- Run app: `npm run dev -- -p 3000`

---

### 2. Basic Routing in Next.js
- Pages created: `home.tsx` and `about.tsx`
- Header navigation links added for `/home` and `/about`

---

### 3. Create a Reusable Card Component
- `Card.tsx` created in `components/common/`
- Accepts `title` and `content` as props
- Used in `/home` page with dynamic values

---

### 4. Implement a Modal Component
- `PostModal.tsx` component created
- Accepts user input for title and content
- Dynamically displays new posts on `/home` page

---

### 5. Create and Use a Button Component
- `Button.tsx` created with `size` and `shape` props
- Demonstrated on `/about` page with multiple styles

---

### 6. Implement Navigation and Layout
- `Header.tsx` component added to `components/layout/`
- Navigation links to `/home`, `/about`, and `/posts`
- Included in all relevant pages

---

### 7. Implement a PostCard Component
- `PostCard.tsx` displays `title`, `content`, and `userId`
- Fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
- Displayed in `/posts` page

---

### 8. Build a UserCard Component
- `UserCard.tsx` created to show user `name`, `email`, and `address`
- Fetches user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- Displayed in `/users` page

---

## 🚀 Tech Stack

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **ESLint**
- **React Hooks**
- **JSONPlaceholder API**

---

## 💡 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/alx-project-0x02-setup.git
   cd alx-project-0x02
2. Install dependencies:

 npm install

3. Run the development server:

npm run dev -- -p 3000 install

4. visit the App in your browser at http://localhost:3000
