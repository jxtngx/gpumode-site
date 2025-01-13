# Development Environment Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- pnpm (v8 or higher)

## Installation

1. Install pnpm globally (if not already installed):
```bash
npm install -g pnpm
```

2. Clone the repository and navigate to the project directory:
```bash
git clone <repository-url>
cd gpumode/site
```

3. Install dependencies:
```bash
pnpm install
```

## Environment Configuration

1. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

2. Configure the required environment variables:
```bash
DISCORD_TOKEN=your_discord_bot_token
GUILD_ID=your_discord_server_id
```

## Development Commands

### Start Development Server
```bash
pnpm dev
```
- Starts the development server on `http://localhost:3000`
- Enables hot reloading
- Shows real-time compilation errors

### Build for Production
```bash
pnpm build
```
- Creates an optimized production build
- Output directory: `.next`

### Start Production Server
```bash
pnpm start
```
- Runs the built application in production mode

### Lint Code
```bash
pnpm lint
```
- Runs ESLint to check for code style issues
- Automatically fixes formatting issues when possible

## Project Structure

```
site/
├── app/
│   ├── components/     # React components
│   ├── lectures/      # Lecture-related utilities
│   └── lib/           # Shared utilities and helpers
├── docs/             # Documentation
└── public/           # Static files
```

## Common Issues

### Package Installation Errors
If you encounter package installation issues:
```bash
pnpm store prune
pnpm install --force
```

### Build Errors
Clear the cache if you experience build issues:
```bash
pnpm clean
pnpm build
```

## Additional Resources

- [pnpm Documentation](https://pnpm.io/documentation)
- [Next.js Documentation](https://nextjs.org/docs)
- [Discord API Documentation](https://discord.com/developers/docs)
