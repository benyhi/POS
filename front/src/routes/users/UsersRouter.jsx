import { Routes, Route } from 'react-router-dom';
import UsersView from './UsersView';

const UsersRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersView />} />
    </Routes>
  );
};

export default UsersRouter;
