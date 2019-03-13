import React, {PureComponent,createRef} from 'react';
import classNames from 'classnames';
import './RadioButtons.scss';
import PropTypes from 'prop-types';

class RadioButtons extends PureComponent {
  static propTypes = {
    className: PropTypes.string, // Стиль.
    name: PropTypes.string.isRequired, // Уникальное имя которое объединяет в группу кнопки (Обязательное заполнение).
    
    value: PropTypes.string.isRequired, // Выбранное значение из массива props.arrOfValues. Если передать значение не содержащееся в массиве, то ни одна кнопка не будет выбранна(не-типичное поведение для радио).
    arrOfValues: PropTypes.array.isRequired, // Передаем массив значений кнопок.
    onChange: PropTypes.func, // Возвращает выбранное значение из массива props.arrOfValues.

   
    // Внешний вид радио кнопки (функция которая возвращает jsx, ей в аргументы прелит выбранна или невыбранна данная кнопка)
    // (Не обязательное поле, т.к. можем настроить вид обычными стилями).
    buttonView: PropTypes.func
  };
  static defaultProps = {
    className: "",
    name: "someGroup",
    value: "1",
    arrOfValues: ["1","2","3"],
  };

  state = {
    isOpened: false,
  };

  render() {
    let {arrOfValues,className,name} = this.props;

    return (
        <div className={classNames('RadioButtons',className)}>
            {arrOfValues.map(i=>{
              return <label key={i}><input type="radio" name={name}/><span className="button">{i}</span></label>
                     
            })}
        </div>
    );
  }

}



export default RadioButtons;