import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { CrudModule } from './crud/crud.module';
import { DogsController } from './dogs/dogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { DogsModule } from './dogs/dogs.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '22082001',
    database: 'DemoPostgreSQL',
    entities: [],
    synchronize: true,
  }),
    CrudModule,
    DogsModule],
  controllers: [AppController, DogsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource){}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
