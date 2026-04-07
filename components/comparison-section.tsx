import { Check, X } from "lucide-react";

export function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Lead Qualification Speed",
      launchops: "Instant (24/7)",
      freelancer: "2-3 days",
      bigagency: "1-2 days",
      diy: "Manual/Slow",
    },
    {
      feature: "Cost per Qualified Lead",
      launchops: "Lowest (automated)",
      freelancer: "$50-100 per lead",
      bigagency: "$100-200 per lead",
      diy: "Variable + your time",
    },
    {
      feature: "Scalability",
      launchops: "Unlimited",
      freelancer: "Limited (1 person)",
      bigagency: "Limited by team size",
      diy: "Requires hiring",
    },
    {
      feature: "Appointment Booking",
      launchops: true,
      freelancer: false,
      bigagency: false,
      diy: false,
    },
    {
      feature: "24/7 Operation",
      launchops: true,
      freelancer: false,
      bigagency: false,
      diy: false,
    },
    {
      feature: "Follow-up Automation",
      launchops: true,
      freelancer: false,
      bigagency: false,
      diy: false,
    },
    {
      feature: "Analytics & Reporting",
      launchops: true,
      freelancer: false,
      bigagency: true,
      diy: false,
    },
    {
      feature: "Training Required",
      launchops: false,
      freelancer: true,
      bigagency: true,
      diy: true,
    },
    {
      feature: "Setup Time",
      launchops: "7 days",
      freelancer: "2-4 weeks",
      bigagency: "2-4 weeks",
      diy: "1-3 months",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            How LaunchOps Compares
          </h2>
          <p className="text-xl text-gray-700">
            Stop wasting money on outdated solutions. Here&apos;s why smart agencies choose LaunchOps.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-4 px-4 font-bold text-black">Feature</th>
                <th className="text-center py-4 px-4">
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                    LaunchOps
                  </div>
                </th>
                <th className="text-center py-4 px-4 font-bold text-gray-700">Freelancer</th>
                <th className="text-center py-4 px-4 font-bold text-gray-700">Big Agency</th>
                <th className="text-center py-4 px-4 font-bold text-gray-700">DIY/In-House</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-gray-200 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.launchops === "boolean" ? (
                      row.launchops ? (
                        <Check className="w-6 h-6 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-600 mx-auto" />
                      )
                    ) : (
                      <span className="font-semibold text-blue-600">{row.launchops}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.freelancer === "boolean" ? (
                      row.freelancer ? (
                        <Check className="w-6 h-6 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-600 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-600">{row.freelancer}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.bigagency === "boolean" ? (
                      row.bigagency ? (
                        <Check className="w-6 h-6 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-600 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-600">{row.bigagency}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.diy === "boolean" ? (
                      row.diy ? (
                        <Check className="w-6 h-6 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-600 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-600">{row.diy}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to invest in the future of your business?
          </p>
          <a
            href="https://calendly.com/launchops-automation/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
