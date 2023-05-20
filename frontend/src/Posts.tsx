import Props from './interfaces/Props';

function Posts(props: Props) {
    function switchPage() {
        props.setPage('map');
    }
    return (
        <>
            <h1>Posts Page</h1>
           <button onClick={switchPage}>Switch Page</button> 
        </>
    )
}

export default Posts;