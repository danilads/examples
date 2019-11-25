import React from 'react';
import './BlockAboutContent.scss';

class BlockAboutContent extends React.PureComponent {
  state = {
    text: [
      {
        title: 'Динамичность',
        arr: ['реализован фильтр позиций', 'реализованы модальные окна']
      },
      {
        title: 'Производительность',
        arr: ['в  фильтре нету перерендеров', 'анимация работает без перерендеров']
      },
      {
        title: 'Навигация',
        arr: ['подключен react-router-dom (но на github pages запрещен переход по урлу) в локальной сборке работает нормально', 'навигаиця в меню фильтра']
      },
      {
        title: 'Кроссбраузерность и адаптив, проверено на:',
        arr: ['PC (chrome, chrome-46, opera, ie-11, firefox)', 'mac (chrome, safari, firefox )', 'iOS (safari, chrome)', 'android (chrome)']
      },
      {
        title: 'Коммуникация',
        arr: ['для хранения данных используется redux', 'используется кросс-доменный запрос данных']
      },
      {
        title: 'Сборка',
        arr: ['development', 'production (minify)']
      },
      {
        title: 'Трудности',
        arr: ['Сложно было реализовать анимацию фильтра (написана без использования внешних библиотек)']
      }
    ]
  }

  render() {
    const { text } = this.state;
    return (
      <div className={'BlockAboutContent'}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-12 content'}>
              {text.map(it => {
                const result = [];
                result.push(<div key={it}>{it.title}</div>);
                result.push(
                  <ul key={`${it} a`}>
                    {it.arr.map(i => {
                      return <li key={i}>{i}</li>;
                    })}
                  </ul>
                );
                return result;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlockAboutContent;
