import { Routes, Route } from 'react-router-dom';
import CategoriesView from './CategoriesView';
import ProductsView from './ProductsView';

const InventoryRouter = () => {
  return (
    <Routes>
      <Route path="categories" element={<CategoriesView />} />
      <Route path="products" element={<ProductsView />} />
    </Routes>
  );
};

export default InventoryRouter;
