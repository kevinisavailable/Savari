import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Statistic } from 'antd';
import {GoogleMap , useLoadScript , Marker  } from '@react-google-maps/api'

const DriverHomePage = () => {

  const {isLoaded , loadError} = useLoadScript({
    googleMapsApiKey : "AIzaSyDCRgorAlAjM4D2JBESmZJ_5z0Gk7-VXEQ"
  })

  const [currentLocation , setCurrentLocation] = useState({})
  const [locationError , setLocationError] = useState({})
  const onLoad = (map)=> {null}
  const mapOptions = {
    disableDefaultUI : true, 
    zoomControl : true
  }


  const containerStyle = {width : "100%" , height : '400px'}

  const getCurrentLocation = async()=>{
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
  }

  navigator.geolocation.getCurrentPosition(
      (position) => {
          setCurrentLocation(position);
          setLocationError(null);
      },
      (error) => {
          setLocationError(error.message);
      }
  );
  }

  return (<div>
    <Card bordered title={"Highlights"}>
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="Total Rides Today" value={3} />
      </Col>
      <Col span={12}>
        <Statistic title="Total Earnings" value={"$13"} />
      </Col>
    </Row>
    </Card>
    <br />
    <Card title={"Current"} extra={<div style={{display:"flex",gap:"1rem"}}>
    <Button type='primary' danger >Get Passengers</Button>
    <Button type='primary' onClick={getCurrentLocation}>Get Current Location</Button> </div>}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat : currentLocation?.coords?.latitude || -3.745,
          lng : currentLocation?.coords?.longitude || -38.523
        } } 
        zoom={10}
        options={mapOptions}
        onLoad={onLoad}
        >
          { currentLocation.coords && (<><Marker position={{lat : currentLocation?.coords?.latitude , lng : currentLocation?.coords?.longitude}} icon={"https://img.icons8.com/small/32/car.png"} /></>)}
        </GoogleMap>
    </Card>
  </div>)
}

export default DriverHomePage