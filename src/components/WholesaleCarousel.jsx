import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import wholesaleProducts from '../data/wholesaleProducts';
import { useTranslation } from 'react-i18next';

export default function WholesaleCarousel() {
  const { i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);
  if (!isClient) return null;
  if (i18n.language !== 'en') return null;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    dragFree: false,
    breakpoints: {
      '(max-width: 1024px)': { slidesToScroll: 1 },
      '(max-width: 640px)': { slidesToScroll: 1 },
    },
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-indigo-700">Our Bestselling Wholesale Products</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        We offer bulk-ready OEM products, ideal for resellers, brands, and fulfillment partners. Inquire today for MOQ and customization.
      </p>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {wholesaleProducts.map(product => {
              let customImage = product.imageUrl;
              let customAlt = product.title;
              if (product.id === 1) {
                customImage = 'https://images.unsplash.com/photo-1598387844304-c89dd59eae52?fit=crop&w=600&q=80';
                customAlt = '20oz Skinny Tumbler';
              } else if (product.id === 2) {
                customImage = 'https://images.unsplash.com/photo-1664998897140-3b967cdd192d?fit=crop&w=600&q=80';
                customAlt = '16oz Glass Can';
              } else if (product.id === 3) {
                customImage = 'https://images.unsplash.com/photo-1558959357-685f9e7c9d28?fit=crop&w=600&q=80';
                customAlt = 'Frosted Glass Mug';
              } else if (product.id === 4) {
                customImage = 'https://images.unsplash.com/photo-1598032894296-721ffbcae6eb?fit=crop&w=600&q=80';
                customAlt = 'Custom Tote Bags';
              }
              return (
                <div key={product.id} className="min-w-[280px] max-w-xs flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center">
                  <img
                    src={customImage}
                    alt={customAlt}
                    className="w-32 h-32 object-contain rounded mb-4 border mx-auto bg-white"
                    loading="lazy"
                  />
                  <h3 className="font-semibold text-base mb-1 text-gray-800">{product.title}</h3>
                  <div className="text-xs text-indigo-600 font-semibold mb-2">{product.category.toUpperCase()}</div>
                  <div className="text-lg font-bold text-indigo-700 mb-1">{product.pricePerCase}</div>
                  <div className="text-sm text-gray-500 mb-3">{product.unitPrice}</div>
                  {product.soldOut ? (
                    <button className="bg-gray-300 text-gray-500 px-4 py-2 rounded-full font-semibold cursor-not-allowed" disabled>SOLD OUT</button>
                  ) : (
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition">ADD TO CART</button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Flechas de navegación */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100 transition disabled:opacity-30"
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          disabled={!canScrollPrev}
          aria-label="Previous"
        >
          <span className="text-xl">&#8592;</span>
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100 transition disabled:opacity-30"
          onClick={() => emblaApi && emblaApi.scrollNext()}
          disabled={!canScrollNext}
          aria-label="Next"
        >
          <span className="text-xl">&#8594;</span>
        </button>
      </div>
    </div>
  );
} 