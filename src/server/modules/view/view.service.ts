import { Injectable, OnModuleInit } from '@nestjs/common'
import next from 'next'
import NextServer from 'next/dist/next-server/server/next-server'

@Injectable()
export class ViewService implements OnModuleInit {
  #server: NextServer
  get server() {
    return this.#server
  }
  async onModuleInit(): Promise<void> {
    try {
      this.#server = next({ dev: true, dir: './src/client' }) as any
      await this.#server.prepare()
    } catch (err) {
      console.log(err)
    }
  }
}
