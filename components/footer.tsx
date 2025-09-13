import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-lg">BlockchainLearn</span>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Empowering the next generation of blockchain developers through ethical education and hands-on learning.
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#courses" className="hover:text-primary transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#labs" className="hover:text-primary transition-colors">
                  Labs
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-primary transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-primary transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#help" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-primary transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#status" className="hover:text-primary transition-colors">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-primary transition-colors">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-primary transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 BlockchainLearn. All rights reserved.</p>
          </div>

          {/* Powered by attribution */}
          <Card className="glass-effect px-4 py-2">
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <span>Powered by</span>
              <span className="font-semibold text-primary">v0.app</span>
              <span>•</span>
              <span>Built with</span>
              <span className="font-semibold text-primary">shadcn/ui</span>
            </p>
          </Card>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
