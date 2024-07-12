import Loading from "@/components/ui/loading.tsx";
import ProjectCard, {Project} from "@/pages/projects/project-card.tsx";
import ItemsNotFound from "@/components/ui/items-not-found.tsx";

export type ProjectLayoutProps = {
    loading: boolean;
    projects: Project[];
}

export default function ProjectLayoutPage({ loading, projects }: ProjectLayoutProps) {
    return (
        <div className="w-full h-fit flex flex-col gap-y-3 p-5">
            {loading ? <Loading size="lg" /> : projects.length <= 0 ? <ItemsNotFound /> :
                projects.map((project: Project, index) => (
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    </div>
                ))
            }
        </div>
    );
}