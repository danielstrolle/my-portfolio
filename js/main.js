import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
  {
    'title': "Weather Map Forecast",
    'href': "https://github.com/Brandon-Daniel-Ajax/Ajax-API-Request",
    'desc': "Using AJAX requests, query the google maps API for a 3 day forecast on any location. User may drag and drop pin to get live forecast on that location using jQuery and event listeners. Use Javascript to live-update the html.",
    'image': {
      'desc': "A Single-Page Web App using Google's weather API",
      'src': "images/ajax-api-ss.png",
      'comment': ""
    }
  },
  {
    'title': "Monkey Business LLC",
    'href': "https://github.com/TravisAndDanielMovieApp/movies-application",
    'desc': "Using paired programming, built a web application that allows users to add, edit, rate, and delete movies. Used a JSON-server to mock our backend, implemented AJAX requests and fetches to update our HTML, through JavaScript, without needing to refresh.",
    'image': {
      'desc': "Single Page Web App using many AJAX calls",
      'src': "images/movide_db-ss.png",
      'comment': ""
    }
  },
  {
    'title': "Dab-Lister",
    'href': "https://github.com/B-A-D/Mr-Adlister",
    'desc': "Using Java, create an application that uses controllers, models, and DAOs to present different JSPs based on user actions. A mock-up with a twist based on ebay, allows users to register an account, then create ads for dabs. User can search through other posted dabs based off name or category",
    'image': {
      'desc': "A Java App mock-up of EBay with a twist, Dab-Lister",
      'src': "images/adlister-ss.png",
      'comment': ""
    }
  },
  {
    'title': "Blog Mock-up",
    'href': "http://blog.danielstrolle.me",
    'desc': "Using a Spring framework, create an application that uses controllers, models, and repositories to present different views to the user. Implemented authentication security throught with configurations and tokens. Allows users to register an account with a unique username and then create blog posts.",
    'image': {
      'desc': "Java App built using Spring MVC",
      'src': "images/blog-ss.png",
      'comment': ""
    }
  },
  {
    'title': "Capstone Project",
    'href': "http://livemusicismy.life",
    'desc': "Created an application called “livemusicismy.life” that uses a Spring framework, APIs, AJAX calls, Java, JavaScript and Materialize to provide a solution to finding live music near you. Allows a user to register an account, search for and add shows near them, and create reviews for those shows.",
    'image': {
      'desc': "Java App built using Spring MVC",
      'src': "images/lmiml-ss.png",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
