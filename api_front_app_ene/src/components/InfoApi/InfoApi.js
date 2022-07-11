import React, {useEffect, useState, handleChange} from 'react';
import axios from 'axios';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import './InfoApi.css';

export default function TakeInfo(){

    const [value, setValue] = useState(null);

    const [form, setForm] = useState({
        category:'',
        widget:'',
        startTime:'',
        endTime:'',
    });

    const handleChange = (e) =>{

        const {name, value} = e.target;
        setForm({...form, [name]: value});

    }

    const apiCall = () =>{

            // GET /{lang}/datos/{category}/{widget}?[query]

            // ejemplo https://apidatos.ree.es/es/datos/generacion/estructura-generacion?start_date=2019-01-01T00:00&end_date=2019-01-31T23:59&time_trunc=day

        axios
            .get('https://apidatos.ree.es/es/datos/generacion/estructura-generacion?start_date=2019-01-01T00:00&end_date=2019-01-31T23:59&time_trunc=day')

            .then((res)=>{

                console.log(res.data);

            })

            .catch((error)=>{

                console.log(error);

            })
    }

    return(

        <div className='mainDiv'>
            <h1>InfoApi</h1>
            <button onClick={apiCall}>Test</button>

            <div className='formulary'>
                <FormControl className='select'>
                    <InputLabel id="demo-simple-select-label">Lang</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            name="lang"
                            onChange={handleChange}
                        >
                            <MenuItem value={'es'}>Es</MenuItem>
                            <MenuItem value={'en'}>En</MenuItem>
                        </Select>
                </FormControl>

        {/* FORM CATEGORY */}

                <FormControl className='select'>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            name="category"
                            onChange={handleChange}
                        >
                            <MenuItem value={'balance'}>Balance</MenuItem>
                            <MenuItem value={'demanda'}>Demanda</MenuItem>
                            <MenuItem value={'generacion'}>Generacion</MenuItem>
                            <MenuItem value={'intercambios'}>Intercambios</MenuItem>
                            <MenuItem value={'transporte'}>Transporte</MenuItem>
                            <MenuItem value={'mercados'}>Mercados</MenuItem>
                        </Select>
                </FormControl>

        {/* FORM WIDGETS */}

                <FormControl className='select'>
                    <InputLabel id="demo-simple-select-label">Widget</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            name="Widget"
                            onChange={handleChange}
                        >
                            
                        {/* TERNARIA BALANCE*/}

                            <MenuItem value={'balance-electrico'}>Balance Electrico</MenuItem>

                        {/* TERNARIA DEMANDA*/}

                            <MenuItem value={'evolucion'}>Evolucion</MenuItem>
                            <MenuItem value={'variacion-componentes'}>Variacion Componentes</MenuItem>
                            <MenuItem value={'variacion-componentes-movil'}>Variacion Componentes Movil</MenuItem>
                            <MenuItem value={'ire-general'}>Ire General</MenuItem>
                            <MenuItem value={'ire-general-anual'}>Ire General Anual</MenuItem>
                            <MenuItem value={'ire-general-movil'}>Ire General Movil</MenuItem>
                            <MenuItem value={'ire-industria'}>Ire Industria</MenuItem>
                            <MenuItem value={'ire-industria-anual'}>ire Industria Anual</MenuItem>
                            <MenuItem value={'ire-industria-movil'}>Ire Industria Movil</MenuItem>
                            <MenuItem value={'ire-servicios'}>Ire Servicios</MenuItem>
                            <MenuItem value={'ire-servicios-anual'}>Ire Servicios Anual</MenuItem>
                            <MenuItem value={'ire-servicios-movil'}>Ire Servicios Movil</MenuItem>
                            <MenuItem value={'ire-otras'}>Ire Otras</MenuItem>
                            <MenuItem value={'ire-otras-anual'}>Ire Otras Anual</MenuItem>
                            <MenuItem value={'ire-otras-movil'}>Ire Otras Movil</MenuItem>
                            <MenuItem value={'demanda-maxima-diaria'}>Demanda Maxima Diaria</MenuItem>
                            <MenuItem value={'demanda-maxima-horaria'}>Demanda Maxima Horaria</MenuItem>
                            <MenuItem value={'perdidas-transporte'}>Perdidas Transporte</MenuItem>
                            <MenuItem value={'potencia-maxima-instantanea'}>Potencia Maxima Instantanea</MenuItem>
                            <MenuItem value={'variacion-demanda'}>Variacion Demanda</MenuItem>
                            <MenuItem value={'potencia-maxima-instantanea-variacion'}>Potencia Maxima Instantanea Variacion</MenuItem>
                            <MenuItem value={'potencia-maxima-instantanea-variacion-historico'}>Potencia Maxima Instantanea Variacion Historico</MenuItem>
                            <MenuItem value={'variacion-componentes-anual'}>Variacion Componentes Anual</MenuItem>

                        {/* TERNARIA GENERACION*/}

                            <MenuItem value={'estructura-generacion'}>Estructura- Gneracion</MenuItem>
                            <MenuItem value={'evolucion-renovable-no-renovable'}>Evolucion Renovable-No Renovable</MenuItem>
                            <MenuItem value={'estructura-renovables'}>Estructura Renovables</MenuItem>
                            <MenuItem value={'estructura-generacion-emisiones-asociadas'}>Estructura Generacion Emisiones Asociadas</MenuItem>
                            <MenuItem value={'eevolucion-estructura-generacion-emisiones-asociadas'}>Evolucion Estructura Generacion Emisiones Asociadas</MenuItem>
                            <MenuItem value={'no-renovables-detalle-emisiones-CO2'}>No Renovables Detalle Emisiones CO2</MenuItem>
                            <MenuItem value={'maxima-renovable'}>Maxima Renovable</MenuItem>
                            <MenuItem value={'potencia-instalada'}>Potencia Instalada</MenuItem>
                            <MenuItem value={'maxima-renovable-historico'}>Maxima Renovable Historico</MenuItem>
                            <MenuItem value={'maxima-sin-emisiones-historico'}>Maxima sin Emisiones Historico</MenuItem>

                        {/* TERNARIA Intercambios */}

                            <MenuItem value={'francia-frontera'}>Francia frontera</MenuItem>
                            <MenuItem value={'portugal-frontera'}>Portugal frontera</MenuItem>
                            <MenuItem value={'marruecos-frontera'}>Marruecos frontera</MenuItem>
                            <MenuItem value={'andorra-frontera'}>Andorra frontera</MenuItem>
                            <MenuItem value={'lineas-francia'}>Líneas Francia</MenuItem>
                            <MenuItem value={'lineas-portugal'}>Líneas Portugal</MenuItem>
                            <MenuItem value={'lineas-marruecos'}>Líneas Marruecos</MenuItem>
                            <MenuItem value={'lineas-andorra'}>Líneas Andorra</MenuItem>
                            <MenuItem value={'francia-frontera-programado'}>Francia frontera programado</MenuItem>
                            <MenuItem value={'portugal-frontera-programado'}>Portugal frontera programado</MenuItem>
                            <MenuItem value={'marruecos-frontera-programado'}>Marruecos frontera programado</MenuItem>
                            <MenuItem value={'andorra-frontera-programado'}>Andorra frontera programado</MenuItem>
                            <MenuItem value={'enlace-baleares'}>Enlace Baleares</MenuItem>
                            <MenuItem value={'frontera-fisicos'}>Frontera Físicos</MenuItem>
                            <MenuItem value={'todas-fronteras-fisicos'}>Todas fronteras físicos</MenuItem>
                            <MenuItem value={'frontera-programados'}>Frontera programados</MenuItem>
                            <MenuItem value={'todas-fronteras-programados'}>Todas fronteras-programados</MenuItem>

                        {/* TERNARIA Transporte */}

                            <MenuItem value={'energia-no-suministrada-ens'}>Energía no suministrada ens</MenuItem>
                            <MenuItem value={'tindice-indisponibilidad'}>Indice indisponibilida</MenuItem>
                            <MenuItem value={'tiempo-interrupcion-medio-tim'}>Tiempo interrupcion medio tim</MenuItem>
                            <MenuItem value={'kilometros-lineas'}>Kilometros líneas</MenuItem>
                            <MenuItem value={'indice-disponibilidad'}>Indice disponibilidad</MenuItem>
                            <MenuItem value={'numero-cortes'}>Número de cortes</MenuItem>
                            <MenuItem value={'ens-tim'}>Ens tim</MenuItem>
                            <MenuItem value={'indice-disponibilidad-total'}>Indice disponibilidad total</MenuItem>

                        {/* TERNARIA mercados */}

                            <MenuItem value={'componentes-precio-energia-cierre-desglose'}>Componentes precio energía cierre desglose</MenuItem>
                            <MenuItem value={'componentes-precio'}>Componentes precio</MenuItem>
                            <MenuItem value={'energia-gestionada-servicios-ajuste'}>Energía gestionada servicios ajuste</MenuItem>
                            <MenuItem value={'energia-restricciones'}>Energía restricciones</MenuItem>
                            <MenuItem value={'precios-restricciones'}>Precios restricciones</MenuItem>
                            <MenuItem value={'reserva-potencia-adicional'}>Reserva potencia adicional</MenuItem>
                            <MenuItem value={'banda-regulacion-secundaria'}>Banda regulacion secundaria</MenuItem>
                            <MenuItem value={'energia-precios-regulacion-secundaria'}>Energía precios regulacion secundaria</MenuItem>
                            <MenuItem value={'energia-precios-regulacion-terciaria'}>Energía precios regulacion terciaria</MenuItem>
                            <MenuItem value={'energia-precios-gestion-desvios'}>Energía precios gestion desvios</MenuItem>
                            <MenuItem value={'coste-servicios-ajuste'}>Coste servicios ajuste</MenuItem>
                            <MenuItem value={'volumen-energia-servicios-ajuste-variacion'}>Volumen energia servicios ajuste Variacion</MenuItem>
                            <MenuItem value={'precios-mercados-tiempo-real'}>Precios mercados tiempo real</MenuItem>
                            <MenuItem value={'energia-precios-ponderados-gestion-desvios-before'}>Energia precios ponderados gestion desvios before</MenuItem>
                            <MenuItem value={'energia-precios-ponderados-gestion-desvios'}>Energía precios ponderados gestion desvíos</MenuItem>
                            <MenuItem value={'energia-precios-ponderados-gestion-desvios-after'}>Energía precios ponderados gestión desvios after</MenuItem>
                        </Select>
                </FormControl>

        {/* FORM START TIME */}

                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        name="startTime"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                            }}
                    />
                </LocalizationProvider>

        {/* FORM END TIME */}

                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        name="endTime"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                    />
                </LocalizationProvider>

            </div>
            
        </div>

    );
};