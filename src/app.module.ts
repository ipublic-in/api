import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { dataSourceOptions } from 'db/data-source';
import { AccessGroupModule } from './modules/access-group/access-group.module';
import { UserAccessGroupModule } from './modules/user-access-group/user-access-group.module';
import { CredentialModule } from './modules/credential/credential.module';
import { AccessGroupCredentialModule } from './modules/access-group-credential/access-group-credential.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    AccessGroupModule,
    UserAccessGroupModule,
    CredentialModule,
    AccessGroupCredentialModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
