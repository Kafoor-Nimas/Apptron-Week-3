import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full max-w-lg">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#89938C]" />
      <input
        type="text"
        placeholder="Search by product name or brand..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-11 pr-4 py-2.5 bg-[#FFFDF7] border border-[#E4DED0] rounded-xl text-sm focus:outline-none focus:border-[#2F5D3A] shadow-xs transition-all"
      />
    </div>
  );
};

export default SearchBar;
