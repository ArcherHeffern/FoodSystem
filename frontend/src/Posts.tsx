import Props from './interfaces/Props';
import Form from './components/Form';

function Posts(props: Props) {
    return (
        <>
            <h1>Posts Page</h1>
           <button onClick={() => props.setPage('map')}>Switch Page</button> 
           <div>{JSON.stringify(props.posts)}</div>
            <Form/>
           {/* {props.posts.map(element => {
           <p>{JSON.stringify(element)}</p> 
           })
           } */}
        </>
    )
}

export default Posts;