'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"
import { User, Code, Briefcase, Mail, Github, Linkedin, Twitter, ExternalLink, Loader2 } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const navItems = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ]

  const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS', 'PostgreSQL', 'AWS']

  const projects = [
    { title: 'E-commerce Platform', description: 'A full-stack online store with Next.js, GraphQL, and Stripe integration' },
    { title: 'AI-Powered Task Manager', description: 'Productivity app using React, Node.js, and OpenAI for smart task prioritization' },
    { title: 'Realtime Collaboration Tool', description: 'WebSocket-based platform for team collaboration with React and Express' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${name}`)
    const body = encodeURIComponent(message)
    window.location.href = `mailto:ayaangrover@gmail.com?subject=${subject}&body=${body}`
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Loader2 className="w-16 h-16 text-primary animate-spin" />
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background text-foreground min-h-screen flex"
    >
      {/* Sidebar Navigation */}
      <nav className="w-20 bg-card flex flex-col items-center py-8 border-r border-border">
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              variant={activeSection === item.id ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setActiveSection(item.id)}
              className="mb-4"
            >
              <item.icon className="h-5 w-5" />
            </Button>
          </motion.div>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold mb-8 gradient-text"
          >
            Ayaan Grover
          </motion.h1>

          <AnimatePresence mode="wait">
            {/* About Section */}
            {activeSection === 'about' && (
              <motion.section
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-secondary">About Me</h2>
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src="https://ayaangrover.github.io/portfolio-old/src/images/me-wink.png" alt="Ayaan Grover" />
                        <AvatarFallback>AG</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-2xl">Full Stack Developer</CardTitle>
                        <CardDescription className="text-muted-foreground">Passionate about creating seamless user experiences</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">
                      With over 5 years of experience in web development, I specialize in building
                      scalable, efficient, and user-friendly applications. My expertise spans both
                      frontend and backend technologies, allowing me to deliver comprehensive solutions.
                    </p>
                    <div className="flex space-x-4">
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Button variant="outline" size="icon" className="social-button github">
                          <Github className="h-4 w-4" />
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Button variant="outline" size="icon" className="social-button linkedin">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Button variant="outline" size="icon" className="social-button twitter">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.section>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <motion.section
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-secondary">Skills</h2>
                <Card className="card-hover">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Badge variant="secondary" className="w-full justify-center py-2 text-sm">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.section>
            )}

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <motion.section
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-secondary">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="card-hover">
                        <CardHeader>
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary">
                              View Project
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </a>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Contact Section */}
            {activeSection === 'contact' && (
              <motion.section
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-secondary">Contact Me</h2>
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-xl">Get in Touch</CardTitle>
                    <CardDescription className="text-muted-foreground">I'm always open to new opportunities and collaborations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                        <input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3 py-2 border rounded-md bg-background"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                        <textarea
                          id="message"
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-3 py-2 border rounded-md bg-background"
                          required
                        ></textarea>
                      </div>
                      <Button type="submit" variant="secondary" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </main>
    </motion.div>
  )
}