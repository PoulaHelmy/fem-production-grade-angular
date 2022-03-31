import { Injectable } from '@nestjs/common';
import { Message } from '@angular-production-grade-fem/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
  getData2(message:string): Message {
    return { message };
  }
}
