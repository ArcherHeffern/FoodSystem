interface Nonprofit {
    name: string;
    profileUrl: string;
    logoUrl: string;
    lat_long: string;
    servings: number;
    days_open: Week;
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