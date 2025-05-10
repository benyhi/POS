import { Routes, Route } from 'react-router-dom';
import FormView from './FormView';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FormView />} />
    </Routes>
  );
};

export default AuthRoutes;