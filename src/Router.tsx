import { Routes, Route } from 'react-router-dom'
import { DevRel } from './Pages/DevRel'
import { Frontend } from './Pages/Frontend'
import { HomePage } from './Pages/HomePage'
import { Data } from './Pages/Data'

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