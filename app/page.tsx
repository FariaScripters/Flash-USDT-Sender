"use client"

import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ShieldCheck,
  BookOpen,
  Users,
  MessageSquare,
  ChevronRight,
  Star,
} from "lucide-react"

export default function LandingPage() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Comprehensive Learning Modules",
      description:
        "Explore in-depth modules covering everything from blockchain fundamentals to advanced smart contract development.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Secure Sandbox Environment",
      description:
        "Practice and experiment in a safe, simulated environment without risking real assets. Our platform ensures your learning is secure.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community & Expert Support",
      description:
        "Connect with a vibrant community of learners and get guidance from our expert instructors whenever you need it.",
    },
  ]

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Blockchain Developer",
      testimonial:
        "This platform was a game-changer for me. The hands-on labs and clear explanations helped me solidify my understanding of complex concepts.",
      avatar: "/avatars/alex.jpg",
    },
    {
      name: "Maria Garcia",
      role: "Cybersecurity Analyst",
      testimonial:
        "The focus on security is what drew me in. The modules on secure coding practices are invaluable for anyone in the blockchain space.",
      avatar: "/avatars/maria.jpg",
    },
    {
      name: "Sam Chen",
      role: "Student",
      testimonial:
        "As a beginner, I found the platform incredibly approachable. The community is supportive, and the content is top-notch. Highly recommended!",
      avatar: "/avatars/sam.jpg",
    },
  ]

  const faqs = [
    {
      question: "What is the primary focus of this platform?",
      answer:
        "Our platform is dedicated to providing high-quality education on blockchain technology. We focus on hands-on learning, security best practices, and building a strong foundational knowledge for aspiring developers and enthusiasts.",
    },
    {
      question: "Is this platform suitable for beginners?",
      answer:
        "Absolutely. We have learning paths designed for all levels, from absolute beginners to experienced developers looking to upskill. Our introductory modules cover all the basics you need to get started.",
    },
    {
      question: "Are there any prerequisites to join?",
      answer:
        "No formal prerequisites are required. A basic understanding of programming concepts can be helpful for the more advanced modules, but we provide resources to help you learn along the way.",
    },
    {
      question: "What kind of support can I expect?",
      answer:
        "We offer comprehensive support through our community forums, dedicated Q&A sections with instructors, and email support for any technical issues. Our goal is to ensure you have a smooth learning experience.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background to-gray-900/80 z-0"></div>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-shadow-lg">
              Unlock the Future of Blockchain Technology
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
              An educational platform designed to provide you with the knowledge
              and skills to excel in the world of decentralized systems.
            </p>
            <Button size="lg">
              Start Learning Now <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="mt-12 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-green-400 rounded-lg blur-lg opacity-25"></div>
              <Image
                src="https://i.ibb.co/3ypZNvnQ/fake-usdt-transfer-app-for-PC.png"
                alt="Product screenshot"
                width={1200}
                height={675}
                className="rounded-lg shadow-2xl mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Why Choose Our Platform?
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                We provide a comprehensive and secure learning environment to
                help you master blockchain technology.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {feature.icon}
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  About Our Mission
                </h2>
                <p className="text-muted-foreground">
                  Our mission is to democratize blockchain education. We believe
                  that everyone should have access to reliable, high-quality
                  resources to learn about this transformative technology. We
                  are committed to fostering a community of learners, builders,
                  and innovators who will shape the future of the decentralized
                  web.
                </p>
                <p className="text-muted-foreground">
                  This platform is for educational purposes only. All activities
                  are conducted in a simulated environment. Users must be 18 or
                  older.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="About us"
                  width={550}
                  height={310}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                What Our Students Say
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                Hear from developers and students who have grown with our
                platform.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        "{testimonial.testimonial}"
                      </p>
                      <div className="flex items-center gap-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 md:px-6 border-t border-border">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Blockchain Education Platform. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Powered by{" "}
            <a
              href="#"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              RecentCoders
            </a>
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
