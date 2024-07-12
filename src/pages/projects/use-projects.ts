import {useEffect, useState} from "react";
import {Project} from "@/pages/projects/project-card.tsx";
import {getAllProjects} from "@/pages/projects/get-all-projects.tsx";

export const useProjects = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [inProcess, setInProcess] = useState<Project[]>([]);
    const [upComing, setUpComing] = useState<Project[]>([]);
    const [completed, setCompleted] = useState<Project[]>([]);

    const fetchAllProjects = () => {
        setLoading(true);
        setUpComing(getAllProjects().filter((project: Project) => project.status === "upcoming"));
        setCompleted(getAllProjects().filter((project: Project) => project.status === "completed"));
        setInProcess(getAllProjects().filter((project: Project) => project.status === "in-process"));
        setLoading(false);
    }

    useEffect(() => {
        fetchAllProjects();
    }, []);

    return {
        loading,
        upComing,
        completed,
        inProcess
    };
}