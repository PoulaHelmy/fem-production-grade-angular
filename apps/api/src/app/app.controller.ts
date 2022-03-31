import {Controller, Get, Param} from '@nestjs/common';

import { Message } from '@angular-production-grade-fem/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('poula/:id')
  getData2(@Param('id') id:string): Message {
    return this.appService.getData2(`Welcome POULA to api! #${id}`);
  }
}
