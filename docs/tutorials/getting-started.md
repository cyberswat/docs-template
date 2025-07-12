# Getting Started

This tutorial will walk you through setting up and using this project for the first time.

::: info Prerequisites
Before starting, ensure you have:
- Node.js 18+ installed
- Git installed
- A text editor
:::

## Step 1: Installation

First, let's install the project:

```bash
npm install -g your-project
```

## Step 2: Create Your First Project

Create a new project using our CLI:

```bash
your-project create my-app
cd my-app
```

## Step 3: Understanding the Structure

Your new project contains:

```
my-app/
├── src/           # Source files
├── tests/         # Test files
└── package.json   # Project configuration
```

## Step 4: Run the Development Server

Start the development server:

```bash
npm run dev
```

You should see:
```
Server running at http://localhost:3000
```

## Step 5: Make Your First Change

Open `src/index.js` and modify the welcome message:

```js
// Change this
console.log('Hello World')

// To this
console.log('Hello from my app!')
```

## What You've Learned

✅ How to install the project  
✅ How to create a new application  
✅ How to run the development server  
✅ How to make changes  

## Next Steps

- Continue with [Your First Feature](./first-feature)
- Explore [Common Tasks](/how-to/common-tasks)
- Read about [Core Concepts](/explanation/concepts)