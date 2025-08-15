# 🤖 ConvoBuddy: AI Persona Chat

ConvoBuddy is a web application that allows users to engage in conversations with AI-powered personas of well-known tech educators, Hitesh Choudhary and Piyush Garg. The application provides an interactive and dynamic chat experience, complete with a sleek, modern interface that includes a dark mode.

## ✨ Features

  * **Interactive AI Chat**: Engage in dynamic conversations with AI personas.
  * [cite\_start]**Persona Selection**: Choose to chat with AI versions of Hitesh Choudhary or Piyush Garg. [cite: 47]
  * [cite\_start]**Sleek Chat Interface**: A modern and user-friendly chat modal with message bubbles and timestamps. [cite: 79, 80]
  * [cite\_start]**Real-time Experience**: Includes a typing indicator to simulate a live conversation. [cite: 117]
  * [cite\_start]**Theme Toggle**: Seamlessly switch between light and dark modes. [cite: 114]
  * [cite\_start]**Smooth Animations**: Built with **Framer Motion** for fluid and engaging user interactions. [cite: 49, 52]
  * **Responsive Design**: A fully responsive layout that works on all devices.

-----

## 🛠️ Tech Stack

This project is built with a modern, full-stack technology set:

  * [cite\_start]**Framework**: **Next.js 13** (App Router) [cite: 13, 16]
  * **Language**: **TypeScript**
  * [cite\_start]**Styling**: **Tailwind CSS** [cite: 25]
  * [cite\_start]**UI Components**: **shadcn/ui** and Radix UI for accessible and reusable components. [cite: 3, 4, 5, 6, 7, 8, 9, 10, 11]
  * [cite\_start]**Animations**: **Framer Motion** [cite: 49]
  * [cite\_start]**Backend API**: Next.js API Routes [cite: 64]
  * [cite\_start]**AI Integration**: **OpenAI API** leveraged via Google's Generative Language models. [cite: 66, 67]

-----

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

Make sure you have Node.js (version 18.x or later) and npm installed on your machine.

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/meet1075-persona.git
    cd meet1075-persona
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

3.  **Set up environment variables:**

    Create a file named `.env.local` in the root of your project and add your API key:

    ```
    GEMINI_API_KEY="YOUR_API_KEY_HERE"
    ```

### Running the Application

Execute the following command to start the development server:

```sh
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to see the result.

-----

## 📂 Project Structure

The project follows a well-organized structure based on the Next.js App Router paradigm.

```
meet1075-persona/
├── app/                  # Main application directory
│   ├── api/chat/route.ts # Backend API endpoint for chat
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page component
├── components/           # Reusable React components
│   ├── ui/               # UI components from shadcn/ui
│   ├── ChatModal.tsx     # Chat interface modal
│   ├── MessageBubble.tsx # Component for individual chat messages
│   ├── PersonaCard.tsx   # Card for selecting a persona
│   └── ThemeToggle.tsx   # Light/dark mode switcher
├── lib/                  # Utility functions
│   └── utils.ts          # Helper for merging Tailwind classes
├── personas/             # Persona definition files
│   ├── hitesh.txt        # Persona data for Hitesh Choudhary
│   └── piyush.txt        # Persona data for Piyush Garg
└── public/               # Static assets (images, etc.)
```
