// Tarjeta de producto: la usan "Más elegidos" y los resultados del buscador de regalos.
import Image from "next/image";
import { formatPrice, type Product } from "@/data/products";
import AddToCartButton from "./cart/AddToCartButton";
import { btnDark } from "./ui";

export default function ProductCard({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <article className={`flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-azul/5 ${className}`}>
      <div className="relative aspect-square bg-white">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 768px) 360px, 78vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-azul">{product.name}</h3>
        <p className="mt-1 flex-1 text-azul/70">{product.text}</p>
        <p className="mt-3 text-xl font-bold text-azul">{formatPrice(product.price)}</p>
        <AddToCartButton productId={product.id} className={`${btnDark} mt-4 w-full`}>
          Lo quiero
        </AddToCartButton>
      </div>
    </article>
  );
}
