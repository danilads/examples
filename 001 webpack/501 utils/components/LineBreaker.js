import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './LineBreaker.scss';

class LineBreaker extends PureComponent {

  // note данная функция была созданна т.к. не все кейсы можно было закрыть чистым css (задав ширину контейнера)
  // 1 аргумент (text) "string" - строка которую нужно разбить переносом строки
  // 2 аргумент (lengthLimit) "number" - кол-во символов (лимит после которого будет добавлятся перенос строки)
  stringLineBreaker = (text, lengthLimit) => {

    if(typeof text !== 'string' || text.length === 0){
      return text;
    }
    // 01 - получаем массив слов
    let arrWords = text.split(' ');
  
    if(arrWords.length === 1){
      return text;
    }
    
    // 02 - добавляем перенос строки в зависимости от "lengthLimit"
    let preResult = [];
  
    let lastIndexPushed = -1; //последний запушеный элемент - нужен для компенсации пробелов
    for(let i=0;arrWords.length>i;i++){
    let cntLength=0; // длинна слов перед пушем
    let firstInd=lastIndexPushed+1;
    //от последнего запушеного до текущего
    for(let j=lastIndexPushed+1;i>=j;j++){
      cntLength=cntLength+arrWords[j].length+(j!==firstInd?1:0); //компенсация пробелов
      if(cntLength>lengthLimit){
        //если первый сразу превышает лимит
        if(j===lastIndexPushed+1){
          preResult.push(arrWords[j]);
          if(arrWords.length!==i+1){
            preResult.push('\n');
          }
          lastIndexPushed=j;
          break;
        }
        else{
          //пушим все элементы до того, который превышает лимит
          for(let k=lastIndexPushed+1;j>k;k++){
            preResult.push(arrWords[k]);
            lastIndexPushed=k;
          }
          preResult.push('\n');
  
        }
  
      }
  
      // Если дошли до конца и лимит не превышен. Либо одно слово с превышением лимита (должен отработать один раз!)
      if(i===j && arrWords.length===i+1){
        for(let k=lastIndexPushed+1;arrWords.length-1>=k;k++){
          preResult.push(arrWords[k]);
        }
        break;
      }
  
    }
    }
  
  
    // 03 - добавляем пробелы
    let result = [];
    let line = ""
    for(let i=0;preResult.length>i;i++){		
      if(preResult[i]==='\n'){
        result.push(<Fragment key={i}><div className={'line'}>{line}</div><br/></Fragment>)
        line=[];
        continue;
      }
      else if(preResult.length-1===i){
        line+=preResult[i];
        result.push(<Fragment key={i}><div className={'line'}>{line}</div><br/></Fragment>)
        line=[];
        continue;
      }
  
      line+=preResult[i];
  
      if(preResult[i]!=='\n' && preResult[i+1]!=='\n' && preResult.length-1!==i){
        line+=' ';
      }
  
      
    }
  
    return result;
  };

  render() {

  // тесты
  let text1 = 'some';
  let text2 = 'solongTextLongText';
  let text3 = 'solongTextLongTex1 solongTextLongText2 som3 text4';
  let text4 = 'solongTextLongText some text solongTextLongText';
  let text5 = 'solongTextLongText solongTextLongText some text';
  let text6 = 'some text solongTextLongText';
  let text7 = 's o m e solongTextLongText ш ш ш ш ш ш ш ш ш ш ш ш ш ш ш ш ш ш';
  let text8 = 'solongTextLongText some solongTextLongText';
  let text9 = 'solongTextLongText1 solongTextLongText2';
  let text10 = 'solongTextLongText some text some text solongTextLongText';
  let text11 = 'some text';
  let text12 = 'some text some';
  let text13 = '';


    return (
      <div className={"LineBreaker"}>
        <div className={"LineBreakerWrapper"}>{this.stringLineBreaker(text4,11)}</div>
      </div>
      
    );
  }
}

export default LineBreaker;
