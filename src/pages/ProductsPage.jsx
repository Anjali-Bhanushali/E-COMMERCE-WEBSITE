import { useEffect, useState } from "react";
import axiosInstance from "@/api/axiosInstance";
import ProductCard from "@/components/ui/ProductCard";
import SearchBar from "@/components/ui/SearchBar";
import Pagination from "@/components/ui/Pagination";
import useDebounce from "@/hooks/useDebounce";

const LIMIT = 8;

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const skip = (page - 1) * LIMIT;

      let url = `/products?limit=${LIMIT}&skip=${skip}`;

      if (debouncedSearch) {
        url = `/products/search?q=${debouncedSearch}&limit=${LIMIT}&skip=${skip}`;
      }

      const res = await axiosInstance.get(url);

      let sortedProducts = res.data.products;

      if (sortOrder === "asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
      }

      setProducts(sortedProducts);
      setTotal(res.data.total);
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [debouncedSearch, page, sortOrder]);

  return (
    <div className="p-6 max-w-6xl  mx-auto">
      <div className="p-6 max-w-6xl flex justify-between mx-auto">
        <SearchBar search={search} setSearch={setSearch} />

        <select
          className="my-4 border p-2 rounded"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="asc">Price Low → High</option>
          <option value="desc">Price High → Low</option>
        </select>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination total={total} page={page} setPage={setPage} limit={LIMIT} />
    </div>
  );
};

export default ProductsPage;
