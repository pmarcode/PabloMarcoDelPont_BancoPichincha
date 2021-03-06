export interface Organization {
    id: number;
    name: string;
    status: number;
}

const organizations: Organization[] = [
    'Banco Pichincha',
    '2',
    '3'
].map((text, index) => ({
    id: index + 1,
    name: `Organization ${text}`,
    status: 1
}));

export default organizations;
