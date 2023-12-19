import { parseISO, format } from 'date-fns';

export const formatDate = (date: string, formatType: string): string => {
  return format(parseISO(date), formatType);
};
