import React, { useEffect } from 'react'
import './styles/App.css'
import Layout from './components/Layout';

function App(){
    return <>
        <div>
           <Layout/>
        </div>
    </>
}
export default React.memo(App)