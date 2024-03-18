import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';
import { DriverModule } from './modules/driver/driver.module';
import { TripModule } from './modules/trip/trip.module';
import { AdminModule } from './modules/admin/admin.module';
import { DatabaseModule } from './modules/database/database.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:
        process.env.PROJECT_ENVIRONMENT === 'DEVELOPMENT'
          ? 'src/schema.gpl'
          : join(process.cwd(), 'schema.gpl'),
      path: 'transport-app',
    }),
    DatabaseModule,
    AdminModule,
    AuthModule,
    UserModule,
    DriverModule,
    TripModule,
    SharedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // Dummy function for testing purposes
  static helloWorld(): string {
    return 'Hello World';
  }
}
