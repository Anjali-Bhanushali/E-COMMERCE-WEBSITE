import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "@/api/axiosInstance";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={product.thumbnail} className="w-full h-80 object-cover" />
      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="mt-2">{product.description}</p>
      <p className="text-xl mt-4 font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductDetails;
