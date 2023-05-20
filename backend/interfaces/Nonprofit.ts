interface Nonprofit {
    name: string | null;
    profileUrl: string | null;
    logoUrl: string | null;
    lat_long: string | null;
    servings: number | null;
    days_open: Week | null;
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