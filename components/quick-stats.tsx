export function QuickStats() {
  return (
    <section className="py-12 px-4 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
            <div className="text-gray-700 font-medium">Days Delivery</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">£497</div>
            <div className="text-gray-700 font-medium">Starting Price</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-700 font-medium">Businesses Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}
