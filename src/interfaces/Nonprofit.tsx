interface Nonprofit {
    name: string;
    url: string;
    location: number;
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