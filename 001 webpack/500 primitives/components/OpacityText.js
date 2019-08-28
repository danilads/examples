import React, { Component } from 'react';

//README 
// !неработает с очень длинными словами (нужна доработка)
// wordBreak: 'break-all' - иначе если одно слово - не будет  работать
// lineHeight: '1em'  - обязятельный параметр
// maxHeight: '1em' - можно менять
// fontFamily:' sans-serif' - может быть баг из каличного шрифта

class OpacityText extends Component {
    state = {
        text: '',
        defaultText: 'some text some text some text some text some text some text some text some text some text some text some text some text',
        innerText: '',
    };
    componentDidMount(){
        window.addEventListener('resize',this.recountOpacity);
        this.recountOpacity();
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.recountOpacity);
    }
    ref = React.createRef();
    recountOpacityChain1 = (block, text, control) => {
        //дефолтная запись
        this.setState({ [control]: text }, () => {
            if (block.scrollHeight - block.offsetHeight > 1) {
                this.recountOpacityChain2(block, text, control)
            }
        });
    };
    recountOpacityChain3 = (block, text, control) => {
        let wordArray = text.split(' ');

        let lastWord = wordArray.pop();

        let result = wordArray.join(' ');

        this.setState({ [control]: result }, () => {
            this.recountOpacityChain2(block, result, control, lastWord);
        })
    };

    recountOpacityChain4 = (block, text, control, lastWord) => {

        let result = text;
        let cuttedLast = lastWord.slice(0, -1);
        if (lastWord !== '') {
            result += ' ' + cuttedLast;
        }

        this.setState({ [control]: result }, () => {
            this.recountOpacityChain5(block, text, control, cuttedLast);
        })
    };

    recountOpacityChain5 = (block, text, control, lastWord) => {
        if (block.scrollHeight - block.offsetHeight > 1) {
            //разбиваем последнее слово по символам
            this.recountOpacityChain4(block, text, control, lastWord);
        }
        else {
            this.setState({
                [control]: <React.Fragment>
                    <span>{this.state[control].slice(0, -6)}</span>
                    <span style={{ opacity: 0.6 }}>{this.state[control].slice(-6, -5)}</span>
                    <span style={{ opacity: 0.5 }}>{this.state[control].slice(-5, -4)}</span>
                    <span style={{ opacity: 0.4 }}>{this.state[control].slice(-4, -3)}</span>
                    <span style={{ opacity: 0.32 }}>{this.state[control].slice(-3, -2)}</span>
                    <span style={{ opacity: 0.22 }}>{this.state[control].slice(-2, -1)}</span>
                    <span style={{ opacity: 0.15 }}>{this.state[control].slice(-1)}</span>
                </React.Fragment>
            })
        }
    };

    recountOpacityChain2 = (block, text, control, lastWord) => {
        if (block.scrollHeight - block.offsetHeight > 1) {
            //разбираем текст по словам
            this.recountOpacityChain3(block, text, control);
        }
        else {
            //входная точка в следующую цепочку
            this.recountOpacityChain4(block, text, control, lastWord);
        }

    };
    recountOpacity = () => {
        //label
        this.recountOpacityChain1(this.ref.current, this.state.defaultText, 'innerText');
    };
    render() {
        return (<div>
            <div style={{ lineHeight: '1em', maxHeight: '1em', fontFamily: 'sans-serif', wordBreak: 'break-all' }} ref={this.ref}>{this.state.innerText}</div>
        </div>)
    }

}

export default OpacityText;
