import { createRoot } from 'react-dom/client'

function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {218 * 1.36} horsepower</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);