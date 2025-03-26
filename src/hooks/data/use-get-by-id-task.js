import { useQuery } from "@tanstack/react-query"

import { api } from "../../lib/axios"

export const useGetByIdTask = ({ taskId, onSuccess }) => {
  return useQuery({
    queryKey: ["task", taskId],
    queryFn: async () => {
      const { data: task } = await api.get(`/tasks/${taskId}`)
      onSuccess(task)
      return task
    },
  })
}
