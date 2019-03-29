import React, {PureComponent,createRef} from 'react';
import classNames from 'classnames';
import './RadioButtons.scss';
import PropTypes from 'prop-types';

class RadioButtons extends PureComponent {
  static propTypes = {
     // README
    // Данный компонент строит !Только одну радио кнопку

  
    // Модель подразумевает хранение в родителе (в state) выбранное значения (state.selectedValue)
    // В включенной кнопке - получаем значение из колбэк функции props.onChange


    name: PropTypes.string.isRequired, // Уникальное имя которое объединяет в группу радио-кнопки.
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]).isRequired, // Значение выбранной кнопки state.selectedValue
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]).isRequired, // Какое значение будет записываться при нажатии onChange
    

    onChange: PropTypes.func.isRequired, // Возвращает выбранное значение props.value при выборе радио-кнопки.


    className: PropTypes.string, // Стиль.
    label: PropTypes.string, // Лэйбел. (Если присылаем свое отображение props.customView label не отображается)

    // (Не обязательное поле, т.к. можем настроить вид обычными стилями).
    // Внешний вид радио кнопки (функция которая возвращает jsx, ей в аргументы прелит выбранна или невыбранна данная радио-кнопка)
    customView: PropTypes.func
  };

  changeRadio=()=>{
    //console.log('--it works?',this.props.value);
    this.props.onChange(this.props.value);
  }
  render() {
    let {value,className,name,selectedValue,label,customView} = this.props;
    let isChecked = (value === selectedValue);
    return (
        <div className={classNames(customView?'RadioButtons-custom':'RadioButtons',className)}>
          <label className={isChecked?"ButtonSelected":"ButtonDeselected"}>
            <input onChange={this.changeRadio} type="radio" name={name} checked={isChecked} value={selectedValue}/>
              {/* {customView?customView(isChecked):label} */}
              {customView ? React.createElement(customView, {
                ...this.props,
                isChecked
              }) : label}
            </label>
        </div>
    );
  }

}



export default RadioButtons;