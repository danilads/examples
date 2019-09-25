////---libraries
//preact
import {h, render } from './library/preact.js';


/////----scss
import './scss/main.scss';

////----components
import Main from './components/Main';


render(<Main/>, document.getElementById('container'));
