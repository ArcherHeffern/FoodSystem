import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";
import Nonprofit from './interfaces/Nonprofit';
import Location from './interfaces/Location';
import Form from './Form'
import "./App.css";
import Axios from 'axios';

const backendURL = 'http://localhost:8080';

const App = () => {
  const [apiKey, setApiKey] = useState('');
  const [posts, setPosts] = useState([] as Nonprofit[]);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [error, setError] = useState(false);

  // data fetching
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
  }, []);

  // Geolocation
  function successCallback(position: GeolocationPosition) {
    setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
  }

  function errorCallback(error: GeolocationPositionError) {
    console.log(error.message);
  }
  function getLocation() {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }

  // WHY DOES THIS CODE WORK WHY CAN'T I JUST ASSIGN TO COSNT TFFFF
    let isLoaded = false;
    ({ isLoaded } = useLoadScript({
      googleMapsApiKey: apiKey
    }));

  const center: Location = useMemo(() => (location), [location]);

  let content;

  if (!isLoaded) {
    content = <h1>Loading...</h1>
  } else if (error) {
    content = (
    <>
      <h1>Error loading data</h1>
      <button onClick={() => setError(false)}>Render Anyways</button>
    </>)
  } else {
    console.log(`else statement: Loaded: ${isLoaded}, error: ${error}, apikey: ${apiKey}`)
    content = (
      <>
        <div className="outer">
          <h1 className='title'>Food System</h1>
          <div className="inner">
            <div className="posts">{JSON.stringify(posts)}
            <Form />
            </div>
            <div className="map">
              <GoogleMap
                mapContainerClassName="map-container"
                center={center}
                zoom={16}
              /> 
            </div> 
            </div>
          </div>
      </>
    )
  }
  return (
    <div className="App">
      {content}
    </div>
  );
};
export default App
