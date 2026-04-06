import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "In the first month, we had 35 qualified appointments booked without our team spending hours on follow-ups. Best decision for our business.",
      author: "Marcus Thompson",
      title: "Solar Company Owner",
      rating: 5,
    },
    {
      quote: "Our gym memberships increased by 40% because we never miss a lead anymore. The AI handles inquiries while we focus on conversions.",
      author: "Jessica Martinez",
      title: "Fitness Studio Owner",
      rating: 5,
    },
    {
      quote: "As a marketing consultant, LaunchOps became my secret weapon. My clients see 3x more leads qualified and booked. Everyone wins.",
      author: "David Chen",
      title: "Marketing Consultant",
      rating: 5,
    },
    {
      quote: "We used to lose 30-40% of leads because we couldn't respond fast enough. LaunchOps responds instantly, qualifies them, and books appointments. Game changer.",
      author: "Sarah Williams",
      title: "Construction Company",
      rating: 5,
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-white">
            Success Stories From Real Businesses
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how agencies and local businesses are using LaunchOps to qualify leads automatically
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group bg-black/40"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 bg-blue-600/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/50 transition-colors">
                <Quote className="w-5 h-5 text-blue-400" />
              </div>

              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-blue-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-lg font-medium text-white mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-600/50 transition-colors">
                  <span className="text-blue-300 font-bold text-sm">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                  <div className="text-gray-400 text-xs">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
