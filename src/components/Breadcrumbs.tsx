import { Link } from "react-router-dom";

function getBreadcrumbUrl(breadcrumbName: string) {
  if (breadcrumbName === "Фільми") return "/movies";
  if (breadcrumbName === "Аніме") return "/anime";
  if (breadcrumbName === "Серіали") return "/series";
  if (breadcrumbName === "Мультфільми") return "/cartoons";
  if (breadcrumbName === "Мультсеріали") return "/cartoon-series";
  return "/";
}

type BreadcrumbsProps = {
  breadcrumbs: string[];
};

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <p className="flex flex-wrap gap-1 lg:ml-5">
      {breadcrumbs.slice(0, breadcrumbs.length - 1).map((item) => (
        <>
          <Link
            to={getBreadcrumbUrl(item)}
            className="breadcrumb-previous hover:text-white">
            {item}
          </Link>
          <span className="breadcrumb-previous select-none">{" > "}</span>
        </>
      ))}
      <span>{breadcrumbs[breadcrumbs.length - 1]}</span>
    </p>
  );
}
