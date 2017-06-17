import React from 'react';
import {render} from 'react-dom';

//import css
import css from './styles/style.styl';

//Import components

import Main from './components/Main';

render(<Main> <p>Hello I m coming</p></Main>, document.getElementById('root'));
