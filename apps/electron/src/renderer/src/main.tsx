import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashHistory, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import "@raikou/system/styles.css";
import "@stylefusion/react/styles.css";
import './assets/main.css'

// Set up a Router instance
const hashHistory = createHashHistory()

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  history: hashHistory
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
