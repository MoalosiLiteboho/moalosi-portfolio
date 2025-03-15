import {useEffect, useState} from "react";
import {Project} from "@/components/ui/project-card.tsx";
import {getAllProjects} from "@/pages/projects/get-all-projects.tsx";

export const useProjects = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [projects, setProjects] = useState<Project[]>([])

    const fetchAllProjects = () => {
        setLoading(true);
        setProjects(getAllProjects());
        setLoading(false);
    }

    useEffect(() => {
        fetchAllProjects();
    }, []);

    return {
        loading,
        projects
    };
}