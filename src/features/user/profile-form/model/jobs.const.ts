export type jobEnum =
  | 'swe'
  | 'designer'
  | 'uiux'
  | 'student'
  | 'educator'
  | 'researcher'
  | 'pm'
  | 'data'
  | 'marketing'
  | 'creator'
  | 'business'
  | 'entrepreneur'
  | 'freelancer'
  | 'sales';

export const jobs: { value: jobEnum; label: string }[] = [
  {
    value: 'swe',
    label: 'Software Engineer',
  },
  {
    value: 'designer',
    label: 'Designer',
  },
  {
    value: 'uiux',
    label: 'UI/UX Designer',
  },
  {
    value: 'student',
    label: 'Student',
  },
  {
    value: 'educator',
    label: 'Educator',
  },
  {
    value: 'researcher',
    label: 'Researcher',
  },
  {
    value: 'pm',
    label: 'Product Manager',
  },
  {
    value: 'data',
    label: 'Data Scientist',
  },
  {
    value: 'marketing',
    label: 'Marketing Specialist',
  },
  {
    value: 'creator',
    label: 'Content Creator',
  },
  {
    value: 'business',
    label: 'Business Analyst',
  },
  {
    value: 'entrepreneur',
    label: 'Entrepreneur',
  },
  {
    value: 'freelancer',
    label: 'Freelancer',
  },
  {
    value: 'sales',
    label: 'Sales',
  },
] as const;
