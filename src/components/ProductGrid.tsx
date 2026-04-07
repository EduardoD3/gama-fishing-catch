import { useState } from "react";
import { products } from "@/data/products";
import CategoryPills from "./CategoryPills";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? products
      : activeCategory === "Promoções"
      ? products.filter((p) => p.badge === "promo")
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogo" className="container py-10">
      <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-6">
        Nossos Produtos
      </h2>

      <CategoryPills active={activeCategory} onChange={setActiveCategory} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-16">
          Nenhum produto encontrado nessa categoria.
        </p>
      )}
    </section>
  );
}
