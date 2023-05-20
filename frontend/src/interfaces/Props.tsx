import Location from './Location';
interface Props {
    posts: object[];
    setPage: React.Dispatch<React.SetStateAction<string>>;
    center: Location;
}

export default Props;