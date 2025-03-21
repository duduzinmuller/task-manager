import { useState } from "react"
import Header from "./Header"

function Tasks() {
  const [messages, setMessages] = useState(["Hello", "World"])
  const [inputValue, setInputValue] = useState("teste")

  function handleButtonClick() {
    setMessages([...messages, inputValue])
  }

  return (
    <div>
      <Header>
        <h1>Add a task</h1>
      </Header>
      <input
        type="text"
        className="input"
        placeholder="Create your task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="button" onClick={handleButtonClick}>
        Add Task{" "}
      </button>

      <Header>
        <h1>My Tasks</h1>
      </Header>
      <div>
        <ul>
          {messages.map((message) => (
            <li>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Tasks
