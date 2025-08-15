import React from 'react';

// This component renders a custom SVG to create the precise light beam effect.
// Using an SVG provides exact control over the shape, angle, and gradient of the glow,
// which is more reliable than complex CSS gradients for this specific visual.
const LightBeam = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -z-10 inset-0 overflow-hidden"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* This linear gradient defines the color and fade of the light beam.
            It starts transparent, fades into a soft white, and then fades back out.
            The gradientTransform rotates it to match the desired angle of light.
          */}
          <linearGradient
            id="beamGradient"
            gradientTransform="rotate(125)"
          >
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="45%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.12)" />
            <stop offset="55%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
        </defs>

        {/* This rectangle fills the entire SVG viewport with the gradient.
          The transform attribute skews and positions the rectangle to create the
          wide, sweeping beam effect seen in the reference image.
          The filter applies a heavy blur for a soft, hazy appearance.
        */}
        <rect
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          fill="url(#beamGradient)"
          transform="skewX(-25)"
          filter="blur(80px)"
        />
      </svg>
    </div>
  );
};

export default LightBeam;
