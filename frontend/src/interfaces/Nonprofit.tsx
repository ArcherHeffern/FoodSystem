interface Nonprofit {
    name: string;
    profileUrl: string|null;
    logoUrl: string|null;
    lat_long: string|null;
    servings: number|null;
    days_open: Week|null;
}

interface Week {
    [key: string]: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}

export default Nonprofit;