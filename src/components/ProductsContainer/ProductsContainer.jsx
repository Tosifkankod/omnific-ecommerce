import ProductsItem from "../ProductsItem/ProductsItem";
import db from '../../assets/db.json';


const ProductsContainer = () => {
  return (
    <div className="p-3">
        <h1 className="text-3xl font-bold mt-4 border-b-2 pb-2 border-blue-400">Our Best Selling Products</h1>
        <div className="py-3 flex gap-2 flex-wrap justify-center">
            {
              db.map((item) => {
                return <ProductsItem image={item.image} key={item.id} id={item.id} title={item.title} description={item.description} mrp={item.mrp} price={item.price} />
              })
            }
        </div>
    </div>
  );
};

export default ProductsContainer;
