import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyMovie from './App';
import MyStories from './App';
import PropTypes from 'prop-types';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<div><MyMovie title="avatar" genre="action"/>
<MyMovie title="Titaniccc" genre="Roamance"/>
<MyMovie title="Mohra" genre="Action"/>
<MyMovie title="Hangover" genre="Drama"/>
<MyMovie title="OnceMOre" genre="Drama"/>
    </div>

    , document.getElementById('root'));


registerServiceWorker();
