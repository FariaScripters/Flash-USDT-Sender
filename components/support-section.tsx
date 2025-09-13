import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, FileText } from "lucide-react"

const supportOptions = [
  {
    icon: FileText,
    title: "About Our Platform",
    description:
      "Learn about our mission to provide ethical blockchain education through hands-on testing and comprehensive learning resources.",
    action: "Learn More",
    href: "#about",
  },
  {
    icon: MessageCircle,
    title: "Refund Policy",
    description:
      "We offer a 30-day money-back guarantee. If you're not satisfied with your learning experience, get a full refund.",
    action: "View Policy",
    href: "#refund",
  },
  {
    icon: Mail,
    title: "Get Support",
    description:
      "Our expert support team is available 24/7 to help you with technical issues, course questions, and platform guidance.",
    action: "Contact Support",
    href: "mailto:support@blockchainlearn.edu",
  },
]

export function SupportSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Support & Information</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Everything you need to know about our platform, policies, and how to get help when you need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <Card key={index} className="glass-card hover:bg-card/60 transition-colors group">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit group-hover:bg-primary/20 transition-colors">
                  <option.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {option.description}
                </CardDescription>
                <Button
                  variant="outline"
                  className="w-full border-primary/20 hover:bg-primary/10 hover:border-primary/40 bg-transparent"
                  asChild
                >
                  <a href={option.href}>{option.action}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Educational Disclaimer */}
        <div className="mt-16 p-6 rounded-lg glass-effect border border-primary/20">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-primary">Educational Use Only</h3>
            <p className="text-sm text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              This platform is designed exclusively for blockchain testing, learning, and ethical usage. All users must
              comply with local regulations and complete age verification (18+). We promote responsible learning and do
              not endorse any illegal activities or unauthorized use of blockchain technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
