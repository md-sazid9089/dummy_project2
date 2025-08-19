const shops = [
  { id: 1, shopName: 'Grocery Mart', type: 'Grocery', location: 'Main St', contact: '555-123', hours: '8-9' },
];

const ShopsPage = () => (
  <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-3 gap-4">
    {shops.map((s) => (
      <div key={s.id} className="bg-white shadow rounded p-4 hover:shadow-lg transition">
        <h2 className="text-lg font-semibold">{s.shopName}</h2>
        <p>Type: {s.type}</p>
        <p>Location: {s.location}</p>
        <p>Contact: {s.contact}</p>
        <p>Hours: {s.hours}</p>
      </div>
    ))}
  </div>
);

export default ShopsPage;
