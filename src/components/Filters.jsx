const statuses = ["All", "Applied", "Interviewing", "Offer", "Rejected"];

export default function Filters({
  statusFilter,
  onStatusChange,
  searchTerm,
  onSearchChange,
}) {
  return (
    <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
      <div className="flex flex-wrap gap-2">
        {statuses.map((status) => {
          const isActive = statusFilter === status;
          return (
            <button
              key={status}
              onClick={() => onStatusChange(status)}
              className={`px-3 py-1.5 text-xs rounded-full border transition ${
                isActive
                  ? "bg-emerald-500 text-slate-950 border-emerald-500"
                  : "border-slate-700 text-slate-300 hover:border-slate-500"
              }`}
            >
              {status}
            </button>
          );
        })}
      </div>

      <div className="flex-1 md:max-w-xs">
        <input
          type="text"
          placeholder="Search by company or role..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-sm outline-none focus:border-emerald-500"
        />
      </div>
    </section>
  );
}
