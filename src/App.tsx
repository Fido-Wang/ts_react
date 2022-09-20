import react from 'react'
import './App.less'
import Header from './components/header/index'
import Footer from './components/footer/index'
import Slider from './components/slider/index'
import { Outlet } from 'react-router-dom'


export default function App() {
    return (
        <div className="app">
            <Header></Header>
            <div className='box'>
                <Slider></Slider>
                <section>
                    <Outlet/>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}