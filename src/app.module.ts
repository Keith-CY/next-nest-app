import { Module } from '@nestjs/common'
import { ViewModule } from '@server/modules/view/view.module'

@Module({
  imports: [ViewModule],
})
export class AppModule { }
