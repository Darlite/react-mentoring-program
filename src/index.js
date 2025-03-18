import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from "./components/Counter";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Counter initialCount={3} />);
