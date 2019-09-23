import {Resizable} from 'react-resizable';
import React from 'react';


//Resize
export const ResizeableTitle = props => {
  const {onResize, width, ...restProps} = props;
  if (!width) {
    return <th {...restProps} />;
  }
  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};
//Resize
export const ResizeComponent = {
  header: {
    cell: ResizeableTitle,
  },
};
//Resize
//запоминает предыдущее состояние
function remeberPrev(func) {
  var prev = {};
  //Замыкание
  return function () {
    let result;
    if (prev[arguments[2]] === void 0) {
      result = arguments[0] - arguments[1];
    } else {
      result = arguments[0] - prev[arguments[2]];
    }
    prev[arguments[2]] = arguments[0];
    arguments[0] = result;

    return func.apply(this, arguments);
  }
}

//Resize
//считает разницу
const countDifference = remeberPrev(e => e);

//Resize
//лимит
export function limitResize(index, size, columns, ResizeMin, ResizeMax) {
  const nextColumns = [...columns];

  //Данная функция фиксит баг с ресайзом
  let updatedSize = nextColumns[index].width + countDifference(size.width, nextColumns[index].width, columns[index].dataIndex);

  //Лимит ресайза
  if (updatedSize < ResizeMin) {
    updatedSize = ResizeMin;
  }
  if (updatedSize > ResizeMax) {
    updatedSize = ResizeMax;
  }

  nextColumns[index] = {
    ...nextColumns[index],
    width: updatedSize,
  };
  return {columns: nextColumns}
}

//Drag'n'Drop
//формируем новый массив колонок
export function dragFormArray(columns, fromIndex, toIndex, checkBoxColumn) {
//учитываем смещение
  let offset = 0;
  //если есть колонка с чекбоксом(ее нельзя двигать)
  if (checkBoxColumn) {
    offset += 1;
  }
  let fIndex = fromIndex - offset;
  let tIndex = toIndex - offset;

  //блокируем перетаскивание в колонки (checkbox)
  if (toIndex < offset) {
    return;
  }

  const columnsCopy = columns.slice();

  const item = columnsCopy.splice(fIndex, 1)[0];
  columnsCopy.splice(tIndex, 0, item);
  return columnsCopy;
}

//Формируем объект пагинации
export function formPaginationObj(pagDisable, pagSize, pagCurrent, pagTotal) {
  if (pagDisable === true) {
    return false;
  } else {
    return {
      current: pagCurrent,
      pageSize: pagSize,
      size: 'small',
      showQuickJumper: true,
      position: 'top',
      total: pagTotal
    }
  }
}


//добавляем в columns filterData
export function modifyColumnsFilter(columnsArr, dataIndex, value) {
  let resultArr = [...columnsArr];

  for (let i = 0; resultArr.length > i; i++) {
    if (dataIndex === resultArr[i].dataIndex) {
      resultArr[i].filterData = value;
      break;
    }
  }
  return resultArr;
}

//toggle сортировки или конкретное значение (state)
//если не прислать третий аргумент то будет toggle ('ascend'/'descend'/undefined)
export function setSortToItem(columnsArr, dataIndex, state) {
  let resultArr = [...columnsArr];
  let order = "";

  for (let i = 0; resultArr.length > i; i++) {
    if (dataIndex === resultArr[i].dataIndex) {
      //toggle
      if (state === undefined) {
        if (resultArr[i].sortData === 'ascend') {
          resultArr[i].sortData = 'descend';
          order = 'descend';
        } else if (resultArr[i].sortData === 'descend') {
          resultArr[i].sortData = null;
          order = null;
        } else if (resultArr[i].sortData === null) {
          resultArr[i].sortData = 'ascend';
          order = 'ascend';
        } else {
          resultArr[i].sortData = 'ascend';
          order = 'ascend';
        }
      } else {
        resultArr[i].sortData = state;
        order = state;
      }

    } else {
      resultArr[i].sortData = null;
    }
  }
  return {arr: resultArr, ord: order};
}
