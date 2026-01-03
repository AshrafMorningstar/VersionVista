/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { Achievement } from './types';
import { Trophy, GitPullRequest, Zap, Users, Crosshair } from 'lucide-react';

export const TECH_STACKS = [
  'React & TypeScript',
  'Node.js Microservices',
  'Python Data Science',
  'Rust Systems Programming',
  'Go Backend',
  'Flutter Mobile App',
  'Next.js Fullstack'
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'pull_shark',
    name: 'Pull Shark',
    description: 'Efficient PR creation and merging cycles.',
    icon: 'GitPullRequest',
    color: 'text-blue-400'
  },
  {
    id: 'galaxy_brain',
    name: 'Galaxy Brain',
    description: 'High-quality discussion simulations on issues.',
    icon: 'Zap',
    color: 'text-purple-400'
  },
  {
    id: 'pair_extraordinaire',
    name: 'Pair Extraordinaire',
    description: 'Frequent co-authored commits.',
    icon: 'Users',
    color: 'text-green-400'
  },
  {
    id: 'yolo',
    name: 'YOLO',
    description: 'Direct-to-main commits simulated.',
    icon: 'Crosshair',
    color: 'text-orange-400'
  },
  {
    id: 'quickdraw',
    name: 'Quickdraw',
    description: 'Rapid issue responses and closures.',
    icon: 'Trophy',
    color: 'text-yellow-400'
  }
];

export const DEFAULT_CONFIG = {
  githubToken: '',
  username: 'Ashraf-Morningstar',
  targetRepo: 'history-weaver-demo',
  startDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().split('T')[0],
  endDate: new Date().toISOString().split('T')[0],
  techStack: 'React & TypeScript',
  intensity: 7,
  strategy: 'gitflow' as const,
  includeLfs: true,
  achievements: ['pull_shark', 'pair_extraordinaire']
};
