// Monitors derived from currently enabled Cloudflare Worker custom domains.
// Keep IDs stable once history has accumulated.
import type { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: '服务运行状态',
  links: [{ link: 'https://me.yu2yu2.dpdns.org', label: '个人网站' }],
}

const workerConfig: WorkerConfig = {
  monitors: [
    { id: 'personal_site', name: '个人网站', method: 'GET', target: 'https://me.yu2yu2.dpdns.org', statusPageLink: 'https://me.yu2yu2.dpdns.org', timeout: 15000 },
    { id: 'movie_site', name: '影视项目', method: 'GET', target: 'https://movie.yu2yu2.dpdns.org', statusPageLink: 'https://movie.yu2yu2.dpdns.org', timeout: 15000 },
    { id: 'finance_visual', name: '金融可视化', method: 'GET', target: 'https://finvisual.yu2yu2.dpdns.org', statusPageLink: 'https://finvisual.yu2yu2.dpdns.org', timeout: 15000 },
    { id: 'transfer_service', name: '中转服务', method: 'GET', target: 'https://trans.yu2yu2.dpdns.org', statusPageLink: 'https://trans.yu2yu2.dpdns.org', timeout: 15000 },
    { id: 'subscription_tracker', name: '订阅追踪', method: 'GET', target: 'https://renew.yu2yu2.dpdns.org', statusPageLink: 'https://renew.yu2yu2.dpdns.org', timeout: 15000 },
    { id: 'rtv5090', name: 'RTV5090', method: 'GET', target: 'https://rtv5090.yu2yu2.dpdns.org', statusPageLink: 'https://rtv5090.yu2yu2.dpdns.org', timeout: 15000 },
    { id: 'yuhp', name: 'Yuhp', method: 'GET', target: 'https://yuhp.yu2yu2.dpdns.org', statusPageLink: 'https://yuhp.yu2yu2.dpdns.org', timeout: 15000 },
  ],
  // Notifications intentionally disabled until a valid destination is configured.
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
