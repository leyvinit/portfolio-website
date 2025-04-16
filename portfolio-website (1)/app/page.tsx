"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Download, Code, BookOpen, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  // Implement smooth scrolling for navigation links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.substring(1)
        const element = document.getElementById(id || "")
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Offset for header
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleLinkClick)
    return () => document.removeEventListener("click", handleLinkClick)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
              HA
            </div>
            <span className="font-semibold">Hanan Abdulahi</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="outline" size="icon" className="hidden md:flex" asChild>
              <a href="https://github.com/leyvinit" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button className="hidden md:flex" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </a>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative py-20 md:py-32 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    HANAN HASSAN ABDULAHI
                  </h1>
                  <p className="text-2xl font-medium text-primary">Frontend Developer</p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4">
                    I am a Software Engineering student with a strong enthusiasm for developing efficient software
                    solutions. I am looking for an opportunity to apply my academic learning, refine my technical
                    abilities, and work alongside seasoned professionals to tackle real-world problems and advance my
                    growth as a software developer.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1.5" asChild>
                    <a href="#projects">
                      View Projects
                      <ArrowDown className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-1.5" asChild>
                    <a href="/resume.pdf" download>
                      <Download className="h-4 w-4 mr-1" />
                      Download Resume
                    </a>
                  </Button>
                </div>
                <div className="flex gap-4 mt-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com/leyvinit" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href="https://www.linkedin.com/in/hanan-hassan-6a1b422b8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="mailto:hannansalahbts0099@gmail.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-full border-8 border-muted bg-muted md:w-[400px]">
                  <Image
                    src="/profile-pic.jpg"
                    alt="Hanan Hassan Abdulahi"
                    width={400}
                    height={400}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my academic and personal projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Modern Calculator"
                description="A fully functional calculator built with pure vanilla JavaScript, HTML, and CSS. Features advanced functions, calculation history, and theme switching."
                tags={["JavaScript", "CSS", "HTML"]}
                image="/calculator-project.jpg"
                demoUrl="https://youtu.be/dE3WlXxJyiY"
                codeUrl="https://github.com/leyvinit/calculator-app"
              />
              <ProjectCard
                title="Anime Quiz App"
                description="An interactive web application that tests users' knowledge of popular anime series, characters, and creators with multiple-choice questions, images, and animations."
                tags={["JavaScript", "HTML", "CSS"]}
                image="/quiz-project.jpg"
                demoUrl="https://youtu.be/5j8is3gJ1YY"
                codeUrl="https://github.com/leyvinit/quiz-app"
              />
              <ProjectCard
                title="Countdown Timer"
                description="Customizable countdown timer with notifications and themes."
                tags={["JavaScript", "CSS", "HTML"]}
                image="/countdown-project.jpg"
                demoUrl="#"
                codeUrl="https://github.com/leyvinit"
              />
              <ProjectCard
                title="Weather Dashboard"
                description="Real-time weather dashboard using weather API and geolocation."
                tags={["JavaScript", "API", "CSS"]}
                image="/weather-project.jpg"
                demoUrl="#"
                codeUrl="https://github.com/leyvinit"
              />
              <ProjectCard
                title="Bookstore Web Application"
                description="A dynamic web bookstore with user-friendly interface using HTML, CSS, JavaScript, and PHP backend."
                tags={["HTML", "CSS", "JavaScript", "PHP"]}
                image="/bookstore-project.jpg"
                demoUrl="#"
                codeUrl="https://github.com/leyvinit"
              />
              <ProjectCard
                title="Transportation Vehicle Management System"
                description="A mock-up system with use case diagrams, ERD, Gantt charts, and screen designs."
                tags={["Software Design", "UML", "Mockups"]}
                image="/transport-project.jpg"
                demoUrl="#"
                codeUrl="https://github.com/leyvinit"
              />
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="gap-1.5" asChild>
                <a href="https://github.com/leyvinit" target="_blank" rel="noopener noreferrer">
                  View All Projects
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Skills</h2>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Programming Languages */}
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Programming Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">C</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">C++</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Java</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">JavaScript</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Python</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">SQL</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">PHP</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">HTML/CSS</Badge>
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Tools & Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Git</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">SQL Server</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">MongoDB</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">
                    Visual Studio
                  </Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Eclipse</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Tinkercad</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Tkinter</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Numpy</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Regex</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Pandas</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">
                    Beautifulsoup
                  </Badge>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                  <h3 className="text-xl font-bold">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">
                    Open Communication
                  </Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Teamwork</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">
                    Adaptability
                  </Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">
                    Problem Solving
                  </Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">
                    Time Management
                  </Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">
                    Emotional Intelligence
                  </Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Creativity</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Work Ethic</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">
                    Critical Thinking
                  </Badge>
                </div>
              </div>

              {/* Languages */}
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Somali</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">English</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Arabic</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Korean</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Japanese</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Amharic</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-3 py-1 text-sm">Turkish</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Education</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Academic Background</h2>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold">Bachelor of Science in Software Engineering</h3>
                <p className="text-muted-foreground">Halic University, Istanbul, Turkey</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-muted-foreground">Expected Graduation: 2026</p>
                  <p className="text-sm font-medium">GPA: 3.56</p>
                </div>

                <div className="mt-6">
                  <p className="font-medium">Key Coursework:</p>
                  <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
                    <li>Object Oriented Programming</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Artificial Intelligence</li>
                    <li>Database Management Systems</li>
                    <li>Discrete Mathematics</li>
                    <li>Visual Programming</li>
                    <li>Deep Learning</li>
                    <li>Software Engineering Requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Interests & Hobbies</h2>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="rounded-lg border bg-card p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Personal Interests</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Fashion Design
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Baking
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Learning New Skills
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Traveling
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Reading Books
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Academic Interests</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Software Development
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Database Systems
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Web Development
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        Deep Learning
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or want to collaborate? Feel free to reach out!
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg py-12">
              <ContactForm email="hannansalahbts0099@gmail.com" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Hanan Hassan Abdulahi. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/leyvinit" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/hanan-hassan-6a1b422b8" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:hannansalahbts0099@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
