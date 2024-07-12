import {Tab, Tabs} from "@nextui-org/react";
import ProjectLayoutPage from "@/pages/projects/project-layout.tsx";
import {useProjects} from "@/pages/projects/use-projects.ts";

export default function ProjectPage() {
    const {loading, upComing, completed, inProcess} = useProjects();

    return (
        <section className="w-full h-screen p-2">
            <div className="px-2 pt-2">
                <Tabs
                    aria-label="projects-categories-tabs"
                    color="primary"
                    variant="bordered"
                    radius="full"
                >
                    <Tab key="completed" title="Completed">
                        <ProjectLayoutPage
                            loading={loading}
                            projects={completed}
                        />
                    </Tab>
                    <Tab key="inprocess" title="Inprocess">
                        <ProjectLayoutPage
                            loading={loading}
                            projects={inProcess}
                        />
                    </Tab>
                    <Tab key="upcoming" title="Upcoming">
                        <ProjectLayoutPage
                            loading={loading}
                            projects={upComing}
                        />
                    </Tab>
                </Tabs>
            </div>
        </section>
    );
}