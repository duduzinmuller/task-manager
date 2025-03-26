import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useAddTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: "addTask",
    mutationFn: async (task) => {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
      })
      if (!response.ok) {
        throw new Error()
      }
      const createdTask = await response.json()
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
