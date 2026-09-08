import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "../constants.js";

export const Project = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <h3 className="text-xl md:text-xl lg:text-xl font-bold text-center bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse mt-8">
                    Stay Tuned for Upcoming Exciting Major Projects
                </h3>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                                    <a
                                        href={project.webapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105"
                                    >
                                        <ExternalLink size={15} /> Live
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 bg-background/90 text-foreground text-sm font-medium border border-border px-4 py-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:scale-105"
                                    >
                                        <Github size={15} /> Code
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1 text-foreground"> {project.title}</h3>
                                <p className="text-foreground/60 text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center pt-3 border-t border-border">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.webapp}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/70 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/70 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/AKIB-FAISAL"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};