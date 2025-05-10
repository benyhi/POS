import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

import AuthRouter from './auth/AuthRouter';
import HomeRouter from './home/HomeRouter';
import SaleRouter from './sale/SaleRouter';
import InventoryRouter from './inventory/InventoryRouter';
import MovementsRouter from './movements/MovementsRouter';
import CustomersRouter from './customers/CustomersRouter';
import UsersRouter from './users/UsersRouter';
import ReportsRouter from './reports/ReportsRouter';
import SettingsRouter from './settings/SettingsRouter';
import HelpInfoRouter from './help_info/HelpInfoRouter';
import NotificationsRouter from './notifications/NotificationsRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Navbar */}
        <Route path="/auth/*" element={<AuthRouter />} />

        {/* Routes without Navbar */}
        <Route path='/*' element={<MainLayout />}>
          <Route path="home/*" element={<HomeRouter />} />
          <Route path="sale/*" element={<SaleRouter />} />
          <Route path="inventory/*" element={<InventoryRouter />} />
          <Route path="movements/*" element={<MovementsRouter />} />
          <Route path="notifications/*" element={<NotificationsRouter />} />
          <Route path="customers/*" element={<CustomersRouter />} />
          <Route path="users/*" element={<UsersRouter />} />
          <Route path="reports/*" element={<ReportsRouter />} />
          <Route path="settings/*" element={<SettingsRouter />} />
          <Route path="help-info/*" element={<HelpInfoRouter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
