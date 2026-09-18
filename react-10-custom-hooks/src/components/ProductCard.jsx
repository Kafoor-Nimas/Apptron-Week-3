import { Minus, Plus, RotateCcw } from "lucide-react";
import { useCounter } from "../hooks/useCounter";

const ProductCard = ({ product, onStockChange }) => {
  const {
    count: stock,
    increment,
    decrement,
    reset,
  } = useCounter(product.stock);

  const handleIncrement = () => {
    increment();
    onStockChange(product.id, stock + 1);
  };

  const handleDecrement = () => {
    if (stock > 0) {
      decrement();
      onStockChange(product.id, stock - 1);
    }
  };

  const handleReset = () => {
    reset();
    onStockChange(product.id, product.stock);
  };

  return (
    <div className="bg-[#FFFDF7] border border-[#E4DED0] rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
      <div>
        <div className="aspect-[4/3] bg-[#F8F4E8] relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#173B2A]/80 text-white text-[10px] font-semibold rounded-full backdrop-blur-xs">
            {product.category}
          </span>
        </div>

        <div className="p-4 space-y-2">
          <span className="text-[10px] font-bold text-[#C8A45D] uppercase tracking-wider">
            {product.brand}
          </span>
          <span className="font-serif font-semibold text-[#173B2A] text-base line-clamp-1">
            {product.name}
          </span>
          <span className="font-bold text-[#2F5D3A] text-sm">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div className="p-4 bg-[#F8F4E8]/80 border-t border-[#E4DED0] space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-[#66736A]">
              Available Quantity:
            </span>
            <span
              className={`font-bold ${stock === 0 ? "text-rose-600" : "text-[#173B2A]"}`}
            >
              {stock > 0 ? `${stock} units` : "Out of Stock"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrement}
              disabled={stock === 0}
              className="p-2 bg-white border border-[#E4DED0] rounded-lg text-[#173B2A] hover:bg-[#2F5D3A] hover:text-white disabled:opacity-40 transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="flex-1 text-center font-bold text-sm text-[#173B2A] bg-white py-1.5 border border-[#E4DED0] rounded-lg">
              {stock}
            </span>
            <button
              onClick={handleIncrement}
              className="p-2 bg-white border border-[#E4DED0] rounded-lg text-[#173B2A] hover:bg-[#2F5D3A] hover:text-white  transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
            <button onClick={handleReset} className="p-2 bg-white border border-[#E4DED0] rounded-lg text-[#66736A] hover:text-[#C8A45D] transition-colors" title="Reset Stock">
              <RotateCcw className="w-3.5 h-3.5"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
