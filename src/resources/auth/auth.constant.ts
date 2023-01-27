const ROLES_ENUM = [
    'Author',
    'Admin',
    'Editor',
    'Reviewer',
    'ChiefEditor',
    'ManagerialEditor',
    'EditorialSecretary',
] as const;
type ROLES_TYPES = typeof ROLES_ENUM[number];

export { ROLES_TYPES, ROLES_ENUM };
