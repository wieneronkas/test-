export type ContactHeadline = {
  title: string;
  subtitle: string;
  highlight: string;
};

export type ContactItem = {
  platform: string;
  icon: string;
  href: string;
};

export type ContactFormField = {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
  rows?: number;
  type: 'text' | 'email' | 'textarea';
  colSpan?: 'full' | 'half';
};

export type ContactFormConfig = {
  button: {
    label: string;
  };
  fields: ContactFormField[];
};

export type ContactContent = {
  headline: ContactHeadline;
  contacts: ContactItem[];
  formConfig: ContactFormConfig;
};
