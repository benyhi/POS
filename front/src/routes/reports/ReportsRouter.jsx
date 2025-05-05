import { Routes, Route } from 'react-router-dom';
import ReportsView from './ReportsView';

const ReportsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ReportsView />} />
    </Routes>
  );
};

export default ReportsRouter;
