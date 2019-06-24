// README (только для react)
// Данная функция форматирует строку в зависимотси от указанных правил

// можно подключить к редаксу но нужно будет заменить value в ренедере на редакс
// и запись в value (this.setState({value:e.target.value})) на запись в редакс

// Как подключать через state:
// state={ value: ""} 
// containerRef = {};
// clearValue = "";
//
// render:
// let value = this.state.value;
// let result = reactRefModifyStr([{reg:"^[0-9]+$",symbol:"@"}], this.containerRef, "@@-@@", value, false);
// this.clearValue = result.clearVal;
//
// <input type="text" value={result.dirtyVal} onChange={(e)=>this.setState({value:e.target.value})} ref={(el)=>this.containerRef=el}/>



// specSymbols - массив типа: [{reg:"^[0-9]+$",symbol:"@"}, {reg:"^[a-z]+$",symbol:"&"}, {reg:".*",symbol:"!"}]
//      - model должна выглядеть так:
//      "@@@@" => "4219" , "@@ @@-@@" => "34 54-13" , "@@&&" => "32df" , "!!! !!!" => "e@3 *,!"
//      - symbol не должны повторятся и !Указанные символы невозможно будет ввести, поэтому можно использовать такие
//      जावास्क्रिप्टĦĻŎᾩĽĔ

// ref - присылаем рефку текущего инпута

// model - типа: "@@ @@-@@-@@"
//      должна состоять из символов specSymbols

// value - значение зависит от isDirty

// deafaultCompleteMode = 1
//      0 автозаполнение после ввода первого символа "" => "+3"
//      1 автозаполнение после ввода первого символа(но все символы до первого изменяемого - сразу видны) "+" => "+3"
//      2 "+___(__)___-__-__" //сразу все заплняется(пустые места - maskSymbol)

// isDirty - если в value приходят:
//      грязное значение (+375(44)764-43-11) то - true
//      чистое значение (375447644311) то - false

// Необязательный аргумент
// (если не прислать будет пробел - " ")
// maskSymbol - символ который будет заполнять пустые места, если "_" => +___(__)___-__-__

// Необязательный аргумент
// isInfinite - нужно прислать символ из specSymbols "!" - тогда значение будет неограничено после модели - указанного типа:
//      model="&&& &&&" => "dsa qwe3eD<>/ei ee3,.2mce ed097..."
//      если не прислать данный аргумент, то возвращаемое значение будет ограничено длинной модели


// если model - "+@@@(@@) @@@ @@ @@"
// return - данная функция возвращает объект {clearVal: "375294312334", dirtyVal: "+375(29)431-23-34"}
export function reactRefModifyStr (specSymbols, ref, model, value, deafaultCompleteMode, isDirty, maskSymbol, isInfinite){
    // проверяем валидность данных (потом доделать) regex проверяем так(let reg = new RegExp('^[a-z]+$')) заворачиваем в try catch - не создаться вылетит ошибка
    

    // работа с движком
    // 01 определяем модель
    // 02 определяем разрешенные символы
    // this.containerRef.focus(); 

    console.log('--в каком месте стоит курсор после изменения', ref.selectionStart);


    let innerValidValue = "";


    //Если приходят невалидные данные приводим их к форме
    let cnt = 0; //счетчик перебора value
    for(let i=0;i<model.length;i++){

    }
    

    
    if(isDirty){
        if(deafaultCompleteMode===0){
            
        }
    }
    else{

    }
    
    
    let drtVal;
    let clVal;
    //console.log('--model',model);

    drtVal = value;
    clVal = value;

	return {clearVal: clVal, dirtyVal: drtVal};
};