import Loading from "@/components/ui/loading.tsx";
import ProjectCard, {Project} from "@/pages/projects/project-card.tsx";
import ItemsNotFound from "@/components/ui/items-not-found.tsx";

export type ProjectLayoutProps = {
    loading: boolean;
    projects: Project[];
}

export default function ProjectLayoutPage({ loading, projects }: ProjectLayoutProps) {
    return (
        <>
            {loading ? <Loading size="lg" /> : projects.length <= 0 ? <ItemsNotFound /> :
                projects.map((project: Project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))
            }
        </>
    );
}