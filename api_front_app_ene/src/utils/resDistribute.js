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

export const digger = (res) =>{

    console.log(res);

    let included = res.included[0].attributes;
            console.log(included);
        let content = included.content;
                console.log(content);
            let hydraulics = content[0].attributes.values;
                    console.log(hydraulics);
    
    let percentage =  percentageExtractor(hydraulics);                
    let days =  dayExtractor(hydraulics);  
    
        console.log(percentage);
        console.log(days);

    return {percentage, days};
}