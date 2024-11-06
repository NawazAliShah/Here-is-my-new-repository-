import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
      <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-indigo-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}