let answerArr = [];

//init run
const startAwait=(url)=>{
    insertInResult(url,answerArr.length);
}

// делает запрос и встваляет в массив ответ
const insertInResult=async(url, index)=>{

    let answer = await getInfAwait(url);


    
    //если ответ массив
    if(Array.isArray(answer)){
        let arr = [];
        for(let i=0;answer.length>i;i++){
            arr.push(getInfAwait(answer[i]));
        }
        Promise.all(arr).then(res => {

            console.log('res',res);
            answerArr = insertToArr(answerArr,index,res);
            
            console.log('ИТЕРАЦИЯ ',answerArr);
            intermediator();
        });
        
    }
    //если ответ строка
    else{
        
        answerArr= insertToArr(answerArr,index,answer);
    }
    


}

let isRun = 0;
//данная функция смотрит есть ли в массиве файлы типа  ".txt"
intermediator=async()=>{
    if(isRun<3){
        for(let i=0;answerArr.length>i;i++){
            
            console.log('--',answerArr[i]);

            //если нужно делать запрос
            // if(answerArr[i].slice(-4,answerArr[i].length) === '.txt'){
            //     console.log(answerArr[i]);
            //     insertInResult(answerArr[i],i);
            // }
        }
    }
    isRun+=1;
    
}


const getInfAwait = async (url) => {
    try{
        let answer = await fetch("https://fe.it-academy.by/Examples/words_tree/"+url, {
            method: 'GET',
        });
        let response = await answer.text();

        if(response.length>3 && response[0]==="[" && response[response.length-1] === "]"){
            return JSON.parse(response);
        }
        else if(typeof response === 'string'){
            return response;
        }
    }
    catch(err){
        console.error('---error request',err);
    }
};

//вставляет в массим другой массив
const insertToArr = (arr,index,insert) =>{     
    if(Array.isArray(insert)){
        let start = arr.slice(0,index);
        let end = arr.slice(index+1,arr.length);
        return [...start,...insert,...end];
    }
    else{
        let result = [...arr];
        result[index]=insert;
        return result;
    }
}




