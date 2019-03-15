import { fs } from '@nofrills/fs'
import { TaskManifest } from './Models/TaskManifest'

export class TaskManager {
  async load(manifestfile: string): Promise<TaskManifest> {
    return await fs.json<TaskManifest>(manifestfile)
  }

  async save(manifestfile: string, manifest: TaskManifest): Promise<void> {
    await fs.save(manifestfile, manifest)
  }
}
