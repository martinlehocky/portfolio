import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, MapPin } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "martin.lehocky2007@gmail.com",
      href: "mailto:martin.lehocky2007@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+421 948 087 600",
      href: "tel:+421948087600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "martinlehocky",
      href: "https://www.linkedin.com/in/martinlehocky",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bratislava, Slovakia",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              I'm eager to gain practical experience in server and enterprise solutions. I'm most motivated working in
              teams and contributing to meaningful technology projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((contact) => {
              const Icon = contact.icon
              return (
                <Card key={contact.label} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={contact.label === "LinkedIn" ? "_blank" : undefined}
                          rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                          className="text-sm font-medium hover:text-primary transition-colors break-words"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium break-words">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <a href="mailto:martin.lehocky2007@gmail.com">Send Me an Email</a>
            </Button>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Martin Lehocký. Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </section>
  )
}
