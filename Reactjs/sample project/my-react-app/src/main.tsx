// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// better and easy way to understand
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <p>Welcome!</p>
)

// another example
// import { createRoot } from 'react-dom/client'

// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// createRoot(document.getElementById('root')).render(
//   myelement
// )