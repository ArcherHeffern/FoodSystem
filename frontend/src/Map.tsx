import { GoogleMap, Marker } from "@react-google-maps/api";
import Props from './interfaces/Props';

function Map(props: Props) {
        return (
       <>
        <button onClick={() => props.setPage('posts')}>Toggle</button>
         <GoogleMap
          mapContainerClassName="map-container"
          center={props.center}
          zoom={16}
        />
       </> 
      )
}

export default Map;