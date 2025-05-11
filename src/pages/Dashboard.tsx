import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import TaskCard from '../components/TaskCard';
import NotesSection from '../components/NotesSection';
import ChatBot from '../components/ChatBot';
import QuerySection from '../components/QuerySection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock user data
const userProfile = {
  name: "John Doe",
  role: "Software Developer",
  avatar: "/path-to-avatar.jpg",
  email: "john.doe@example.com"
};

// Mock data for assigned tasks
const assignedTasks = [
  {
    id: 1,
    name: 'Update User Interface',
    status: 'in progress',
    progress: 65,
    deadline: '2025-05-20',
    assignee: 'You',
    description: 'Revamp the dashboard UI with the new design system elements and ensure mobile responsiveness.'
  },
  {
    id: 2,
    name: 'API Integration',
    status: 'pending',
    progress: 10,
    deadline: '2025-05-25',
    assignee: 'You',
    description: 'Integrate the new backend API endpoints with the frontend components and implement proper error handling.'
  },
  {
    id: 3,
    name: 'Testing Documentation',
    status: 'completed',
    progress: 100,
    deadline: '2025-05-15',
    assignee: 'You',
    description: 'Document all test cases for the new features and share with the QA team.'
  },
  {
    id: 4,
    name: 'Performance Optimization',
    status: 'pending',
    progress: 0,
    deadline: '2025-05-30',
    assignee: 'You',
    description: 'Analyze and optimize the application performance, focusing on component render times and network requests.'
  }
];

const Dashboard = () => {
  const [tasks, setTasks] = useState(assignedTasks);
  
  // Calculate task statistics
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in progress').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;

  const handleStatusChange = (taskId: number, newStatus: string) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        // If task is being marked as completed, set progress to 100%
        if (newStatus === 'completed') {
          return { ...task, status: newStatus, progress: 100 };
        }
        return { ...task, status: newStatus };
      }
      return task;
    }));
  };
  
  return (
    <DashboardLayout title="Personal Dashboard">
      {/* Profile Section */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback className="bg-gradient-to-br from-tritonexus-purple to-tritonexus-pink text-white text-xl">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{userProfile.name}</h2>
              <p className="text-muted-foreground">{userProfile.role}</p>
              <p className="text-sm text-muted-foreground">{userProfile.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-tritonexus-purple/5 to-tritonexus-pink/5 border-tritonexus-purple/30">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-muted-foreground text-sm">Assigned Tasks</h3>
                <p className="text-3xl font-bold">{tasks.length}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-tritonexus-purple/20 to-tritonexus-pink/20 flex items-center justify-center">
                <span className="text-xl text-tritonexus-purple">A</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-500/5 to-green-600/5 border-green-500/30">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-muted-foreground text-sm">Completed</h3>
                <p className="text-3xl font-bold">{completedTasks}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-xl text-green-500">C</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border-amber-500/30">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-muted-foreground text-sm">Pending</h3>
                <p className="text-3xl font-bold">{pendingTasks}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                <span className="text-xl text-amber-500">P</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <span className="bg-tritonexus-purple/20 text-tritonexus-purple w-6 h-6 rounded-full inline-flex items-center justify-center mr-2">
                  <span className="text-xs">T</span>
                </span>
                My Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="pending" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="pending" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tasks
                      .filter(task => task.status === 'pending')
                      .map(task => (
                        <TaskCard 
                          key={task.id} 
                          task={task} 
                          onStatusChange={handleStatusChange}
                        />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="in-progress" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tasks
                      .filter(task => task.status === 'in progress')
                      .map(task => (
                        <TaskCard 
                          key={task.id} 
                          task={task} 
                          onStatusChange={handleStatusChange}
                        />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="completed" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tasks
                      .filter(task => task.status === 'completed')
                      .map(task => (
                        <TaskCard 
                          key={task.id} 
                          task={task} 
                          onStatusChange={handleStatusChange}
                          isCompleted={true}
                        />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          {/* Query Section */}
          <div className="mt-6">
            <QuerySection />
          </div>
        </div>
        
        {/* Right Column - Notes and Chatbot */}
        <div>
          <div className="space-y-6">
            <NotesSection />
          </div>
          <div>
            <ChatBot/>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;