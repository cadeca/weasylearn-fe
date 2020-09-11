export interface DemoType  {
  demoAttribute: string;
  optionalAtribute?: string;
}

export interface CourseSubject  {
  name: string;
  code?: string;
  teacher?: string;
}

export interface SidebarEntry {
  code: string;
  route: string;
  icon: string;
  whitelistedRoles: string[];
  children?: SidebarEntry[];
}
