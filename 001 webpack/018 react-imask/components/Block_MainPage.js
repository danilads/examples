import React,{Fragment} from 'react';
import {IMaskInput} from 'react-imask';
import './Block_MainPage.scss'

class Block_MainPage extends React.PureComponent {
	state={
		pos:1
	} 
	validate=(e)=>{
		console.log(e);
	};
  	render() {
		return (
			<div className={"Block_MainPage"}>

				<span>Возрастающая прогрессия</span>
				<IMaskInput
					maxLength="12"
					mask={(value)=>{
						return /^\d*$/.test(value) && value.split('').every(function(ch, i) {
						  let prevCh = value[i-1];
						  return !prevCh || prevCh < ch;
						});
					  }}
				/>

				<span>Iban</span>
				<IMaskInput
					 maxLength="12"
					 mask='****{ }****{ }****{ }****{ }****{ }****{ }****{ }****{ }**'
					 prepare={(str)=>str.toUpperCase()}
				/>

				<span>disabled</span>
				<IMaskInput
					 maxLength="12"
					 mask='****{ }****{ }****{ }****{ }****{ }****{ }****{ }****{ }**'
					 disabled
				/>

				<span>1-6 number</span>
				<IMaskInput
					 mask={/^[1-6]\d{0,5}$/}
				/>

				<span>numbers ONLY</span>
				<IMaskInput
					 mask={/^\d+$/}
				/>

				<span>ONLY UPPER ENG (запрещено вводить маленькие)</span>
				<IMaskInput
					 mask={/^[A-Z0-9\s]*$/}
				/>

				<span>Amount</span>
				<IMaskInput
					 //mask: /^[A-Z0-9\s]*$/,
					 mask={Number}  // enable number mask

					 // other options are optional with defaults below
					 scale={2}  // digits after point, 0 for integers
					 signed={false}  // disallow negative (запретить отрицательные)
					 thousandsSeparator={' '}  // any single char
					 padFractionalZeros={true}  // if true, then pads zeros at end to the length of scale
					 normalizeZeros={true}  // appends or removes zeros at ends
					 radix={'.'}  // fractional delimiter
		   
					 // additional number interval options (e.g.)
					 min={-10000}
					 max={10000}
				/>
				
				<span>Amount RIGHT</span>
				<IMaskInput
					 style={{textAlign:'right'}}
					 //mask: /^[A-Z0-9\s]*$/,
					 mask={Number}  // enable number mask

					 // other options are optional with defaults below
					 scale={2}  // digits after point, 0 for integers
					 signed={false}  // disallow negative (запретить отрицательные)
					 thousandsSeparator={' '}  // any single char
					 padFractionalZeros={true}  // if true, then pads zeros at end to the length of scale
					 normalizeZeros={true}  // appends or removes zeros at ends
					 radix={'.'}  // fractional delimiter
		   
					 // additional number interval options (e.g.)
					 min={-10000}
					 max={10000}
				/>

				<span>ONLY UPPER ENG</span>
				<IMaskInput
					mask={/^[а-яё]+|[a-z]*$/}
					prepare={(str)=>{
						return str.toUpperCase();
					}}
				/>
				
				<span>Возрастающая прогрессия</span>
				<IMaskInput
					maxLength={12} //с учетом пробелов
          mask={((value)=>{
              return /^\d*$/.test(value) && value.split('').every(function(ch, i) {
                let prevCh = value[i-1];
                return !prevCh || prevCh < ch;
              });
            })}
				/>

			<span>iban</span>
				<IMaskInput
					unmask={true} //значение вернеться без маски
          maxLength={12} //с учетом пробелов
          mask={'**** **** **** **** **** **** **** **** **'}
          //если нужно чтобы символ учитывался (с  unmask: true) его нужно обернуть в  {}. Пример
          prepare={(str)=>str.toUpperCase()}
				/>
				
			<span>1-6 number </span>
				<IMaskInput
          mask={/^[1-6]\d{0,5}$/}
				/>

 
			<span>phone </span>
				<IMaskInput
					unmask={true} //значение вернеться без маски
					mask={'+{7}(000)000-00-00'}
				/>


			</div>
		);

  	}

}



export default Block_MainPage;
