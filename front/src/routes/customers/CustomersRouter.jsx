import { Routes, Route } from 'react-router-dom';
import CustomersTableView from './CustomersTableView';

const CustomersRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomersTableView />} />
    </Routes>
  );
};

export default CustomersRoutes;
