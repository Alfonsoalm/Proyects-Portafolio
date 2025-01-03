import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/layout.css';
import './styles/contact.css';
import './styles/curriculum.css';
import './styles/portfolio.css';
import './styles/projectView.css';
import './styles/proyect.css';
import './styles/experience.css';
import './styles/education.css';
import './styles/skillList.css';
import './styles/recognitions.css';
import './styles/courses.css';
import './styles/knowledge.css';
import './styles/stars.css';

import App from './App';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);