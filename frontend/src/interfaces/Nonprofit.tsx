interface Nonprofit {
    name: string;
    profileUrl: string;
    logoUrl: string;
    lat_long: string;
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