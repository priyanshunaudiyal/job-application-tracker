const statusLabels = ["Applied", "Interviewing", "Offer", "Rejected"];

export default function StatsCards({ applications }) {
  const total = applications.length;
  const counts = statusLabels.reduce((acc, status) => {
    acc[status] = applications.filter((a) => a.status === status).length;
    return acc;
  }, {});

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
        <p className="text-xs text-slate-400">Total Applications</p>
        <p className="text-2xl font-semibold mt-1">{total}</p>
      </div>

      {statusLabels.map((status) => (
        <div
          key={status}
          className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4"
        >
          <p className="text-xs text-slate-400">{status}</p>
          <p className="text-2xl font-semibold mt-1">{counts[status] || 0}</p>
        </div>
      ))}
    </section>
  );
}
