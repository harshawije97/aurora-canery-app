import * as crypto from 'crypto';

function hashInput(input: string): string {
  return crypto.createHash('sha256').update(input).digest('hex');
}
function compareHashValues(first: string, last: string) {
  return crypto.timingSafeEqual(
    Buffer.from(first, 'hex'),
    Buffer.from(last, 'hex'),
  );
}
export { hashInput, compareHashValues };
