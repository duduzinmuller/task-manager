import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetByIdTask = ({ taskId, onSuccess }) => {
  return useQuery({
    queryKey: ["task", taskId],
    queryFn: async () => {
      const { data: task } = await await axios.get(
        `http://localhost:3000/tasks/${taskId}`
      )
      onSuccess(task)
      return task
    },
  })
}
