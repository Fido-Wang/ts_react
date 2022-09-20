import ReactDom from 'react-dom'
import App from "./App";
import MyRouter from './router/index'

ReactDom.render(
    <MyRouter/>,
    document.getElementById('root')
)