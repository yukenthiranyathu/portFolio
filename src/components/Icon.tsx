
'use client';

import React from 'react';
import { Github, Linkedin, Mail, Phone, LucideProps, type LucideIcon } from 'lucide-react';

const icons = {
  Github,
  Linkedin,
  Mail,
  Phone,
};

type IconName = keyof typeof icons;

interface IconProps extends LucideProps {
  name: IconName;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name] as LucideIcon;
  if (!LucideIcon) {
    return null; // Or return a default icon
  }
  return <LucideIcon {...props} />;
};

export { Icon, type IconName };
