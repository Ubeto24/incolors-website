import React from 'react';
import WholesaleCarousel from '../components/WholesaleCarousel';

export default function WholesalePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-50 to-purple-100 py-20 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
          Wholesale Private Label Products for Resellers & Distributors
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Incolors offers bulk pricing, private label customization, OEM partnerships, and low minimum order quantities (MOQ) for businesses worldwide. Start your reseller partnership today with our wide range of corporate gifts, promotional products, and customized merchandise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-indigo-50 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl mb-2">💰</span>
            <h3 className="font-semibold text-lg mb-1">Bulk Discounts</h3>
            <p className="text-gray-600 text-sm">Save more when you buy more. Special pricing for large orders.</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl mb-2">🏷️</span>
            <h3 className="font-semibold text-lg mb-1">Private Label</h3>
            <p className="text-gray-600 text-sm">Brand our products as your own. Perfect for agencies and resellers.</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl mb-2">🌍</span>
            <h3 className="font-semibold text-lg mb-1">Fast Global Shipping</h3>
            <p className="text-gray-600 text-sm">We deliver quickly and reliably to your business, wherever you are.</p>
          </div>
        </div>
        <a
          href="https://wa.link/tu-enlace-de-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-indigo-700 transition"
        >
          Contact our B2B Team on WhatsApp
        </a>
      </div>
      <div className="w-full max-w-6xl mx-auto">
        <WholesaleCarousel />
      </div>
    </section>
  );
} 