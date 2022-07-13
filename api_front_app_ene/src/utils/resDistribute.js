const dayExtractor = (serie) =>{

    let days = [];

        for(let i = 0; i < serie.length; i++){

            days.push(i + 1);
        }

    return days;
}

const percentageExtractor = (serie) =>{

    let percentages = [];

        for(let i = 0; i < serie.length; i++){

            percentages.push(serie[i].percentage);
        }

    return percentages;
}

const reduce = (serie) =>{

    let res = [];

    for(let i = 0;i < serie.length; i++){

        res.push(serie[i].toFixed(2));

    }

    return res;
};

export const hydraulicDigger = (res) =>{

    console.log(res);

    let included = res.included[0].attributes;
            console.log(included);
        let content = included.content;
                console.log(content);
            let hydraulics = content[0].attributes.values;
                    console.log(hydraulics);
    
    let percentage =  percentageExtractor(hydraulics);
    percentage =  reduce(percentage);               
    let days =  dayExtractor(hydraulics);  
    
        console.log(percentage);
        console.log(days);

    return {percentage, days};
}

export const windDigger = (res) =>{

    console.log(res);

    let included = res.included[0].attributes;
            console.log(included);
        let content = included.content;
                console.log(content);
            let hydraulics = content[1].attributes.values;
                    console.log(hydraulics);
    
    let percentage =  percentageExtractor(hydraulics);
    percentage =  reduce(percentage);               
    let days =  dayExtractor(hydraulics);  
    
        console.log(percentage);
        console.log(days);

    return {percentage, days};
}

export const solarDigger = (res) =>{

    console.log(res);

    let included = res.included[0].attributes;
            console.log(included);
        let content = included.content;
                console.log(content);
            let hydraulics = content[2].attributes.values;
                    console.log(hydraulics);
    
    let percentage =  percentageExtractor(hydraulics);
    percentage =  reduce(percentage);               
    let days =  dayExtractor(hydraulics);  
    
        console.log(percentage);
        console.log(days);

    return {percentage, days};
}