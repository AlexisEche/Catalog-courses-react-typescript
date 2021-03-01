import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.css'
import App from './App';
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import AdvancedSearchEngine from './components/AdvancedSearchEngine';
import Card from './components/Card';
import DescriptionCourse from './components/DescriptionCourse';
import CardBuyCourse from './components/CardBuyCourse';
import TemaryCourse from './components/TemaryCourse';
import ExplanationCourse from './components/ExplanationCourse';
import ProyectsofCourse from './components/ProyectsOfCourse';
import FrequentQuestions from './components/FrequentQuestions';
import Ratings from './components/Ratings'
import FormBuyCourse from './components/FormBuyCourse'
import PurchaseDescription from './components/PurchaseDescription'
import Home from './components/pages/Home'
import DetailOfCourse from './components/pages/DetailOfCourse'
import Checkout from './components/pages/Checkout'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
