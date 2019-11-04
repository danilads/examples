let answerArr = []; 

// делаем первый запуск
const startAwait=async(url)=>{

    let answer = await getInfAwait(url);


    
    //если ответ json
    if(answer.length>3 && answer[0]==="[" && answer[answer.length-1] === "]"){
        answerArr.push(JSON.parse(answer));
    }
    //если ответ строка
    else if(typeof answer === 'string'){
        answerArr.push(answer);
    }
    
    console.log('--answerArr',answerArr);

    intermediator();
}

//данная функция смотрит есть ли массивы в answerArr, если есть то перебирает их
intermediator=async()=>{

    for(let i=0;answerArr.length>i;i++){
        
        if(Array.isArray(answerArr[i])){
            let results = answerArr[i].map(async(it)=>{
                let answ = await startAwait(it);
                return answ;
            })
            console.log('--results',results);
        }
    }
}

const getInfAwait = async (url) => {
    try{
        let answer = await fetch("https://fe.it-academy.by/Examples/words_tree/"+url, {
            method: 'GET',
        });
        let response = await answer.text();

        return response;
    }
    catch(err){
        console.error('---error request',err);
    }
};





