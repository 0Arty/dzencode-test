import { Module } from '@nestjs/common'

import { ActiveTabsGateway } from './active-tabs.gateway'

@Module({
   providers: [ActiveTabsGateway],
})
export class ActiveTabsModule {}
