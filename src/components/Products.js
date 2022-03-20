import React from "react";
import ShopData from "./ShopData";
const Products = (props) => {
  const [state] = React.useState(ShopData);
  return (
    <div className="product">
      {state.map((story,i) => (
          <div className="product__col" key={story.id} style={{width:"25%"}}>
          <div className="stories__body">
            <img src={story.productImg} alt="stories" />
            <div className="stories__body-overlay">
              <div className="stories__body-name">{story.name} {i}</div>
            </div>
          </div>
        </div>
      ))};
    </div>
  );
};

export default Products;
