import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Database, Fingerprint, Key } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "All data is encrypted using military-grade AES-256 encryption protocols.",
  },
  {
    icon: Lock,
    title: "Multi-Factor Authentication",
    description: "Enhanced security with SMS, email, and authenticator app verification.",
  },
  {
    icon: Eye,
    title: "Privacy Protection",
    description: "Zero-knowledge architecture ensures your learning data remains private.",
  },
  {
    icon: Database,
    title: "Secure Data Storage",
    description: "Distributed storage with automatic backups and disaster recovery.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Access",
    description: "Optional fingerprint and facial recognition for enhanced security.",
  },
  {
    icon: Key,
    title: "Hardware Security",
    description: "Support for hardware security keys and cold storage integration.",
  },
]

export function SecuritySection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Enterprise-Grade Security</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Your security is our priority. We implement multiple layers of protection to ensure your learning experience
            is both safe and private.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="glass-card hover:bg-card/60 transition-colors">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
