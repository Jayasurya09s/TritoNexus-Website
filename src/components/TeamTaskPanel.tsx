
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { UserPlus, Pen, Trash } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  initials: string;
  tasksAssigned: number;
  tasksCompleted: number;
  progress: number;
}

const TeamTaskPanel = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock team member data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Anshuman pati",
      role: "Hardware Lead",
      avatar: "",
      initials: "AJ",
      tasksAssigned: 12,
      tasksCompleted: 8,
      progress: 67
    },
    {
      id: 2,
      name: "Aman Kumar Singh",
      role: "Software Member",
      avatar: "",
      initials: "BS",
      tasksAssigned: 15,
      tasksCompleted: 7,
      progress: 46
    },
      {
      id: 3,
      name: "Darshil Nathwani",
      role: "Software Lead",
      avatar: "",
      initials: "FC",
      tasksAssigned: 9,
      tasksCompleted: 4,
      progress: 44
    },
    {
      id: 4,
      name: "Dhruva K.R",
      role: "Hardware Member",
      avatar: "",
      initials: "CR",
      tasksAssigned: 10,
      tasksCompleted: 9,
      progress: 90
    },
    {
      id: 5,
      name: "Jayanth Midde",
      role: "Designing Engineer",
      avatar: "",
      initials: "DL",
      tasksAssigned: 8,
      tasksCompleted: 5,
      progress: 63
    },
    {
      id: 6,
      name: "Musaddik",
      role: "Software Member",
      avatar: "",
      initials: "EW",
      tasksAssigned: 14,
      tasksCompleted: 10,
      progress: 71
    },
    {
      id: 7,
      name: "Navya K.M",
      role: "Hardware Member",
      avatar: "",
      initials: "FC",
      tasksAssigned: 9,
      tasksCompleted: 4,
      progress: 44
    },
    {
      id: 8,
      name: "Varsha Nazare",
      role: "Software Member",
      avatar: "",
      initials: "FC",
      tasksAssigned: 9,
      tasksCompleted: 4,
      progress: 44
    }
  ];

  const handleOpenMemberDetails = (member: TeamMember) => {
    setSelectedMember(member);
    setIsDialogOpen(true);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Team Task Management</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {teamMembers.map((member) => (
          <Card 
            key={member.id}
            className="border border-border/50 bg-background/70 backdrop-blur-lg hover:shadow-lg hover:shadow-tritonexus-purple/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            onClick={() => handleOpenMemberDetails(member)}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12 border-2 border-tritonexus-purple-light">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-tritonexus-purple to-tritonexus-pink text-white">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-md font-medium">{member.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm mb-2">
                <span className="font-medium">{member.tasksCompleted}</span>
                <span className="text-muted-foreground"> / {member.tasksAssigned} tasks completed</span>
              </div>
              <div className="relative pt-1 mb-4">
                <Progress 
                  value={member.progress} 
                  className="h-2 bg-muted"
                />
              </div>
              <div className="flex space-x-1">
                <Button variant="outline" size="sm" className="flex-1 text-xs">
                  <UserPlus className="h-3 w-3 mr-1" />
                  Assign
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-xs">
                  <Pen className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-xs text-destructive hover:text-destructive">
                  <Trash className="h-3 w-3 mr-1" />
                  Remove
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Member Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] bg-background/90 backdrop-blur-xl border-tritonexus-purple/20">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={selectedMember.avatar} />
                    <AvatarFallback className="bg-gradient-to-br from-tritonexus-purple to-tritonexus-pink text-white">
                      {selectedMember.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="text-xl">{selectedMember.name}</span>
                    <p className="text-sm text-muted-foreground mt-0.5">{selectedMember.role}</p>
                  </div>
                </DialogTitle>
                <DialogDescription className="pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Task Progress</span>
                    <span className="font-medium">{selectedMember.progress}%</span>
                  </div>
                  <Progress 
                    value={selectedMember.progress} 
                    className="h-2 mb-6"
                  />
                  
                  <h3 className="font-medium mb-2">Assigned Tasks</h3>
                  <div className="space-y-3 max-h-[300px] overflow-y-auto">
                    {/* Mock task list */}
                    {Array.from({ length: selectedMember.tasksAssigned }).map((_, idx) => (
                      <div 
                        key={idx} 
                        className="p-3 rounded-md bg-muted/50 border border-border/50 flex justify-between"
                      >
                        <div>
                          <p className="font-medium text-sm">
                            Task #{idx + 1}: {idx < selectedMember.tasksCompleted ? 'Completed' : 'In Progress'}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Due: {new Date(Date.now() + (idx * 86400000)).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Pen className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex flex-col sm:flex-row gap-2">
                <Button 
                  className="w-full sm:w-auto bg-gradient-to-r from-tritonexus-purple to-tritonexus-pink text-white"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Assign New Task
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TeamTaskPanel;
