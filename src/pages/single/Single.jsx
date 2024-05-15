import React from "react";
import "./Single.css";
import { useParams } from "react-router-dom";
import { useGetDetailProductQuery } from "../../context/productApi";

const Single = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useGetDetailProductQuery(id);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="container">
          <div className="single-style">
            <img className="single-img" src={product?.images[0]} alt="" />
            <div className="single-content">
              <h1>{product?.title}</h1>
              <h3>{product.description}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                praesentium inventore quis assumenda iure dolore voluptates
                ratione saepe enim consequatur, sint officia harum ducimus
                dignissimos veritatis modi et commodi totam!
              </p>
              <h3>
                Stock({product?.stock}) {product?.price}$
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Single;
