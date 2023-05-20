interface Props {
    posts: object;
    setPage: React.Dispatch<React.SetStateAction<string>>;
    center: {
        lat: number;
        lng: number;
    }
}

export default Props;