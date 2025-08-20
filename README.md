# Quad Sports Registration Demo

A modern, mobile-first sports registration application built with Next.js, TypeScript, and Tailwind CSS. This demo showcases a streamlined registration process for youth sports programs.

## Features

- 🏈 **Multi-Sport Support**: Flag Football, Soccer, and Speed & Agility programs
- 📱 **Mobile-First Design**: Optimized for mobile devices with responsive design
- ⚡ **Real-time Validation**: Automatic age calculation and division assignment
- 🎨 **Modern UI**: Beautiful gradient backgrounds and smooth animations
- 🔒 **Form Validation**: Comprehensive form validation and error handling
- 💳 **Payment Ready**: Structured for easy integration with payment processors

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main registration page
├── components/
│   └── ui/                  # Reusable UI components
└── lib/
    └── utils.ts             # Utility functions
```

## Customization

### Adding New Sports
Update the `SPORTS` array in `src/app/page.tsx`:
```typescript
const SPORTS = [
  { id: "new-sport", name: "New Sport", icon: "🏀", color: "bg-red-500" },
  // ... existing sports
];
```

### Adding New Sessions
Update the `SESSIONS` object:
```typescript
const SESSIONS = {
  "new-sport": [
    { id: "session1", name: "Session Name", start: "2025-01-01", end: "2025-03-01", price: 150 },
  ],
  // ... existing sessions
};
```

### Styling
The app uses a sports-themed color palette with gradients. Main colors:
- Blue: Primary brand color
- Green: Success and positive actions
- Orange: Accent and highlights
- Gray: Neutral backgrounds and text

## Integration Points

### Payment Processing
The registration form is ready for integration with:
- Stripe Checkout
- Stripe Payment Element
- PayPal
- Other payment processors

### Backend Integration
Replace mock data with API calls to:
- Fetch available programs and sessions
- Submit registration data
- Handle payment processing
- Send confirmation emails

## Demo Data

The app currently uses mock data for demonstration purposes. In production, replace with:
- Real program and session data from your CMS
- Live venue information
- Actual pricing and availability
- Real contact information

## License

This project is for demonstration purposes. Customize and use according to your needs.

---

Built with ❤️ for Quad Sports Complex