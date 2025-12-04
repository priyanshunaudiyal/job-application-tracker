# Job Application Tracker

A simple and efficient Job & Project Tracking Dashboard built using React, Vite, and Tailwind CSS.  
This application allows users to manage job applications and personal/professional projects in one place with a clean, responsive interface.

Live Demo: [https://job-application-tracker.vercel.app  ](https://job-application-tracker-ashy-six.vercel.app)
Repository: https://github.com/priyanshunaudiyal/job-application-tracker

## Features

### Job Application Management

- Add, edit, and delete job applications
- Track company, role, status, date, location, and notes
- Search applications
- Filter by status (Applied, Interviewing, Offer, Rejected)
- Summary cards showing application statistics

### Project Tracking

- Add, edit, and delete projects
- Grid-based layout for displaying project cards
- Fields include title, description, tech stack, project type, completion date, GitHub link, and live URL
- Works as a built-in mini portfolio manager

### Data Persistence

- All project and application data is saved using localStorage
- Data remains available after refresh or browser restart

### Interface

- Built with Tailwind CSS
- Fully responsive layout
- Clean, modern dark theme

## Tech Stack

- React 18 (Vite)
- Tailwind CSS
- JavaScript
- localStorage (client-side persistence)

## Project Structure

```text
src/
  components/
    Header.jsx
    StatsCards.jsx
    Filters.jsx
    ApplicationsTable.jsx
    ApplicationFormModal.jsx
    ProjectsPage.jsx
    ProjectFormModal.jsx
  data/
    mockApplications.js
    mockProjects.js
  App.jsx
  main.jsx
  index.css

index.html
