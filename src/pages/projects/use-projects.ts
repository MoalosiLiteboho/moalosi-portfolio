import {useEffect, useState} from "react";
import axios from "@/api/data-api.ts";
import {Project} from "@/pages/projects/project-card.tsx";

export const useProjects = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [inProcess, setInProcess] = useState<Project[]>([]);
    const [upComing, setUpComing] = useState<Project[]>([]);
    const [completed, setCompleted] = useState<Project[]>([]);

    const fetchAllProjects = () => {
        setLoading(true);
        getAllProjects().then(res => {
            setUpComing(res.data.filter((project: Project) => project.status === "upcoming"));
            setCompleted(res.data.filter((project: Project) => project.status === "completed"));
            setInProcess(res.data.filter((project: Project) => project.status === "in-process"));
        }).finally(() => {
           setLoading(false);
        });
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

const getAllProjects = async () => {
    return await axios.get('/api/v1/projects');
}