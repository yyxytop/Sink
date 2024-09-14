export default defineAppConfig({
  title: '短网址',
  description: '一个简单、快速、安全的链接缩短工具，带有分析功能，100% 基于 Cloudflare 运行。',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
