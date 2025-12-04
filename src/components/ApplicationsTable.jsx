const statusColors = {
  Applied: "bg-slate-800 text-slate-100",
  Interviewing: "bg-blue-500/20 text-blue-300",
  Offer: "bg-emerald-500/20 text-emerald-300",
  Rejected: "bg-rose-500/20 text-rose-300",
};

export default function ApplicationsTable({ applications, onEdit, onDelete }) {
  if (!applications.length) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-sm text-slate-400">
        No applications match the current filters.
      </div>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-slate-900/80 border-b border-slate-800">
          <tr className="text-left text-xs text-slate-400">
            <th className="px-4 py-3">Company</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Applied On</th>
            <th className="px-4 py-3 hidden md:table-cell">Location</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr
              key={app.id}
              className="border-b border-slate-800/60 last:border-0"
            >
              <td className="px-4 py-3 align-top">
                <p className="font-medium text-slate-50">{app.company}</p>
                <p className="text-xs text-slate-400 md:hidden">
                  {app.location}
                </p>
              </td>
              <td className="px-4 py-3 align-top">
                <p>{app.role}</p>
                <p className="text-xs text-slate-500 md:hidden">
                  {app.appliedOn}
                </p>
              </td>
              <td className="px-4 py-3 align-top">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    statusColors[app.status] || "bg-slate-800 text-slate-100"
                  }`}
                >
                  {app.status}
                </span>
              </td>
              <td className="px-4 py-3 align-top text-slate-300 hidden md:table-cell">
                {app.appliedOn}
              </td>
              <td className="px-4 py-3 align-top text-slate-300 hidden md:table-cell">
                {app.location}
              </td>
              <td className="px-4 py-3 align-top text-right">
                <button
                  onClick={() => onEdit(app)}
                  className="text-xs mr-2 underline text-slate-300 hover:text-emerald-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(app.id)}
                  className="text-xs underline text-rose-400 hover:text-rose-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
