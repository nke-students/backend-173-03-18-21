import { Injectable } from '@nestjs/common';
import { json } from 'stream/consumers';

@Injectable()
export class AppService {
  getHello() {
    return 123
  }
}
