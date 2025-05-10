import { Routes, Route } from 'react-router-dom';
import HomeView from './HomeView';

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
    </Routes>
  );
};

export default HomeRouter;
