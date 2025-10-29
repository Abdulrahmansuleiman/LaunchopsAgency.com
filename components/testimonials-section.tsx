import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Saved us 12 hours/week and doubled consult bookings.",
      author: "Dr. Keller",
      title: "Dental Clinic",
      rating: 5,
    },
    {
      quote: "Booked out our gym classes and reduced no-shows by 45%.",
      author: "Lisa",
      title: "Gym Owner",
      rating: 5,
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Real <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses like yours are transforming with AI automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 shadow-glow hover:shadow-glow-intense transition-all duration-300 group"
            >
              {/* Quote icon */}
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-xl font-medium text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-foreground font-bold">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
