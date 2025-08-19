const maids = [
  { id: 1, name: 'Sita', experience: 2, contact: '111-222', services: 'Cooking,Cleaning', rate: 1500 },
];

const MaidPage = () => (
  <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-3 gap-4">
    {maids.map((m) => (
      <div key={m.id} className="bg-white shadow rounded p-4 hover:shadow-lg transition">
        <h2 className="text-lg font-semibold">{m.name}</h2>
        <p>Experience: {m.experience} yrs</p>
        <p>Contact: {m.contact}</p>
        <p>Services: {m.services}</p>
        <p>Rate: {m.rate}</p>
      </div>
    ))}
  </div>
);

export default MaidPage;
