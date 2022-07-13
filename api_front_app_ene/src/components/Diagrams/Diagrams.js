import React, { useContext, useState} from 'react';
import ReactDOM from 'react-dom';
import { ResCtx } from '../../context/ResContext';

import { Button, Grid } from '@mui/material';

import App from './Chart';
import { hydraulicDigger, windDigger, solarDigger  } from '../../utils/resDistribute'

import './Diagrams.css'

export default function Diagrams(){

    const ctx = useContext(ResCtx);
    const {  apiRes, setApiRes } = ctx;

    const hydraulicReport = () =>{

        const data = hydraulicDigger(apiRes);

        const root = ReactDOM.createRoot(
            document.getElementById('view')
        );
        const element = 
            <>
                <App apiRes={data} paco={paco}></App>
            </>
        root.render(element);

    };
    
    const windReport = () =>{

        const data = windDigger(apiRes);

        const root = ReactDOM.createRoot(
            document.getElementById('view')
        );
        const element = 
            <>
                <App apiRes={data} paco={paco}></App>
            </>
        root.render(element);

    };

    const SolarReport = () =>{

        const data = solarDigger(apiRes);

        const root = ReactDOM.createRoot(
            document.getElementById('view')
        );
        const element = 
            <>
                <App apiRes={data} paco={paco}></App>
            </>
        root.render(element);

    };

    return(

        <div className='mainDiagram'>

            <h1 className='diagramTitle'>Diagrams</h1>

            <Grid container spacing={2} className='buttonGrid'>
                <Grid item xs={12} lg={2} >
                    <Button className='buttons' onClick={hydraulicReport}>Hydraulic report
                    </Button>
                </Grid>
                <Grid item xs={12} lg={2} >
                    <Button className='buttons' onClick={SolarReport}>Solar report
                    </Button>
                </Grid>
                <Grid item xs={12} lg={2} >
                    <Button className='buttons' onClick={windReport}>Wind report
                    </Button>
                </Grid>
            </Grid>
            <div id='view'></div>

        </div>
    )
};