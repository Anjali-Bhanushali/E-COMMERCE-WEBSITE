import { Input } from "@/components/ui/input";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-between items-center gap-4 flex-col sm:flex-row">
      <Input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-md"
      />
    </div>
  );
};

export default SearchBar;
