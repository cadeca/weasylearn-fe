export interface DemoType {
  demoAttribute: string;
  optionalAtribute?: string;
}

export interface CourseSubject {
  name: string;
  code: string;
  description: string;
  semester: number;
}

export interface SidebarEntry {
  code: string;
  route: string;
  icon: string;
  whitelistedRoles: string[];
  children?: SidebarEntry[];
}

export interface User {
  firstName: string;
  lastName: string;
}
