import { useEffect, useState } from 'react'
import './App.css'
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3000");

function App() {
  const [message, setMessage] = useState("")
  const [messageReceived, setMessageReceived] = useState("")

  const sendMessage = () => {
    socket.emit("send_message", {
      message
    })
  }

  useEffect(() => {
    socket.on("received_message", (data) => {
      setMessageReceived(data.message);
    })
  }, [socket]);

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "20px" }}>
      <input placeholder='Type your message here' style={{ padding: "10px", width: "300px" }} onChange={(e) => {
        setMessage(e.target.value);
      }}/>
      <button onClick={sendMessage}>
        Send Message
      </button>
      <p>
        {messageReceived}
      </p>
    </div>
  )
}

export default App
