import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from "primereact/inputtext";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import {Calendar} from "primereact/calendar";
import {InputNumber} from 'primereact/inputnumber';
import {GMap} from 'primereact/gmap';
import Image from 'react-bootstrap/Image'

export default function AddEventModal(props)  {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            scrollable = "true"
            centered >
            <Modal.Header style={{maxHeight:'10em'}}>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>REGISTER</Button>
                <Button onClick={props.onHide}>CANCEL</Button>
            </Modal.Footer>
        </Modal>
    );
}