import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  // Pass store to Provider for all components to access - Redux
  <Provider store={store}>
    <App />
  </Provider>,
);
