import { useLoadScript } from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";
import Props from './interfaces/Props'
import Nonprofit from './interfaces/Nonprofit';
import Location from './interfaces/Location';
import Map from './Map';
import Posts from './Posts';
import "./App.css";
import Axios from 'axios';

const backendURL = 'http://localhost:8080';

/* TODO: 
Get location of user

*/

const App = () => {
  const [apiKey, setApiKey] = useState('');
  const [posts, setPosts] = useState([] as Nonprofit[]);
  const [location, setLocation] = useState({lat: 0, lng: 0});
  const [error, setError] = useState(false);
  const [page, setPage] = useState('posts'); // There are 2 pages so far, posts and map 

  function successCallback(position: GeolocationPosition) {
    setLocation({lat: position.coords.latitude, lng: position.coords.longitude});
  }

  function errorCallback(error: GeolocationPositionError) {
    console.log(error.message);
  }
  function getLocation() {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }
  async function fetchData(url: string, headers: object) {
    try {
      const res = await Axios.get(url, { headers: headers });
      if (res.status < 300 && res.status >= 200) {
        return res.data;
      } else {
        return null;
      }
    } catch (e) {
      console.log(`exception: url: ${url}\n${e}`);
      return null;
    }
  }
  useEffect(() => {
    fetchData(`${backendURL}/apikey`, {}).then(data => {
      if (data) {
        setApiKey(data);
      } else {
        setError(true);
      }
    })
    fetchData(`${backendURL}/api/food-banks/search?location=${location.lat},${location.lng}`, {}).then(data => {
      if (data) {
        setPosts(data);
      } else {
        setError(true);
      }
    });
    getLocation();
  }, [])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey
  });
  const center: Location = useMemo(() => ({...location}), [location]);
  const props: Props = { posts , setPage, center}

  return (
    <div className="App">
    {!isLoaded ? (
      <h1>Loading...</h1>
    ) : error ? (<>
      <div>Error loading data: error</div>
      <button onClick={() => setError(false)}>Render Anyways</button>
    </>
    ) : page === 'posts' ? (
      <Posts {...props} />
    ) : (
      <Map {...props}/>
    )}
  </div>
  );
};
export default App
