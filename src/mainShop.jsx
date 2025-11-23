import { createRoot } from 'react-dom/client'
import ShopApp from './Shop/components/ShopApp.jsx'
import './Shop/styles/index.css'

createRoot(document.getElementById('shop-root')).render(<ShopApp />)