import React, {PureComponent,createRef} from 'react';
import classNames from 'classnames';
import './RadioButtons.scss';
import PropTypes from 'prop-types';

class RadioButtons extends PureComponent {
  static propTypes = {
    // README
    // Данный компонент строит !Только одну радио кнопку

    // Модель в родителе подразумевает хранение в state:
    // 1 - массива всех возможных вариантов кнопок
    // 2 - выбранную кнопку, получаем значение из колбэк функции props.onChange. Посылаем его в props.selectedValue

    
    // Компоненту нужно (ОБЯЗАТЕЛЬНО!) передать:
    groupName: PropTypes.string.isRequired, // Уникальное имя которое объединяет в группу радио-кнопки.
    value: PropTypes.string.isRequired, // Значение из массива props.arrOfValues (какую именно кнопку рэндерим)
    selectedValue: PropTypes.string.isRequired, // Выбранное значение из массива props.arrOfValues. Если передать значение не содержащееся в массиве, то радио-кнопка не будет выбранна (Если нужно, чтобы по умолчания не выбрана ни одна кнопка)
    
    // Контроль за выбранной радио кнопкой осуществляется в родительском компоненте
    onChange: PropTypes.func.isRequired, // Возвращает выбранное значение props.value при выборе радио-кнопки.


    className: PropTypes.string, // Стиль.

    // (Не обязательное поле, т.к. можем настроить вид обычными стилями).
    // Внешний вид радио кнопки (функция которая возвращает jsx, ей в аргументы прелит выбранна или невыбранна данная радио-кнопка)
    buttonView: PropTypes.func
  };

  changeRadio=()=>{
    this.props.onChange(this.props.value);
  }
  render() {
    let {value,className,groupName,selectedValue} = this.props;
    return (
        <div className={classNames('RadioButtons',className)}>
          <label><input onChange={this.changeRadio} type="radio" name={groupName}/><div className={selectedValue===value?"ButtonSelected":"ButtonDeselected"}></div></label>

        </div>
    );
  }

}



export default RadioButtons;