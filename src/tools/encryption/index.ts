import { Lock } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '加密/解密文本',
  path: '/encryption',
  description: '加密和解密文本明文使用加密算法，如AES, TripleDES, Rabbit或RC4。',
  keywords: ['cypher', 'encipher', 'text', 'AES', 'TripleDES', 'Rabbit', 'RC4'],
  component: () => import('./encryption.vue'),
  icon: Lock,
  redirectFrom: ['/cypher'],
});
