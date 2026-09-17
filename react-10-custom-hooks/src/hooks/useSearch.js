import { useMemo, useState } from "react";

export const useSearch = (items) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items;

    const term = searchTerm.toLowerCase();

    return items.filter(
      (item) =>
        item.name.toLowercase().includes(term) ||
        item.brand.toLowerCase().includes(term),
    );
  }, [items, searchTerm]);

  return { searchTerm, setSearchTerm, filteredItems };
};
