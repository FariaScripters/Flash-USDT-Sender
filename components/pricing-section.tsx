import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

const pricingPlans = [
  {
    name: "Student",
    price: "$19",
    period: "/month",
    description: "Perfect for individual learners starting their blockchain journey",
    features: [
      "Access to basic courses",
      "Sandbox environment",
      "Community support",
      "Mobile app access",
      "Progress tracking",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "Advanced features for serious blockchain developers",
    features: [
      "All Student features",
      "Advanced courses & labs",
      "Priority support",
      "API access",
      "Custom environments",
      "Certification programs",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "Complete solution for teams and organizations",
    features: [
      "All Professional features",
      "Team management",
      "Custom integrations",
      "Dedicated support",
      "White-label options",
      "Advanced analytics",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Choose Your Learning Path</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Flexible pricing plans designed to grow with your blockchain expertise. Start learning today with our
            comprehensive educational platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`glass-card relative ${
                plan.popular ? "border-primary/50 shadow-lg shadow-primary/10" : "hover:bg-card/60"
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-pretty">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
