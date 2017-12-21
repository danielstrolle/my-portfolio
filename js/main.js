import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
  {
    'title': "Weather Map Forecast",
    'image': {
      'desc': "A Single-Page Web App using Google's weather API",
      'src': "images/ajax-api-ss.png",
      'comment': ""
    }
  },
  {
    'title': "Monkey Business LLC",
    'image': {
      'desc': "Single Page Web App using many AJAX calls",
      'src': "images/movide_db-ss.png",
      'comment': ""
    }
  },
  {
    'title': "Dab-Lister",
    'image': {
      'desc': "A Java App mock-up of EBay with a twist, Dab-Lister",
      'src': "images/adlister-ss.png",
      'comment': ""
    }
  },
  {
    'title': "Blog Mock-up",
    'image': {
      'desc': "Java App built using Spring MVC",
      'src': "images/blog-ss.png",
      'comment': ""
    }
  },
  {
    'title': "Capstone Project",
    'image': {
      'desc': "Java App built using Spring MVC",
      'src': "images/lmiml-ss.png",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
