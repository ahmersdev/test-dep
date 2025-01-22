import { ComponentType, SVGProps } from "react";

export interface ICountData {
  id: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}
