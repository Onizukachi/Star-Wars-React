import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routesConfig from '@routes/routesConfing';
import Header from '@components/Header/Header';
import styles from './App.module.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />
          
          <Routes>
            { routesConfig.map((route, index) => (
              <Route 
                key={index} 
                path={route.path} 
                element={< route.element />} 
              />
            )) }
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
