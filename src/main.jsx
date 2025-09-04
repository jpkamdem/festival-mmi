import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import About from './pages/About.jsx';
import Connexion from './pages/Connexion.jsx';
import Home from './pages/Home.jsx';
import Laureats from './pages/Laureats.jsx';
import NotFound from './pages/NotFound.jsx';
import Selection from './pages/Selection.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/selection',
				element: <Selection />,
			},
			{
				path: '/a-propos',
				element: <About />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
