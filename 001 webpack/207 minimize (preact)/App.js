////---libraries
//preact
import {h, render } from './library/preact.js';


/////----scss
import './scss/main.scss';

////----components
import Main from './components/Main';

// var doc = document.getElementById('container');
// doc.innerHTML = "<div>hello</div>";
render(<Main/>, document.getElementById('container'));
