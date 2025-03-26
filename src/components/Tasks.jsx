import { useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import { CloudSunIcon, MoonIcon, SunIcon } from "../assets/icons"
import { useGetTasks } from "../hooks/data/use-get-tasks"
import { taskQueryKeys } from "../keys/queries"
import Header from "./Header"
import TaskItem from "./TaskItem"
import { TasksSeparator } from "./TasksSeparator"

const Tasks = () => {
  const queryClient = useQueryClient()
  const { data: tasks } = useGetTasks()

  const morningsTasks = tasks?.filter((task) => task.time === "morning")
  const afternoonsTasks = tasks?.filter((task) => task.time === "afternoon")
  const eveningTasks = tasks?.filter((task) => task.time === "evening")

  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task
      }

      if (task.status === "not_started") {
        toast.success("Tarefa iniciada com sucesso!")
        return { ...task, status: "in_progress" }
      }

      if (task.status === "in_progress") {
        toast.success("Tarefa concluída com sucesso!")
        return { ...task, status: "done" }
      }

      if (task.status === "done") {
        toast.success("Tarefa reiniciada com sucesso!")
        return { ...task, status: "not_started" }
      }

      return task
    })
    queryClient.setQueryData(taskQueryKeys.getAll(), newTasks)
  }

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <Header subtitle="Minhas tarefas" title="Minhas tarefas" />
      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title="Manha" icon={<SunIcon />} />
          {morningsTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa para a manhã
            </p>
          )}
          {morningsTasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudSunIcon />} />
          {afternoonsTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa para a tarde
            </p>
          )}
          {afternoonsTasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </div>

        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {eveningTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa para a noite
            </p>
          )}
          {eveningTasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
