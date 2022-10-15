export const SITE = {
	title: 'Homepage',
	description: 'A highly customizable homepage (or startpage / application dashboard) with Docker and service API integrations.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://gethomepage.dev/homepage-og.png',
		alt: 'hompage dashboard with logo'
	},
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;

export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/benphelps/homepage-docs/tree/main/`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/k4ruYNrudu`;

export const GITHUB_URL = `https://github.com/benphelps/homepage`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type SidebarLink = { text: string; link?: string, links?: SidebarLink[] };

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, SidebarLink[]>
>;

/*

# Streaming Media Providers

Outgoing media streaming services, these widgets display current media information and controls.

## Emby

## Jellyfin

## Plex

## Plex (Tautulli)

# Media Management Tools

This includes the `arr` range of utilities, as well as media request management tools.

## Sonarr

## Radarr

## Readarr

## Lidarr

## Bazarr

## Ombi

## Overseerr

## Jellyseerr

# Download Clients

Download clients, like Usenet and BitTorrent, as well as their utility services for tracker and list management.

## Nzbget

## SABnzbd

## ruTorrent

## qBittorrent

## Transmission

## Prowlarr

## Jackett

# Networking Utilities

Includes things like proxy managers, DNS providers and network statistics.

## PiHole

## AdGuard Home

## Portainer

## Traefik

## NGINX Proxy Manager

## Speedtest Tracker

## Syncthing Relay Server

## Authentik

## Proxmox

## Unifi Controller

# System Utilities & Services

System specific utilities and tools like message queues, databases, etc.

## Gotify

# Information Providers

Non service related items that display information from other sources, like stock monitoring or news.

## Mastodon

## Coin Market Cap

*/

export const SIDEBAR: Sidebar = {
	en: {
		'Getting Started': [
			{ text: 'Installation', link: 'en/installation' },
            { text: 'Docker', link: 'en/installation/docker' },
            { text: 'Unraid', link: 'en/installation/unraid' },
            { text: 'Source', link: 'en/installation/source' },
		],
		'Configuration': [
            { text: 'Services', link: 'en/configs/services' },
            { text: 'Service Widgets', link: 'en/configs/service-widgets'},
            { text: 'Information Widgets', link: 'en/configs/widgets' },
            { text: 'Bookmarks', link: 'en/configs/bookmarks' },
            { text: 'Docker', link: 'en/configs/docker' },
            { text: 'Settings', link: 'en/configs/settings' }
        ],
        'Service Widgets': [
            { text: 'Streaming Media Providers', links: [
                { text: 'Emby', link: 'en/services/emby' },
                { text: 'Jellyfin', link: 'en/services/jellyfin' },
                { text: 'Plex (Tautulli)', link: 'en/services/plex-tautulli' },
                { text: 'Plex', link: 'en/services/plex' },
            ]},
            { text: 'Media Management Tools', links: [
                { text: 'Bazarr', link: 'en/services/bazarr' },
                { text: 'Jellyseerr', link: 'en/services/jellyseerr' },
                { text: 'Lidarr', link: 'en/services/lidarr' },
                { text: 'Ombi', link: 'en/services/ombi' },
                { text: 'Overseerr', link: 'en/services/overseerr' },
                { text: 'Radarr', link: 'en/services/radarr' },
                { text: 'Readarr', link: 'en/services/readarr' },
                { text: 'Sonarr', link: 'en/services/sonarr' },
            ]},
            { text: 'Download Clients', links: [
                { text: 'Jackett', link: 'en/services/jackett' },
                { text: 'NZBGet', link: 'en/services/nzbget' },
                { text: 'Prowlarr', link: 'en/services/prowlarr' },
                { text: 'qBittorrent', link: 'en/services/qbittorrent' },
                { text: 'ruTorrent', link: 'en/services/rutorrent' },
                { text: 'SABnzbd', link: 'en/services/sabnzbd' },
                { text: 'Transmission', link: 'en/services/transmission' },
            ]},
            { text: 'Networking Utilities', links: [
                { text: 'AdGuard Home', link: 'en/services/adguard-home' },
                { text: 'Authentik', link: 'en/services/authentik' },
                { text: 'NGINX Proxy Manager', link: 'en/services/nginx-proxy-manager' },
                { text: 'PiHole', link: 'en/services/pihole' },
                { text: 'Portainer', link: 'en/services/portainer' },
                { text: 'Proxmox', link: 'en/services/proxmox' },
                { text: 'Speedtest Tracker', link: 'en/services/speedtest-tracker' },
                { text: 'Syncthing Relay Server', link: 'en/services/syncthing-relay-server' },
                { text: 'Traefik', link: 'en/services/traefik' },
                { text: 'Unifi Controller', link: 'en/services/unifi-controller' },
            ]},
            { text: 'System Utilities & Services', links: [
                { text: 'Gotify', link: 'en/services/gotify' },
            ]},
            { text: 'Information Providers', links: [
                { text: 'Coin Market Cap', link: 'en/services/coin-market-cap' },
                { text: 'Mastodon', link: 'en/services/mastodon' },
            ]},
        ],
        'Information Widgets': [
            { text: 'Resources', link: 'en/widgets/resources' },
            { text: 'Weather API', link: 'en/widgets/weather' },
            { text: 'OpenWeatherMap', link: 'en/widgets/openweathermap' },
            { text: 'Search', link: 'en/widgets/search' },
            { text: 'Date & Time', link: 'en/widgets/datetime' },
            { text: 'Greeting', link: 'en/widgets/greeting' },
            { text: 'Unifi Controller', link: 'en/widgets/unifi_controller' },
            { text: 'Glances', link: 'en/widgets/glances' }
        ],
		'Contributing': [
            { text: 'Translations', link: 'en/contributing/translations' },
        ],
	},
};