// README (только для react)
// Данная функция форматирует строку в зависимотси от указанных правил

// можно подключить к редаксу но нужно будет заменить value в ренедере на редакс
// и запись в value (this.setState({value:e.target.value})) на запись в редакс

// Как подключать через state:
// state={ value: "", dirtyValue: "", clearValue: "",} 
// containerRef = {};
// dirtyValue = "";
//
// render:
// let value = this.state.value;
// let result = reactRefModifyStr([{reg:"^[0-9]+$",symbol:"@"}], this.containerRef, "@@-@@", value, false);
// this.dirtyValue = result.dirtyVal;


// specSymbols - массив типа: [{reg:"^[0-9]+$",symbol:"@"}, {reg:"^[a-z]+$",symbol:"&"}, {reg:".*",symbol:"!"}]
//      - model должна выглядеть так:
//      "@@@@" => "4219" , "@@ @@-@@" => "34 54-13" , "@@&&" => "32df" , "!!! !!!" => "e@3 *,!"
//      - symbol не должны повторятся и !Указанные символы невозможно будет ввести, поэтому можно использовать такие
//      जावास्क्रिप्टĦĔĽĻŎᾩ

// ref - присылаем рефку текущего инпута

// model - типа: "@@ @@-@@-@@"
//      должна состоять из символов specSymbols

// value - значение

// deafaultCompleteMode = 1
// 0 "" //автозаполнение после ввода первого символа "+3"
// 1 "+___(__)___-__-__"

// Необязательный аргумент
// maskSymbol - символ который будет заполнять пустые места, если "_" => +___(__)___-__-__

// Необязательный аргумент
// isInfinite - нужно прислать символ из specSymbols "!" - тогда значение будет неограничено после модели - указанного типа:
//      model="&&& &&&" => "dsa qwe3eD<>/ei ee3,.2mce ed097..."
//      если не прислать данный аргумент, то возвращаемое значение будет ограничено длинной модели


// если model - "+@@@(@@) @@@ @@ @@"
// return - данная функция возвращает объект {clearVal: "375294312334", dirtyVal: "+375(29)431-23-34"}
export function reactRefModifyStr (specSymbols, ref, model, value, deafaultCompleteMode, maskSymbol, isInfinite){
    let drtVal;
    let clVal;
    console.log('--model',model);

    drtVal = value;
    clVal = value;

	return {clearVal: clVal, dirtyVal: drtVal};
};