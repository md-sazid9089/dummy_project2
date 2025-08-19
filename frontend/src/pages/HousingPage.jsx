const dummyData = [
  { id: 1, title: 'Cozy Room', rent: 5000, location: 'City Center', contact: '1234567890' },
];

const HousingPage = () => (
  <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-3 gap-4">
    {dummyData.map((h) => (
      <div key={h.id} className="bg-white shadow rounded p-4 hover:shadow-lg transition">
        <h2 className="text-lg font-semibold">{h.title}</h2>
        <p>Rent: {h.rent}</p>
        <p>Location: {h.location}</p>
        <p>Contact: {h.contact}</p>
      </div>
    ))}
  </div>
);

export default HousingPage;
