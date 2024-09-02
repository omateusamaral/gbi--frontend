export interface BreadCrumbProps {
  breadCrumbs: BreadCrumbItem[];
  title?: string;
}

export interface BreadCrumbItem {
  label: string;
  path: string;
}
