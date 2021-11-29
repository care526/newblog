export interface MenuItem {
  text: string;
  link?: string;
  logo?: string;
  title?: string;
  children?: MenuItem[];
}
