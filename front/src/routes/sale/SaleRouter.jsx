import { Routes, Route } from 'react-router-dom';
import SaleView from './SaleView';

const SaleRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SaleView />} />
    </Routes>
  );
};

export default SaleRouter;
