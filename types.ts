/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

export type SimulationPhase = 'setup' | 'config' | 'blueprint' | 'weaving' | 'complete';

export interface UserConfig {
  githubToken: string;
  username: string;
  targetRepo: string;
  startDate: string;
  endDate: string;
  techStack: string;
  intensity: number; // 1-10
  strategy: 'gitflow' | 'github-flow' | 'trunk';
  includeLfs: boolean;
  achievements: string[];
}

export interface GitEvent {
  id: string;
  date: string;
  type: 'commit' | 'branch' | 'merge' | 'issue' | 'pr' | 'tag';
  title: string;
  description: string;
  branch?: string;
  filesChanged?: number;
  author: string;
  tags?: string[]; // e.g., 'feat', 'fix'
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface LogEntry {
  timestamp: string;
  level: 'info' | 'success' | 'warning' | 'error';
  message: string;
}

export interface SimulationStats {
  totalCommits: number;
  totalPRs: number;
  totalIssues: number;
  filesChanged: number;
  achievementsUnlocked: string[];
}
