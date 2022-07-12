import React, { useContext, useState} from 'react';
import ReactDOM from 'react-dom';
import { ResCtx } from '../../context/ResContext';

import { Button } from '@mui/material';

import App from './Chart';
import { digger } from '../../utils/resDistribute'

import './Diagrams.css'

export default function Diagrams(){

    const ctx = useContext(ResCtx);
    const {  apiRes, setApiRes } = ctx;

    const hydraulicReport = () =>{

        const data = digger(apiRes);

        const root = ReactDOM.createRoot(
            document.getElementById('view')
        );
        const element = 
            <>
                <App apiRes={data}></App>
            </>
        root.render(element);

    };

    return(

        <div className='mainDiagram'>
            <h1>Diagram</h1>
            <Button onClick={hydraulicReport}>Hydraulic monthly report
            </Button>
            <div id='view'></div>

        </div>
    )
};