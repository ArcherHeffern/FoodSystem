interface Nonprofit {
    [key: string]: string|number|null|Week;
    name: string;
    profileUrl: string;
    logoUrl: string;
    lat_long: string;
    servings: number|null;
    days_open: Week|null;
}

interface Week {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}

export default Nonprofit;