import "./Category.styles.scss";
import ProductCard from "../../components/Product-Card/ProductCart.component";

import { useContext, useEffect, useState , Fragment} from "react";

import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/Categories.context";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [Category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
