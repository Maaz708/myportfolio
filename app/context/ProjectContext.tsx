// app/context/ProjectContext.tsx
"use client";
import React, { createContext, useContext, useState } from 'react';

interface Project {
    title: string;
    description: string;
    image: File | null;
}

interface ProjectContextType {
    projects: Project[];
    addProject: (project: Project) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>([]);

    const addProject = (project: Project) => {
        setProjects((prev) => [...prev, project]);
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProject = () => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error('useProject must be used within a ProjectProvider');
    }
    return context;
};