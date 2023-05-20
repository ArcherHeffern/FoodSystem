import Props from './interfaces/Props';

function Posts(props: Props) {
    return (
        <>
            <h1>Posts Page</h1>
           <button onClick={() => props.setPage('map')}>Switch Page</button> 
           <div>{JSON.stringify(props.posts)}</div>
           {/* {props.posts.map(element => {
           <p>{JSON.stringify(element)}</p> 
           })
           } */}
        </>
    )
}

export default Posts;