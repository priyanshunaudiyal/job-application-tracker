import { useEffect, useMemo, useState } from "react";
import { mockApplications } from "./data/mockApplications";
import { mockProjects } from "./data/mockProjects";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import Filters from "./components/Filters";
import ApplicationsTable from "./components/ApplicationsTable";
import ApplicationFormModal from "./components/ApplicationFormModal";
import ProjectsPage from "./components/ProjectsPage";
import ProjectFormModal from "./components/ProjectFormModal";

const loadInitialApplications = () => {
  if (typeof window === "undefined") return mockApplications;
  try {
    const stored = window.localStorage.getItem("applications");
    return stored ? JSON.parse(stored) : mockApplications;
  } catch (err) {
    console.error("Failed to parse applications from localStorage", err);
    return mockApplications;
  }
};

const loadInitialProjects = () => {
  if (typeof window === "undefined") return mockProjects;
  try {
    const stored = window.localStorage.getItem("projects");
    return stored ? JSON.parse(stored) : mockProjects;
  } catch (err) {
    console.error("Failed to parse projects from localStorage", err);
    return mockProjects;
  }
};

function App() {
  const [applications, setApplications] = useState(loadInitialApplications);
  const [projects, setProjects] = useState(loadInitialProjects);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingApp, setEditingApp] = useState(null);
  const [activePage, setActivePage] = useState("applications");

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    try {
      window.localStorage.setItem("applications", JSON.stringify(applications));
    } catch (err) {
      console.error("Failed to save applications to localStorage", err);
    }
  }, [applications]);

  useEffect(() => {
    try {
      window.localStorage.setItem("projects", JSON.stringify(projects));
    } catch (err) {
      console.error("Failed to save projects to localStorage", err);
    }
  }, [projects]);

  const handleAddApplication = (newApp) => {
    setApplications((prev) => [
      ...prev,
      { ...newApp, id: Date.now() },
    ]);
  };

  const handleUpdateApplication = (updatedApp) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === updatedApp.id ? updatedApp : app))
    );
  };

  const handleDeleteApplication = (id) => {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  };

  const openAddModal = () => {
    setEditingApp(null);
    setIsModalOpen(true);
  };

  const openEditModal = (app) => {
    setEditingApp(app);
    setIsModalOpen(true);
  };

  const handleAddProject = (newProject) => {
    setProjects((prev) => [
      ...prev,
      { ...newProject, id: Date.now() },
    ]);
  };

  const handleUpdateProject = (updatedProject) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === updatedProject.id ? updatedProject : p))
    );
  };

  const handleDeleteProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const openAddProjectModal = () => {
    setEditingProject(null);
    setIsProjectModalOpen(true);
  };

  const openEditProjectModal = (project) => {
    setEditingProject(project);
    setIsProjectModalOpen(true);
  };

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchesStatus =
        statusFilter === "All" || app.status === statusFilter;

      const term = searchTerm.toLowerCase();
      const matchesSearch =
        app.company.toLowerCase().includes(term) ||
        app.role.toLowerCase().includes(term);

      return matchesStatus && matchesSearch;
    });
  }, [applications, statusFilter, searchTerm]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header
        onAddClick={openAddModal}
        activePage={activePage}
        onChangePage={setActivePage}
      />

      <main className="max-w-6xl mx-auto px-4 pb-10">
        {activePage === "applications" ? (
          <>
            <StatsCards applications={applications} />

            <Filters
              statusFilter={statusFilter}
              onStatusChange={setStatusFilter}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            <ApplicationsTable
              applications={filteredApplications}
              onEdit={openEditModal}
              onDelete={handleDeleteApplication}
            />
          </>
        ) : (
          <ProjectsPage
            projects={projects}
            onAddProject={openAddProjectModal}
            onEditProject={openEditProjectModal}
            onDeleteProject={handleDeleteProject}
          />
        )}
      </main>

      {isModalOpen && activePage === "applications" && (
        <ApplicationFormModal
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddApplication}
          onUpdate={handleUpdateApplication}
          editingApp={editingApp}
        />
      )}

      {isProjectModalOpen && activePage === "projects" && (
        <ProjectFormModal
          onClose={() => setIsProjectModalOpen(false)}
          onAdd={handleAddProject}
          onUpdate={handleUpdateProject}
          editingProject={editingProject}
        />
      )}
    </div>
  );
}

export default App;
