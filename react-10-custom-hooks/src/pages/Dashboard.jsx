import { useState } from "react";
import { initialProducts } from "../data/products";
import { useSearch } from "../hooks/useSearch";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { Package, CheckCircle2, AlertTriangle, DollarSign } from "lucide-react";

const Dashboard = () => {
  const [products, setProducts] = useState(initialProducts);
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(products);

  // Dynamic Stock Tracking Updates
  const handleStockChange = (id, newStock) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, stock: newStock } : item))
    );
  };

  // Dashboard Statistics
  const totalProducts = products.length;
  const availableProducts = products.filter((p) => p.stock > 0).length;
  const outOfStockProducts = products.filter((p) => p.stock === 0).length;
  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8 space-y-8">
      {/* Dashboard Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#FFFDF7] p-5 border border-[#E4DED0] rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#66736A]">Total Products</p>
            <p className="text-2xl font-serif font-bold text-[#173B2A] mt-1">{totalProducts}</p>
          </div>
          <Package className="w-8 h-8 text-[#2F5D3A]" />
        </div>

        <div className="bg-[#FFFDF7] p-5 border border-[#E4DED0] rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#66736A]">Available Items</p>
            <p className="text-2xl font-serif font-bold text-emerald-600 mt-1">{availableProducts}</p>
          </div>
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>

        <div className="bg-[#FFFDF7] p-5 border border-[#E4DED0] rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#66736A]">Out of Stock</p>
            <p className="text-2xl font-serif font-bold text-rose-600 mt-1">{outOfStockProducts}</p>
          </div>
          <AlertTriangle className="w-8 h-8 text-rose-600" />
        </div>

        <div className="bg-[#FFFDF7] p-5 border border-[#E4DED0] rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#66736A]">Total Inventory Value</p>
            <p className="text-2xl font-serif font-bold text-[#C8A45D] mt-1">${totalValue.toFixed(2)}</p>
          </div>
          <DollarSign className="w-8 h-8 text-[#C8A45D]" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <span className="text-xs text-[#66736A]">Showing {filteredItems.length} of {totalProducts} items</span>
      </div>

      {/* Product Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((product) => (
            <ProductCard key={product.id} product={product} onStockChange={handleStockChange} />
          ))
        ) : (
          <p className="col-span-full text-center py-12 text-[#66736A]">
            No inventory matches found for "{searchTerm}".
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;