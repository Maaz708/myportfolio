// app/admin/page.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { toast } from '@/hooks/use-toast';
import { useProject } from '@/context/ProjectContext';

export default function AdminPage() {
  const { addProject } = useProject();
  const { addToast } = useToast();

  // State for project details
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImage, setProjectImage] = useState<File | null>(null);

  const handleSaveProject = () => {
    if (projectTitle && projectDescription && projectImage) {
      addProject({ title: projectTitle, description: projectDescription, image: projectImage });
      toast({
        title: "Project Added",
        description: `Project "${projectTitle}" has been added successfully.`,
      });
      // Reset form fields
      setProjectTitle('');
      setProjectDescription('');
      setProjectImage(null);
    } else {
      addToast('Please fill in all fields.');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h1 className="font-orbitron text-4xl font-bold mb-6">Admin Dashboard</h1>
          </div>

          <Tabs defaultValue="projects" className="space-y-6">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2">
              <TabsTrigger value="projects">Add Project</TabsTrigger>
            </TabsList>

            <TabsContent value="projects">
              <Card>
                <CardHeader>
                  <CardTitle>Add Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Title</label>
                    <Input
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Description</label>
                    <Textarea
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Image</label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => e.target.files && setProjectImage(e.target.files[0])}
                      className="bg-background/50"
                    />
                  </div>
                  <Button onClick={handleSaveProject} className="bg-cyan-500 hover:bg-cyan-600">
                    Save Project
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}