// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from 'Containers/App';
// const container = document.getElementById('mount');
// const root = createRoot(container);
// root.render(<App />);
import App from 'Containers/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('mount');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
