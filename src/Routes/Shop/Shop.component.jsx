import {Routes , Route} from 'react-router-dom'

import CategoriesPreview from '../../Routes/categories-preview/categories.component'
import Category from '../../Routes/category/category.component'

const Shop = () => {

  return (
  <div>
  <Routes>
    <Route index element={<CategoriesPreview/>} />
    <Route path=":category" element={<Category/>}/>
  </Routes>
  </div>
  );
};

export default Shop;
