import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productActions from "../../store/actions/productActions";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.getCiftci());
  }, []);

  const { productItems } = useSelector((state) => state.product);
  return (
    <div>
      
      {productItems.map((data) => (
        <h1>{data.productName}</h1>
      ))}
    </div>
  );
}
