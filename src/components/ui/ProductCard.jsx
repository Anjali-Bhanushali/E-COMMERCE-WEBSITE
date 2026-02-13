import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card className="hover:shadow-lg transition duration-300 cursor-pointer">
      <CardContent className="p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-40 w-full object-cover rounded-md"
        />

        <h2 className="text-lg font-semibold mt-3">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>

        <p className="text-xl font-bold mt-2">
          ${product.price}
        </p>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
