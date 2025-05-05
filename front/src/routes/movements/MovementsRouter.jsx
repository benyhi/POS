import { Routes, Route } from 'react-router-dom';
import PurchasesView from './PurchasesView';
import SalesView from './SalesView';

const MovementsRouter = () => {
  return (
    <Routes>
      <Route path="purchases" element={<PurchasesView />} />
      <Route path="sales" element={<SalesView />} />
    </Routes>
  );
};

export default MovementsRouter;
