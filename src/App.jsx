import { Toaster } from "sonner"

import Sidebar from "./components/Sidebar"
import Tasks from "./components/Tasks"

function App() {
  return (
    <div className="flex">
      <Toaster
        toastOptions={{
          style: {
            color: "#35383E",
          },
          duration: 3000,
        }}
      />
      <Sidebar />
      <Tasks />
    </div>
  )
}

export default App
