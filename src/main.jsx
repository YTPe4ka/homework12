import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import './index.css'
import App from './App.jsx'

ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//hmmm what do you think about comments in russia? 
//remember that u said that u know how about comments in russia?