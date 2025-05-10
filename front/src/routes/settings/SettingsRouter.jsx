import { Routes, Route } from 'react-router-dom';
import SettingsView from './SettingsView';

const SettingsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SettingsView />} />
    </Routes>
  );
};

export default SettingsRouter;
