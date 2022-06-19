import { Navigate, Route, Routes } from 'react-router-dom'
import Categories from './Categories'
import Items from './Items'
import OpenItem from './OpenItem'

export default function Main() {
    return (
        <div className='main'>


            <Routes>
                <Route path='/' element={<Categories/>} />

                <Route path='/categories' element={<Categories />} />

                <Route path='/products/category/:cat' element={<Items />} />

                <Route path='/products/:id' element={<OpenItem />} />

                <Route path='/*' element={<h1>Eorro 404</h1>} />
            </Routes>
        </div>
    )
}