import { Routes, Route } from 'react-router-dom'
import { DevRel } from './Pages/DevRel'
import { Data } from './Pages/data'
import { Frontend } from './Pages/Frontend'
import { HomePage } from './Pages/HomePage'

export function Router() {
    return (
        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/frontend' element={<Frontend />} />
            <Route path='/data' element={<Data />} />
            <Route path='/devrel' element={<DevRel />} />
        </Routes>
    )
}