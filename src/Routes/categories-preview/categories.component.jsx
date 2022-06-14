import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/Category-Preview.component";

import { CategoriesContext } from "../../contexts/Categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div >
      {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products}/>
    
})}
    </div>
  );
};

export default CategoriesPreview;
