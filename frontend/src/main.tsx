import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


import App from './App.tsx'
import './index.css'
import KanbanContextProvider from './context/kanban-context.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KanbanContextProvider>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>  
    </KanbanContextProvider>
  </StrictMode>,
)
