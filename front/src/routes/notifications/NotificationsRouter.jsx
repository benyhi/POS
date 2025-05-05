import { Routes, Route } from 'react-router-dom';
import NotificationsView from './NotificationsView';

const NotificationsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<NotificationsView />} />
    </Routes>
  );
};

export default NotificationsRouter;
