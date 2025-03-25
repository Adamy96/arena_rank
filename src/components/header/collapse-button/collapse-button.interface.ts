export interface ICollapseButton {
  icon: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  size: number;
  backgroundColor: string;
  color: string;
  text: string;
  collapsed: boolean;
  onClick: () => any;
}
