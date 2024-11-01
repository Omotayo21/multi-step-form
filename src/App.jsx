import './index.css'
import React ,{Suspense, lazy }from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from './components/Spinner';
const Home = lazy(() =>import ('./pages/Home'));

const Summary = lazy(() =>import ('./pages/Summary'));
const Plans = lazy(() =>import ('./pages/Plans'));
const Addons = lazy(() =>import ('./pages/Addons'));
const Finished = lazy(() =>import ('./pages/Finished'));
 
function App(){
 return(
<>
<div className=' border-2 rounded-[0.8rem] border-black-200 flex flex-col items-center justify-center bg-white-500 lg:w-8/12 lg:ml-64 h-[40.4rem] lg:mt-4 lg:pt-24  '>
 <Router>
        
         <Suspense fallback={ <Spinner /> }>
          <Routes>
              <Route path='/' element={<Home />} />
                <Route path='/plans' element={< Plans />}/>
                  <Route path='/addons' element={<Addons />} />
                    <Route  path='/summary' element={< Summary />} />
                      <Route path='/finished' element={<Finished/>}/>
                       
            </Routes>
           </Suspense>
      </Router></div>
      
</>
 )
}
export default App;