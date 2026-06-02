declare module "*.mdx" {
  import type { ComponentType } from "react";

  const Component: ComponentType;
  export default Component;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const metadata: Record<string, any>;
}

declare module "*.md" {
  import type { ComponentType } from "react";

  const Component: ComponentType;
  export default Component;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const metadata: Record<string, any>;
}
