////---libraries
//preact
import {h, render } from 'preact';

//redux
import { Provider } from 'preact-redux';
import store from './redux/store';

/////----scss
import './scss/main.scss';

////----components
import Main from './components/Main';


render(<Provider store={store}><Main/></Provider>, document.getElementById('container'));
