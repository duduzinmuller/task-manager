import PropTypes from "prop-types"
import { useState } from "react"

import { AddIcon, TrashIcon } from "../assets/icons"
import AddTaskDialog from "./AddTaskDialog"
import Button from "./Button"

function Header({ subtitle, title }) {
  const [AddTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false)
  return (
    <div className="flex w-full justify-between">
      <div>
        <span className="text-xs font-semibold text-brand-primary">
          {subtitle}
        </span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="flex items-center gap-3">
        <Button color="ghost">
          Limpar tarefas
          <TrashIcon />
        </Button>
        <Button onClick={() => setAddTaskDialogIsOpen(true)}>
          Nova tarefa
          <AddIcon />
        </Button>
        <AddTaskDialog
          isOpen={AddTaskDialogIsOpen}
          handleClose={() => setAddTaskDialogIsOpen(false)}
        />
      </div>
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
