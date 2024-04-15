/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.hush1one.com/',
    exclude: ['/icon.svg', '/apple-icon.png', '/manifest.webmanifest', '/tags/*'],
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    }
}