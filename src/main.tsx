import { language } from "./i18n";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

document.documentElement.lang = language;
document.title = language === "tr" ? "Ömer Faruk Kocakaya | Yazılım Geliştirici" : "Ömer Faruk Kocakaya | Software Developer";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
