import { compareDesc, parseISO } from 'date-fns';

// Ensure 'cx' is defined only once
export const cx = (...classNames) => classNames.filter(Boolean).join(' ');

// Ensure 'sortBlogs' uses consistent types
export const sortBlogs = (blogs) => {
  return blogs.slice().sort((a, b) =>
    compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
  );
};