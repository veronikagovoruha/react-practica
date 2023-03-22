import { Routes, Route } from 'react-router-dom';
import {lazy, Suspense} from 'react';

const MainPage = lazy(() => import('../pages/MainPage'));
const TransactionHistoryPage = lazy(() => import('../pages/TransactionHistoryPage'));

export const App = () => {
    
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
            <Route path="/*" element={<MainPage />} />
            <Route path="/history/:transType" element={<TransactionHistoryPage/>} />
            <Route path="*" element={<h1>Error</h1>} />
        </Routes>
        </Suspense>
    );
}
