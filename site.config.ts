import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'a9c177daeb5549e6b998135916eb55db',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'GMAHK Bethesda',
  domain: 'https://bethesda.vercel.app',
  author: 'GMAHK Bethesda Penca',

  // open graph metadata (optional)
  description: 'GMAHK Bethesda Penca | Jakarta',

  // social usernames (optional)
  twitter: 'gmahk bethesda',
  github: 'gmahk bethesda',
  linkedin: 'bethesda',
 // newsletter: '#', // optional newsletter URL
  youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
navigationStyle: 'custom',
 navigationLinks: [
  {
   title: '🗓️',
    pageId: '42dceeaf78654218ab46114dd6b0e574'
 },
     {
   title: '⛪',
    pageId: '5d5fe78976a8472baabcc76232b549fa'
 },
 {
    title: '☎️',
    pageId: 'a850e1013ede4746b2d6d01242b0855d'
  }
 ]
})
