// Import our custom CSS
import '../scss/main.scss';

// Import javascript file as needed
import Dashboard from './pages/dashboard';
import { AddStoryPage } from './pages/add-story';
import { AboutPage } from './components/about-page';
import * as bootstrap from 'bootstrap';
import './components/story-card';
import './components/story-form';

const routes = {
  '/': Dashboard,
  '/add-story': AddStoryPage,
  '/about': AboutPage,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  if (route) {
    route.init();
  } else {
    console.error('Route not found:', window.location.pathname);
  }
});
