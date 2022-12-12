import React from 'react';

interface IFeature {
  name: string;
  description: string;
  icon: (
    props: React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  ) => JSX.Element;
}

interface IFeaturesProps {
  features: IFeature[];
}

const Features = ({ features }: IFeaturesProps) => (
  <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
    <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
      {features.map((feature) => (
        <div
          key={feature.name}
          className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
            <feature.icon className="h-8 w-8" aria-hidden="true" />
          </div>
          <div className="sm:min-w-0 sm:flex-1">
            <p className="text-lg font-semibold leading-8 text-gray-900">
              {feature.name}
            </p>
            <p className="mt-2 text-base leading-7 text-gray-600">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
