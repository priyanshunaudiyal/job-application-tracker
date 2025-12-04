import { useEffect, useState } from "react";

const statusOptions = ["Applied", "Interviewing", "Offer", "Rejected"];

export default function ApplicationFormModal({
  onClose,
  onAdd,
  onUpdate,
  editingApp,
}) {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    appliedOn: "",
    location: "",
    notes: "",
  });

  useEffect(() => {
    if (editingApp) {
      setForm(editingApp);
    }
  }, [editingApp]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingApp) {
      onUpdate(form);
    } else {
      onAdd(form);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
      <div className="w-full max-w-lg rounded-2xl bg-slate-950 border border-slate-800 p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">
            {editingApp ? "Edit Application" : "Add Application"}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 text-sm"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 text-xs text-slate-400">
                Company
              </label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-xs text-slate-400">
                Role
              </label>
              <input
                name="role"
                value={form.role}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block mb-1 text-xs text-slate-400">
                Status
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500"
              >
                {statusOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 text-xs text-slate-400">
                Applied On
              </label>
              <input
                type="date"
                name="appliedOn"
                value={form.appliedOn}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-xs text-slate-400">
                Location
              </label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-xs text-slate-400">
              Notes
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500 resize-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 text-xs rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium"
            >
              {editingApp ? "Save Changes" : "Add Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
