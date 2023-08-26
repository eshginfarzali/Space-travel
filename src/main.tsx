
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './styles/style.css'
import './styles/reset.css';
import './styles/variable.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />,
);