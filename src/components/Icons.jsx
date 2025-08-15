
import React from 'react';
import { UserPlus, Linkedin } from 'lucide-react';

export const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
  </svg>
);

export const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const LinkedInIcon = ({ className }) => (
  <Linkedin className={className} />
);

export const WebsiteIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

export const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.08 4.92C17.03 2.86 14.59 1.83 12.01 1.83C6.49 1.83 2 6.31 2 11.84C2 13.81 2.58 15.68 3.62 17.25L2.44 21.56L6.93 20.39C8.42 21.33 10.15 21.84 12.01 21.84H12.02C17.54 21.84 22.01 17.36 22.01 11.84C22.02 9.26 21.13 6.97 19.08 4.92ZM12.01 20.14H12C10.28 20.14 8.65 19.62 7.29 18.69L6.91 18.44L4.25 19.12L4.95 16.53L4.68 16.14C3.66 14.7 3.11 12.99 3.11 11.14C3.11 7.03 7.13 3.01 12.02 3.01C14.28 3.01 16.33 3.88 17.93 5.48C19.53 7.08 20.39 9.14 20.39 11.34C20.39 15.45 16.41 19.43 12.01 20.14V20.14ZM16.56 14.21C16.27 14.06 14.88 13.37 14.61 13.27C14.33 13.18 14.14 13.13 13.94 13.43C13.75 13.72 13.22 14.36 13.02 14.56C12.83 14.75 12.63 14.8 12.34 14.65C12.05 14.51 11.08 14.19 9.94 13.19C9.02 12.41 8.42 11.45 8.27 11.15C8.12 10.86 8.27 10.74 8.41 10.6C8.54 10.48 8.7 10.28 8.85 10.11C9 9.93 9.05 9.81 9.19 9.56C9.34 9.32 9.29 9.12 9.22 8.98C9.14 8.83 8.65 7.6 8.45 7.11C8.26 6.62 8.06 6.66 7.92 6.65H7.52C7.32 6.65 7.03 6.75 6.78 7.05C6.54 7.34 5.92 7.92 5.92 9.17C5.92 10.42 6.83 11.62 6.98 11.81C7.12 12 8.69 14.33 11.01 15.26C11.53 15.48 11.91 15.61 12.21 15.7C12.71 15.84 13.18 15.81 13.52 15.73C13.91 15.64 15.04 15.03 15.28 14.41C15.52 13.79 15.52 13.27 15.42 13.18C15.33 13.08 15.13 13.03 14.94 12.93C14.75 12.84 14.75 12.84 14.56 12.79C14.36 12.74 14.36 12.74 14.17 12.69C13.97 12.64 13.97 12.64 13.97 12.64C13.97 12.64 13.97 12.64 13.97 12.64C13.97 12.64 16.85 14.36 16.56 14.21Z"/>
  </svg>
);

export const CadastroIcon = ({ className }) => (
  <UserPlus className={className} />
);
