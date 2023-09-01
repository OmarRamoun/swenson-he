import type React from 'react';

declare module '@assets/svgs/*.svg' {
  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default Component;
}
