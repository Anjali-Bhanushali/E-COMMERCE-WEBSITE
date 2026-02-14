import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="h-[90vh] flex flex-col justify-center items-center bg-blue-50 text-gray-900
 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Welcome to Our Store
      </h1>

      <p className="text-lg mb-6">
        Discover amazing products at great prices.
      </p>

      <button
        onClick={() => navigate("/products-page")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Shop Now
      </button>
    </section>
  );
};

export default Hero;
