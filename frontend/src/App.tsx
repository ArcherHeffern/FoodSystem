import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";
import "./App.css";
import Axios from 'axios';

const App = () => {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    async function fetchData() {
    try {
    const res = await Axios.get('https://localhost:8080/apikey');
    const apiKey = res.data;
    setApiKey(apiKey);
    } catch (e) {
      console.log('exception');
    }
    }
    fetchData();
  }, [setApiKey])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
};
export default App
