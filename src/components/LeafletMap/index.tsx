import { FC } from "react";
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapStyle } from './style'
import L from 'leaflet';

const grenIcon:any = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconSize: [30, 40], 
});

interface IMaps {
  lt? : string,  
  lg? : string,
  height? : string
}

const LeafletMapComponent : FC<IMaps> = ({ lg, lt}) => {
  const renderCenter:any = () => {
    if(lg && lt) {
      return [parseFloat(lt), parseFloat(lg)];
    }

    return [-15.7939394201285, -47.8828057615547];
  }

  return (
    <MapStyle>
      <MapContainer className="map" center={renderCenter()} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={renderCenter()} icon={grenIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </MapStyle>
      )

}

export default LeafletMapComponent;

