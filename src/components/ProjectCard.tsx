interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
}

export function ProjectCard({ title, category, year }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/3] bg-black/5 mb-4 group-hover:bg-black/10 transition-colors duration-200" />
      <h4 className="font-title  mb-2">
        {title}
      </h4>
      <p className="font-body  text-sm text-black/60 mb-1">
        {category}
      </p>
      <p className="font-body  text-xs text-black/40">
        {year}
      </p>
    </div>
  );
}
