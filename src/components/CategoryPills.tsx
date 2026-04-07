import { categories } from "@/data/products";
import { useRef } from "react";

interface Props {
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryPills({ active, onChange }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="flex gap-2.5 overflow-x-auto scrollbar-hide py-1 snap-x snap-mandatory -mx-4 px-4"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`category-pill snap-start ${
            active === cat ? "category-pill-active" : "category-pill-inactive"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
