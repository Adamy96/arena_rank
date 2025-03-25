interface ISearchBarProps {
  onSearch: (query: string) => void;
  onClick: (e?: any) => any;
  placeholder?: string;
  className?: string;
}
