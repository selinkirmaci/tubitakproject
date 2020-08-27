import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import {GoogleMap,withScriptjs,withGoogleMap} from "react-google-maps";
import Map from "./Map";

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function EventDetailModal(props)  {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            scrollable = "true"
            centered >
            <Modal.Header style={{maxHeight:'10em'}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3>{props.title}</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Start & End Dates</h5>
                {props.start} - {props.end}
                <h5 style={{marginTop:"2em"}}>Left Capacity</h5>
                {props.leftcap}
                <br/>
                <h5 style={{marginTop:"2em"}}>Location</h5>
                {props.location}
                <div style = {{width: '50m',height: '50vh'}}>
                    <WrappedMap mapElement = {<div style={{height: '100%'} }/>}
                                containerElement = {<div style={{height: '100%'} }/>}
                                loadingElement = {<div style={{height:'100%'}}/>}
                                googleMapURL = {'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDt8my9scVVMIN2nuaYyEzPT5Wy4Ub8nK4'}/>

                </div>            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>REGISTER</Button>
                <Button onClick={props.onHide}>CANCEL</Button>
            </Modal.Footer>
        </Modal>
    );
}