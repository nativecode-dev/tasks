import { DictionaryOf } from '@nofrills/types'

export interface TaskEntryOptions {
  cwd: string
  env: DictionaryOf<string>
  requires: string[]
  shell: string
}
