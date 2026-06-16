/*
 * packs.js — Pack data
 * To add a new pack, copy one of the objects below and fill in the fields.
 * Place the cover image in:  images/covers/<filename>
 * Place the avatar image in: images/avatars/<filename>
 * Place the .mcpack file in: packs/<filename>
 */

/* 
 * SITE URL — used for Discord/Twitter embed images (og:image must be absolute)
 * Set this to the root of your published site, no trailing slash.
 * Example: 'https://yourusername.github.io/feumrp'
 * Leave blank ('') to use relative paths (works fine but Discord may not show images)
 */
const SITE_URL = '';

/* 
 * DISCORD INTEGRATION
 * Change this string to your Discord server's permanent invite code (the part after discord.gg/)
 * The webpage and server will automatically load, cache, and dynamically update the counts!
 */
const DISCORD_INVITE_CODE = 'vUFtkJWYPa';

/* 
 * CREATORS list configuration
 * To add a new creator label, simply copy an object, fill in the fields,
 * and it will automatically be rendered in search filters and URL parameters!
 */
const CREATORS = [
  {
    id: 'feum',                         // Search and query identifier (lowercase)
    name: 'feum',                       // Human readable handle displayed as @name
    avatar: 'images/avatars/uua.png',   // Path to avatar image
    aliases: ['feum', 'uua'],           // Actual pack author matches in PACKS list
    isPremium: true                     // Special glowing aesthetic for feum
  },
  {
    id: 'aeecii',
    name: 'aeecii',
    avatar: 'images/avatars/aeecii.png',
    aliases: ['aeecii'],
    isPremium: false
  },
  {
    id: 'zlata',
    name: 'zlata',
    avatar: 'images/avatars/zlata.png',
    aliases: ['zlata'],
    isPremium: false
  }
];

/*
 * PACKS list
 * To add a new pack:
 *   1. Copy one object below and fill in the fields
 *   2. Add a unique `slug` (lowercase, hyphens only — used for the shareable embed URL)
 *   3. Place cover in images/covers/, avatar in images/avatars/, file in packs/
 *   4. Run:  node generate-embeds.js   (creates <slug>.html for Discord/Twitter embeds)
 */
const PACKS = [
  {
    id: 'new-greatest',
    slug: 'new-greatest',
    title: 'Definition of Goat',
    author: 'uua',
    authorAvatar: 'images/avatars/uua.png',
    description: '',
    resolution: '',
    tags: ['pvp', ''],
    cover: 'images/covers/newgreatest.jpg',
    screenshots: [
      'images/covers/newgreatest.jpg',
    ],
    youtubeEmbed: 'https://www.youtube.com/embed/SV8k8vHmU2M',
    downloadFile: 'packs/feum.zip',
    featured: true,
    dateAdded: '2026-05-25',
  },
  {
    id: 'aeecii-1k',
    slug: 'aeecii-1k',
    title: 'Aeecii 1K',
    author: 'Aeecii',
    authorAvatar: 'images/avatars/aeecii.png',
    description: '',
    resolution: '',
    tags: ['', ''],
    cover: 'images/covers/aeecii-1k.png',
    screenshots: [
      'images/covers/aeecii-1k.png',
    ],
    youtubeEmbed: 'https://www.youtube.com/embed/a4Tt7ds7mMs',
    downloadFile: 'packs/aeecii_1k.mcpack',
    featured: true,
    dateAdded: '2026-05-20',
  },
  {
    id: 'zlata-4k',
    slug: 'zlata-4k',
    title: 'Zlata 4K',
    author: 'Zlata',
    authorAvatar: 'images/avatars/zlata.png',
    description: '',
    resolution: '',
    tags: ['', ''],
    cover: 'images/covers/zlata4k.png',
    screenshots: [
      'images/covers/zlata4k.png',
    ],
    youtubeEmbed: 'https://www.youtube.com/embed/pm5599FcNk4',
    downloadFile: 'packs/Sapphire_Days_4k.mcpack',
    featured: true,
    dateAdded: '2026-05-20',
  },
  {
    id: 'zlata-5k',
    slug: 'zlata-5k',
    title: 'Zlata 5K',
    author: 'Zlata',
    authorAvatar: 'images/avatars/zlata.png',
    description: '',
    resolution: '',
    tags: ['', ''],
    cover: 'images/covers/zlata5k.png',
    screenshots: [
      'images/covers/zlata5k.png',
    ],
    youtubeEmbed: 'https://www.youtube.com/embed/zUkjEsC4UHg',
    downloadFile: 'packs/zlata_5k.mcpack',
    featured: true,
    dateAdded: '2026-05-20',
  },
];
