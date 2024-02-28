# Real-Time Chat App

This is a simple real-time chat application built using React for the frontend and Express with Socket.io for the backend. Users can type messages, send them, and see the received messages in real-time.

## Setup

### Frontend (React)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the application:
   ```bash
   npm start
   ```

### Backend (Express with Socket.io)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the server:
   ```bash
   npm start
   ```

## Usage

1. Open the application in your browser (typically at http://localhost:5173).
2. Type your message in the input field.
3. Click the "Send Message" button to send the message.
4. Received messages will be displayed below the input field.

## Code Overview

### Frontend (`App.js`)

- Import necessary modules and set up a Socket.io connection.
- Use state variables to manage the input message and received message.
- Implement the `sendMessage` function to emit messages to the server.
- Use the `useEffect` hook to listen for incoming messages and update the UI.

### Backend (`server.js`)

- Set up an Express server with Socket.io integration.
- Enable CORS for communication with the React frontend.
- Handle socket connections and implement event listeners for sending and receiving messages.

## Technologies Used

- React
- Express
- Socket.io
- CORS

## Note

Make sure both the frontend and backend servers are running simultaneously for the application to work properly.

Feel free to modify and extend the application based on your requirements!

Enjoy chatting in real-time! 🚀
