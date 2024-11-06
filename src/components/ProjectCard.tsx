import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string[];
  skills: string[];
  Icon: LucideIcon;
  gradient: string;
  borderColor: string;
}

export default function ProjectCard({ title, description, skills, Icon, gradient, borderColor }: ProjectCardProps) {
  return (
    <div className={`${gradient} p-8 rounded-xl border ${borderColor}`}>
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-blue-400 mr-3" />
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2 text-gray-300 mb-6">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-400 mr-2">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}