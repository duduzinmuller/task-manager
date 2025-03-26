import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import { api } from "../../lib/axios"

export const useAddTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: "addTask",
    mutationFn: async (task) => {
      const { data: createdTask } = await api.post("/tasks", task)
      return createdTask
    },
    onSuccess: (createdTask) => {
      toast.success("Tarefa adicionada com sucesso!")
      queryClient.setQueryData("tasks", (oldTasks) => {
        return [...oldTasks, createdTask]
      })
    },
  })
}
