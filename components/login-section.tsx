"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, EyeOff } from "lucide-react"

export function LoginSection() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12">
      {/* Background with glassy effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Hero Content */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">
              Secure Blockchain
              <span className="text-primary block">Learning Platform</span>
            </h1>
          </div>

          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Master blockchain technology through hands-on testing and ethical learning. Our educational platform
            provides a safe environment for exploring decentralized systems.
          </p>

          <div className="flex items-center gap-4 p-4 rounded-lg glass-effect">
            <Lock className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Educational Use Only • Age Verification Required (18+) • Comply with Local Regulations
            </span>
          </div>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-md mx-auto">
          <Card className="glass-card shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Access Portal</CardTitle>
              <CardDescription>Enter your credentials to access the learning platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-input/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-input/50 border-border/50 focus:border-primary pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Access Platform
              </Button>

              <div className="text-center">
                <Button variant="link" className="text-sm text-muted-foreground hover:text-primary">
                  Forgot your password?
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
