import { Unlink } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'URL解析器',
  path: '/url-parser',
  description:
    '解析URL字符串以获取所有不同部分（协议、源、参数、端口、用户名密码等）',
  keywords: ['url', 'parser', 'protocol', 'origin', 'params', 'port', 'username', 'password', 'href'],
  component: () => import('./url-parser.vue'),
  icon: Unlink,
});
