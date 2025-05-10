
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Check, Loader2, AlertTriangle, Activity, UserPlus, Pen, Trash, ArrowUp, ArrowDown, Clock } from 'lucide-react';
import AdminStats from '@/components/AdminStats';
import TeamTaskPanel from '@/components/TeamTaskPanel';
import SuggestionFeedback from '@/components/SuggestionFeedback';
import ActivityLogSection from '@/components/ActivityLogSection';

const Admin = () => {
  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="space-y-6">
        {/* Stats Overview Section */}
        <AdminStats />
        
        {/* Team Task Management Panel */}
        <TeamTaskPanel />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Suggestion & Feedback Box */}
          <SuggestionFeedback />
          
          {/* Activity Log */}
          <ActivityLogSection />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Admin;
