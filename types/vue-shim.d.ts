import type Artalk, { ArtalkConfig } from 'artalk'

declare global {
  interface Window {
    Artalk: {
      init(options: Partial<ArtalkConfig>): Artalk
    }
  }
}

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

