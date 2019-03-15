import { TaskEntry } from './TaskEntry'

export interface TaskManifest {
  tasks: TaskEntry[]
  version: number
}
