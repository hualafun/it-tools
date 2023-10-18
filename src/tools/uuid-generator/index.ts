import { Fingerprint } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'UUIDs v4 生成器',
  path: '/uuid-generator',
  description:
    '通用唯一标识符(UUID)是一个128位的数字，用于识别计算机系统中的信息。可能的uuid的数量是16^32，即2^128或大约3.4 × 10^38(这是很多!)',
  keywords: ['uuid', 'v4', 'random', 'id', 'alphanumeric', 'identity', 'token', 'string', 'identifier', 'unique'],
  component: () => import('./uuid-generator.vue'),
  icon: Fingerprint,
});
