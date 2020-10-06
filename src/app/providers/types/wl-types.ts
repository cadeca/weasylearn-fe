// SUBJECT INTERFACES
export interface CourseSubject {
  name: string;
  code: string;
  description?: string;
  semester?: number;
  teacher?: Teacher;
  tutors?: User[];
  students?: Student[];
  groups?: StudentsGroup[];
  id?: number;
}

export interface SaveCourseSubject {
  name: string;
  code: string;
  description?: string;
  semester?: number;
  teacher?: string;
  tutors?: string[];
  students?: string[];
  groups?: StudentsGroup[];
  id?: number;
}

export interface SidebarEntry {
  code: string;
  route: string;
  icon: string;
  whitelistedRoles: string[];
  children?: SidebarEntry[];
}

export interface TimeAndLocation {
  dateTime: Date;
  location: string;
}

// USER INTERFACES
export interface User {
  firstName?: string;
  lastName?: string;
  username?: string;
  email: string;
  type?: string;
}

export interface Teacher extends User {
  grade?: string;
  areaOfExpertise?: string;
}

export interface Student extends User {
  schoolYear?: SchoolYear[];
}

export interface SchoolYear {
  year?: string;
  school?: string;
}

export interface StudentsGroup {
  name: string;
  code: string;
  classTimeAndLocation: TimeAndLocation[];
  students: Student[];
}
