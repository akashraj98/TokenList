// export const sum = (a: number, b: number) => {
//   if ('development' === process.env.NODE_ENV) {
//     console.log('boop');
//   }
//   return a + b;
// };
import { ethereum } from './ethereum';
import { polygon } from './polygon';

const tokens = {
  homestead: ethereum,
  1: ethereum,
  137: polygon,
  MATIC: polygon,
};
export { tokens };
