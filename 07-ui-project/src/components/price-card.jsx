import React from "react";
import { Check, X } from "lucide-react";

const PriceCard = () => {
  const features = [
    {
      area: "Ultra-fast browsing",
      areaStatus: true,
      websurge: "Fast browsing",
      websurgeStatus: true,
      hyperview: "Moderate speeds",
      hyperviewStatus: false,
    },
    {
      area: "Advanced AI insights",
      areaStatus: true,
      websurge: "Basic AI recommendations",
      websurgeStatus: true,
      hyperview: "No AI assistance",
      hyperviewStatus: false,
    },
    {
      area: "Seamless integration",
      areaStatus: true,
      websurge: "Restricts customization",
      websurgeStatus: true,
      hyperview: "Steep learning curve",
      hyperviewStatus: false,
    },
    {
      area: "Advanced AI insights",
      areaStatus: true,
      websurge: "Basic AI insights",
      websurgeStatus: false,
      hyperview: "No AI assistance",
      hyperviewStatus: false,
    },
    {
      area: "Ultra-fast browsing",
      areaStatus: true,
      websurge: "Fast browsing",
      websurgeStatus: true,
      hyperview: "Moderate speeds",
      hyperviewStatus: false,
    },
    {
      area: "Full UTF-8 support",
      areaStatus: true,
      websurge: "Potential display errors",
      websurgeStatus: false,
      hyperview: "Partial UTF-8 support",
      hyperviewStatus: false,
    },
  ];

  return (
    <div className=" ">
      <div className="">
        {/* Desktop View */}
        <div className="hidden md:block bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="p-8 text-center border-r border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Area</h2>
            </div>
            <div className="p-8 text-center border-r border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-600">WebSurge</h2>
            </div>
            <div className="p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-600">
                HyperView
              </h2>
            </div>
          </div>

          {/* Features */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-b border-gray-100 last:border-b-0"
            >
              {/* Area Column */}
              <div className="p-6 border-r border-gray-200 flex items-center">
                {feature.areaStatus ? (
                  <Check className="w-4 h-4 text-gray-900 mr-3 shrink-0" />
                ) : (
                  <X className="w-4 h-4 text-gray-400 mr-3 shrink-0" />
                )}
                <span className="text-gray-900 font-mono text-sm">
                  {feature.area}
                </span>
              </div>

              {/* WebSurge Column */}
              <div className="p-6 border-r border-gray-200 flex items-center">
                {feature.websurgeStatus ? (
                  <Check className="w-4 h-4 text-gray-900 mr-3 shrink-0" />
                ) : (
                  <X className="w-4 h-4 text-gray-400 mr-3 shrink-0" />
                )}
                <span className="text-gray-900 font-mono text-sm">
                  {feature.websurge}
                </span>
              </div>

              {/* HyperView Column */}
              <div className="p-6 flex items-center">
                {feature.hyperviewStatus ? (
                  <Check className="w-4 h-4 text-gray-900 mr-3 shrink-0" />
                ) : (
                  <X className="w-4 h-4 text-gray-400 mr-3 shrink-0" />
                )}
                <span className="text-gray-900 font-mono text-sm">
                  {feature.hyperview}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-4">
              {/* Area */}
              <div className="mb-3 pb-3 border-b border-gray-200">
                <div className="text-xs font-semibold text-gray-500 mb-2">
                  Area
                </div>
                <div className="flex items-center">
                  {feature.areaStatus ? (
                    <Check className="w-4 h-4 text-gray-900 mr-2 shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                  )}
                  <span className="text-gray-900 font-mono text-sm">
                    {feature.area}
                  </span>
                </div>
              </div>

              {/* WebSurge */}
              <div className="mb-3 pb-3 border-b border-gray-200">
                <div className="text-xs font-semibold text-gray-500 mb-2">
                  WebSurge
                </div>
                <div className="flex items-center">
                  {feature.websurgeStatus ? (
                    <Check className="w-4 h-4 text-gray-900 mr-2 shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                  )}
                  <span className="text-gray-900 font-mono text-sm">
                    {feature.websurge}
                  </span>
                </div>
              </div>

              {/* HyperView */}
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-2">
                  HyperView
                </div>
                <div className="flex items-center">
                  {feature.hyperviewStatus ? (
                    <Check className="w-4 h-4 text-gray-900 mr-2 shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                  )}
                  <span className="text-gray-900 font-mono text-sm">
                    {feature.hyperview}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
