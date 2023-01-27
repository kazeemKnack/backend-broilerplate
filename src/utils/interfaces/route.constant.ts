const ROUTE_PATHS = {
    BASE: '/api/v1',
    EMAIL: '/email',
    NEWSLETTER: '/newsletter',
    RECIPIENTS: '/recipients',
    CONTACT_US: '/contact-us',
    NULL: null,
} as const;

type ROUTE_PATHS_TYPES = typeof ROUTE_PATHS[keyof typeof ROUTE_PATHS];

export { ROUTE_PATHS, ROUTE_PATHS_TYPES };
