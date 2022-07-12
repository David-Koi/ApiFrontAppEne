import moment from 'moment';

export const stringTime = (props) =>{

    let aux = moment(props).format();
        console.log(aux)
    let index = aux.indexOf('+');
        console.log(index);
    let res = aux.slice(0, index - 3);
        console.log(res);

    return res;
}

export const consultString = (props) =>{

    const {lang, category, widget, startTime, endTime } = props;

        console.log(lang)
        console.log(category)
        console.log(widget)
        console.log(startTime)
        console.log(endTime)

    let consult = `https://apidatos.ree.es/${lang}/datos/${category}/${widget}?start_date=${startTime}&end_date=${endTime}&time_trunc=day`;

        console.log(consult);

    return consult;

};
