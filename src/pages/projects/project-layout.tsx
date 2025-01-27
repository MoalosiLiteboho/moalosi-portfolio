import {useCallback, useMemo, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {Input, Pagination} from "@heroui/react";
import {FaMagnifyingGlass} from "react-icons/fa6";
import Loading from "@/components/ui/loading.tsx";
import ProjectCard, {Project} from "@/pages/projects/project-card.tsx";
import ItemsNotFound from "@/components/ui/items-not-found.tsx";

export type ProjectLayoutProps = {
    loading: boolean;
    projects: Project[];
}

export default function ProjectLayoutPage({ loading, projects }: ProjectLayoutProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const projectsPerPage = 8;
    const [page, setPage] = useState<number>(1);
    const pages = Math.ceil(projects.length / projectsPerPage);
    const hasSearchFilter = Boolean(searchParams.get("search") || '');

    const filteredItems: Project[] = useMemo(() => {
        let filteredProjects: Project[] = [...projects];

        if(hasSearchFilter) filteredProjects = filteredProjects.filter(project => project.name
            .toLowerCase()
            .includes((searchParams.get("search") || '').toLowerCase())
        );

        return filteredProjects;
    }, [projects, hasSearchFilter, searchParams]);

    const items: Project[] = useMemo(() => {
        const start: number = (page - 1) * projectsPerPage;
        const end: number = start + projectsPerPage;

        return filteredItems.slice(start, end)
    }, [projectsPerPage, filteredItems, page]);

    const onSearchChange = useCallback((searchedProject?: string) => {
        if (searchedProject) {
            if(searchParams.get("tab") || '') setSearchParams({"tab": String(searchParams.get("tab")), "search" : searchedProject}, {replace: true});
            else setSearchParams({"search" : searchedProject}, {replace: true});
            setPage(1);

        } else {
            if(searchParams.get("tab") || '') setSearchParams({"tab": String(searchParams.get("tab"))}, {replace: true});
            else setSearchParams({}, {replace: true});
        }
    }, [searchParams, setSearchParams]);

    const onClear = useCallback(()=>{
        if(searchParams.get("tab") || '') setSearchParams({"tab": String(searchParams.get("tab"))}, {replace: true});
        else setSearchParams({}, {replace: true});
        setPage(1);
    },[searchParams, setSearchParams]);

    return (
        <div className="w-full h-fit flex flex-col gap-y-3">
            <div className="flex justify-between gap-3 items-end">
                <Input
                    isClearable
                    size="md"
                    variant="bordered"
                    className="w-full md:max-w-[50%] lg:max-w-[35%]"
                    placeholder="Search by project name..."
                    startContent={<FaMagnifyingGlass className="text-gray-400" />}
                    value={searchParams.get("search") || ''}
                    onClear={() => onClear()}
                    onValueChange={onSearchChange}
                />
            </div>
            {loading ? <Loading /> : projects.length <= 0 ? <ItemsNotFound message="No Projects Found..." /> :
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                    {items.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
            }
            <div className="py-2 px-2 flex justify-center items-center">
                {pages <= 1 ? <></> :
                    <Pagination
                        isCompact
                        showShadow
                        showControls
                        variant="light"
                        color="primary"
                        isDisabled={hasSearchFilter}
                        initialPage={1}
                        page={page}
                        total={pages}
                        onChange={setPage}
                    />
                }
            </div>
        </div>
    );
}