import { templateComponents } from "./dashboard.config";
import { Widgets } from "./dashboard.model";

export interface WidgetProps {
  content: Widgets;
  className?: string;
}

export const Widget = ({ content, className }: WidgetProps) => {
  const WidgetComponent = templateComponents[content.config.template];
  const customClass = className && `${className} `;
  const position = content.config.position.toLowerCase();

  return (
    <div className={`${customClass}widget widget--${position}`}>
      <WidgetComponent content={content} />
    </div>
  );
};
