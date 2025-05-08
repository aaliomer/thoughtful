# Thoughtful - Full Stack Shell Application

A modern full-stack shell application built with TypeScript, Node.js, and React.

## Project Structure

```
thoughtful/
├── packages/
│   ├── backend/     # Node.js + TypeScript backend
│   └── frontend/    # React + TypeScript frontend
```

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development servers:
   ```bash
   npm run dev
   ```

This will start both the backend and frontend servers concurrently.

- Backend will run on: http://localhost:3000
- Frontend will run on: http://localhost:5173

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:frontend` - Start only the frontend
- `npm run dev:backend` - Start only the backend
- `npm run build` - Build both frontend and backend
- `npm run test` - Run tests for both frontend and backend 