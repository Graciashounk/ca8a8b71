# Call Activity Manager

A modern React application for managing call activities, contacts, and communications. Built with React, TypeScript, and Chakra UI.

## Features

### 📞 Call Management
- **Activity Feed**: View recent calls with detailed information
- **Archive System**: Archive and unarchive individual or all calls
- **Call Details**: Comprehensive view of call information including duration, timestamps, and notes
- **Bulk Actions**: Archive or unarchive all calls with a single click

### 👥 Contacts
- **Contact List**: Organized display of all contacts
- **Favorites**: Quick access to favorite contacts
- **Search**: Instant search through contacts by name or phone number
- **Quick Actions**: Call or favorite/unfavorite contacts directly from the list

### ⌨️ Numpad
- **Smart Dialer**: Full keypad with letter labels (T9 style)
- **Haptic Feedback**: Vibration feedback on button presses
- **Quick Dial**: Direct calling from the numpad
- **Visual Feedback**: Toast notifications for call actions

### ⚙️ Settings
- **Theme**: Toggle between light and dark mode
- **Notifications**: Manage push notification preferences
- **Sound**: Customize ringtone settings
- **Language**: Multiple language support
- **Call History**: Option to clear call history

## Technology Stack

- **React 18**: Modern React with hooks and context
- **TypeScript**: Type-safe development
- **Chakra UI**: Modern component library
- **Vite**: Next-generation frontend tooling
- **React Icons**: Comprehensive icon library

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone [<repository-url>](https://github.com/Graciashounk/ca8a8b71.git)
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Project Structure

```
src/
├── components/         # React components
│   ├── CallList.tsx   # Call activity list
│   ├── CallDetail.tsx # Call details view
│   ├── Contacts.tsx   # Contacts management
│   ├── Numpad.tsx     # Dialer component
│   └── Settings.tsx   # Settings panel
├── context/           # React context providers
│   ├── CallsContext.tsx    # Call state management
│   └── ContactsContext.tsx # Contact state management
├── types/             # TypeScript interfaces
├── utils/             # Utility functions
├── data/             # Mock data
└── theme.ts          # Chakra UI theme customization
```

## Features in Detail

### Call Management
- View all calls in a clean, organized list
- Archive calls to keep your active feed clean
- Detailed view of each call with comprehensive information
- Bulk actions for efficient call management

### Contact Management
- Organize contacts with favorites system
- Quick search functionality
- Direct calling from contact cards
- Email and phone information display

### Numpad Features
- Traditional T9-style keypad layout
- Haptic feedback for better user experience
- Smart formatting of phone numbers
- Quick access to calling functionality

### Settings Customization
- Theme preferences
- Notification settings
- Sound customization
- Language selection
- Data management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
