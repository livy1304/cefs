export interface Complaint {
    createdAt(createdAt: any): unknown;
    _id: string;
    courseCode?: string;
    courseName?: string;
    recieptURL?: string;
    studentNumber: string;
    courseLecturer?: string;
    registrationNumber: string;
    correctAcademicYear?: string;
    academicYearOfSitting?: string;
    academicYearAllocated?: string;
    semester?: 'ONE' | 'TWO' | 'THREE';
    nature?: 'REMARK' | 'MISSING_MARK' | 'WRONG_ACADEMIC_YEAR';
    status?: 'SUMBITED' | 'PENDING' | 'RESOLVED';
}

export enum NATURE {
    MISSING_MARK = 'MISSING_MARKS',
    REMARK = 'REMARK',
    WRONG_ACADEMIC_YEAR = 'WRONG_ACADEMIC_YEAR',
}

export enum DESIGNATIONS {
    STUDENT = 'STUDENT',
    LECTURER = 'LECTURER',
    REGISTRAR = 'REGISTRAR',
    HOD = 'HOD',
}

export enum GENDER {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}

export enum SEMESTER {
    ONE = 'ONE',
    TWO = 'TWO',
    THREE = 'THREE',
}

export enum COMPLAINT_STATUSES {
    SUBMITTED = 'SUBMITTED',
    PENDING = 'PENDING',
    RESOLVED = 'RESOLVED',
}