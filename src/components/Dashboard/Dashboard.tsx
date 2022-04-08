import { Widgets } from "./dashboard.model";
import { Widget } from "./Widget";

import "./styles/main.scss";

export interface DashboardProps {
  widgets: Widgets[];
  title: string;
}

export const Dashboard = ({ widgets, title }: DashboardProps) => {
  return (
    <div className="dashboard">
      <h1>{title}</h1>
      {widgets?.map((widget: Widgets) => (
        <Widget content={widget} className="dashboard__widget" />
      ))}
    </div>
  );
};
