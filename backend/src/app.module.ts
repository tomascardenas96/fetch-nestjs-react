import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { ShopsModule } from './shops/shops.module';
import { FoodsModule } from './foods/foods.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'lija',
      username: 'root',
      password: 'root',
      entities: [join(__dirname, '/**/*.entity{.ts,.js}')],
      synchronize: true,
    }),
    UserModule,
    ShopsModule,
    FoodsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
