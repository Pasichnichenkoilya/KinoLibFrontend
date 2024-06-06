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
    <p className="flex flex-wrap gap-1 lg:ml-5 pr-6">
      {breadcrumbs.slice(0, breadcrumbs.length - 1).map((item) => (
        <span key={item}>
          <Link
            to={getBreadcrumbUrl(item)}
            style={{
              color: "#6a6a6a",
            }}
            className="hover:text-white">
            {item}
          </Link>
          <span
            style={{
              color: "#6a6a6a",
            }}
            className="select-none">
            {" > "}
          </span>
        </span>
      ))}
      <span>{breadcrumbs[breadcrumbs.length - 1]}</span>
    </p>
  );
}
