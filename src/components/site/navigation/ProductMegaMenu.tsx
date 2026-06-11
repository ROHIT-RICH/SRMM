import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { products } from "./product-data";

export function ProductMegaMenu() {
  const [active, setActive] = useState(products[0]);

  return (
    <div
      className="
      invisible
      absolute
      left-1/2
      top-full
      z-50
      mt-2
      w-[1050px]
      -translate-x-1/2
      rounded-[32px]
      border
      border-white/10
      bg-[#08111f]/95
backdrop-blur-2xl
      opacity-0
      transition-all
      duration-300
      group-hover:visible
      group-hover:opacity-100

      
    "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 pointer-events-none" />
      <div className="grid grid-cols-[300px_1fr] min-h-[520px]">
                {/* LEFT */}

        <div className="border-r border-white/10 p-6">
          {products.map((product) => (
            <button
              key={product.id}
              onMouseEnter={() => setActive(product)}
              className="
                w-full
                rounded-2xl
                p-4
                text-left
                transition-all
                hover:bg-white/[0.04]
              "
            >
              <h3 className="font-semibold text-white">
                {product.name}
              </h3>

              <p className="mt-1 text-sm text-white/50">
                {product.short}
              </p>
            </button>
          ))}
        </div>
                {/* RIGHT */}

        <div className="p-8">

          <img
            src={active.image}
            alt={active.name}
            className="
              h-[260px]
              w-full
              rounded-3xl
              object-cover
            "
          />

          <h2 className="mt-8 text-3xl font-bold text-white">
            {active.name}
          </h2>

          <p className="mt-4 max-w-2xl text-white/60">
            {active.description}
          </p>
                    <div className="mt-6 flex flex-wrap gap-2">
            {active.features.map((feature) => (
              <span
                key={feature}
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-3
                  py-1
                  text-sm
                  text-cyan-400
                "
              >
                {feature}
              </span>
            ))}
          </div>

          <Link
            to={active.href}
            className="
              mt-8
              inline-flex
              rounded-full
              bg-gradient-accent
              px-6
              py-3
              font-medium
              text-[#050816]
            "
          >
            Explore Product →
          </Link>

        </div>

      </div>
    </div>
  );
}