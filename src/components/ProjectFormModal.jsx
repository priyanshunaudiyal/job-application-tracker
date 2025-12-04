import { useEffect, useState } from "react";

const typeOptions = ["Personal", "Professional"];

export default function ProjectFormModal({
  onClose,
  onAdd,
  onUpdate,
  editingProject,
}) {
  const [form, setForm] = useState({
    title: "",
    role: "",
    description: "",
    techStack: "",
    projectType: "Personal",
    completionDate: "",
    githubUrl: "",
    liveUrl: "",
  });

  useEffect(() => {
    if (editingProject) {
      setForm(editingProject);
    }
  }, [editingProject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    if (editingProject) {
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
            {editingProject ? "Edit Project" : "Add Project"}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 text-sm"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
          <div>
            <label className="block mb-1 text-xs text-slate-400">
              Project Title *
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 text-xs text-slate-400">
                Role / Tagline
              </label>
              <input
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500"
                placeholder="Personal Project · React + Node"
              />
            </div>

            <div>
              <label className="block mb-1 text-xs text-slate-400">
                Tech Stack
              </label>
              <input
                name="techStack"
                value={form.techStack}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500"
                placeholder="React, Node.js, MongoDB"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block mb-1 text-xs text-slate-400">
                Project Type
              </label>
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500"
              >
                {typeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 text-xs text-slate-400">
                Completion Date
              </label>
              <input
                type="date"
                name="completionDate"
                value={form.completionDate}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500"
              />
            </div>

            <div className="hidden md:block" />
          </div>

          <div>
            <label className="block mb-1 text-xs text-slate-400">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500 resize-none"
              placeholder="Short summary of what this project does and what you worked on."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 text-xs text-slate-400">
                GitHub URL
              </label>
              <input
                name="githubUrl"
                value={form.githubUrl}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500"
                placeholder="https://github.com/..."
              />
            </div>
            <div>
              <label className="block mb-1 text-xs text-slate-400">
                Live Demo URL
              </label>
              <input
                name="liveUrl"
                value={form.liveUrl}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 outline-none focus:border-emerald-500"
                placeholder="https://your-project.vercel.app"
              />
            </div>
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
              {editingProject ? "Save Changes" : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
