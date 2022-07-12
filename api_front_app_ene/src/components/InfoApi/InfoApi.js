import React, { useState, useContext} from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate} from "react-router-dom";

import { ResCtx } from '../../context/ResContext';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button, Link } from '@mui/material';

import './InfoApi.css';

import StartTime from '../DatePicker/StartTime';
import EndTime from '../DatePicker/EndTime';

import {categories, balance, demanda, generacion, intercambios, transporte, 
mercados} from '../../utils/seriesMenu';
import { stringTime, consultString } from '../../utils/consult';


export default function TakeInfo(){

    const [lang, setLang] = useState();
    const [category, setCategory] = useState();
    const [widget, setWidget] = useState();

    const ctx = useContext(ResCtx);
    const {apiRes, setApiRes} = ctx;

    console.log(apiRes)

    const [startTime, setStartTime] = React.useState(new Date());
    const [endTime, setEndTime] = React.useState(new Date());

    const [form, setForm] = useState({

        lang : '',
        category : '',
        widget : '',
        startTime : '',
        endTime : ''
    });
    
    const handleChange = (e) =>{

        const {name, value} = e.target;
        setForm({...form, [name] : value});
        
    }

    const apiCall = (props) =>{

            // GET /{lang}/datos/{category}/{widget}?[query]

            // ejemplo https://apidatos.ree.es/es/datos/generacion/estructura-generacion?start_date=2019-01-01T00:00&end_date=2019-01-31T23:59&time_trunc=day

        axios
            // .get('https://apidatos.ree.es/es/datos/generacion/estructura-generacion?start_date=2019-01-01T00:00&end_date=2019-01-31T23:59&time_trunc=day')
            .get(props)

            .then((res)=>{

                setApiRes(res.data);
                console.log(apiRes);
            })

            .catch((error)=>{

                console.log(error);
            })
    }

    const consult = () =>{

        let time1 = stringTime(startTime);
            console.log(time1);
        let time2 = stringTime(endTime);
            console.log(time2);

        setForm ({...form, 
            startTime : time1,
            endTime : time2
        });

       let consult = consultString(form);

       apiCall(consult);
            
    };

    return(

        <div className='mainDiv'>
            <h1>Consult Formulary</h1>

            <div className='formulary'>
                <FormControl id={'F1'} className='select'>
                    <InputLabel id="demo-simple-select-label">Lang</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={lang}
                            name='lang'
                            onChange={handleChange}
                        >
                            <MenuItem value={'es'}>Es</MenuItem>
                            <MenuItem value={'en'}>En</MenuItem>
                        </Select>
                </FormControl>

        {/* FORM CATEGORY */}

                <FormControl id={'F2'} className='select'>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            name="category"
                            onChange={handleChange}
                        >
                            { categories.map((element, index) =>{

                                return(
                                    <MenuItem key={index} value={element.value}>
                                    {element.text}</MenuItem>
                                )
                            })}

                        </Select>
                </FormControl>

        {/* FORM WIDGETS */}

                <FormControl id={'F3'} className='select'>
                    <InputLabel id="demo-simple-select-label">Widget</InputLabel>
                    <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={widget}
                            name="widget"
                            onChange={handleChange}
                        >
                       
                        { form.category === 'balance' && (

                            balance.map((element, index) =>{

                                return(
                                    <MenuItem key={index} value={element.value}>
                                        {element.text}</MenuItem>
                                )
                            })
                        )}

                        { form.category === 'demanda' && (

                            demanda.map((element, index) =>{

                                return(
                                    <MenuItem key={index} value={element.value}>
                                        {element.text}</MenuItem>
                                )
                            })
                        )}

                        { form.category === 'generacion' && (

                            generacion.map((element, index) =>{

                                return(
                                    <MenuItem key={index} value={element.value}>
                                        {element.text}</MenuItem>
                                )
                            })
                        )}

                        { form.category === 'intercambios' && (

                            intercambios.map((element, index) =>{

                                return(
                                    <MenuItem key={index} value={element.value}>
                                        {element.text}</MenuItem>  
                                )
                            })
                        )}

                        { form.category === 'transporte' && (

                            transporte.map((element, index) =>{

                                return(
                                    <MenuItem key={index} value={element.value}>
                                        {element.text}</MenuItem>
                                )
                            })
                        )}

                        { form.category === 'mercados' && (

                            mercados.map((element, index) =>{

                                return(
                                    <MenuItem key={index} value={element.value}>
                                        {element.text}</MenuItem> 
                                )
                            })
                        )}
                    </Select>
                </FormControl>

                <StartTime startTime={startTime} setStartTime={setStartTime}>
                </StartTime>
                <EndTime endTime={endTime} setEndTime={setEndTime}></EndTime>
            </div>
                <Button className='consult' onClick={consult}>Consult</Button>

        </div>

    );
};