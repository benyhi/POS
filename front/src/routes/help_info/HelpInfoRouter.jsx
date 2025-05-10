import { Routes, Route } from 'react-router-dom';
import HelpInfoView from './HelpInfoView';

const HelpInfoRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HelpInfoView />} />
    </Routes>
  );
};

export default HelpInfoRouter;
