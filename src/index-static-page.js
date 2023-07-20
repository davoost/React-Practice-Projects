import React from 'react';
import ReactDOM from 'react-dom/client';
import './index-static-page.css';
import AppStaticPage from './App-static-page';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppStaticPage></AppStaticPage>
  </React.StrictMode>
);

