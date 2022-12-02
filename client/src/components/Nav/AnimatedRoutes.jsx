import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import {lazy, Suspense} from 'react'

const Books = lazy(() => import("../../pages/Books/Books"))
const AddBook = lazy(() => import("../../pages/AddBook/AddBook"))
const EditBook = lazy(() => import("../../pages/Edit/EditBook"))

export const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Suspense fallback={<div>Loading</div>}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Books/>}/>
                    <Route path="/addbook" element={<AddBook/>}/>
                    <Route path="/editbook/:id" element={<EditBook/>}/>
                </Routes>
            </Suspense>
        </AnimatePresence>
    )
}