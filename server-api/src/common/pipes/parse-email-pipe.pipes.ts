/* eslint-disable @typescript-eslint/no-unsafe-call */
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isEmail } from 'class-validator';

@Injectable()
export class ParseEmailPipe implements PipeTransform<string, string> {
  transform(value: string): string {
    if (!isEmail(value)) {
      throw new BadRequestException('Invalid email type');
    }
    return value.toLowerCase().trim();
  }
}
