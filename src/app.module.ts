import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleController } from './example/example.controller';
import { ExampleService } from './example/example.service';
import { ProductModule } from './product/product.module';
import {MongooseModule} from "@nestjs/mongoose";
import {mongooseConfig} from "./mongo.config";
@Module({
  imports: [
      ...mongooseConfig,
    ProductModule, // 2.2 Add the product module
  ],
  controllers: [AppController, ExampleController],
  providers: [AppService, ExampleService],
})
export class AppModule {}
