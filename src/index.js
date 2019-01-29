import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {Calendar, CalendarControls} from 'react-yearly-calendar';
import moment from 'moment';

function onDatePicked(date) {
    // if datePicked matches a date in our journal entry state , show it    
    alert(date);
  }
  
  ReactDOM.render(
      
    <App/>,
    document.getElementById('root')
  );

  



