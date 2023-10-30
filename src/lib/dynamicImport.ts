import { ComponentType } from 'react';
import dynamic, { DynamicOptions } from 'next/dynamic';

type InferComponentProps<P> = P extends ComponentType<infer T> ? T : never;

export type DynamicComponent<T> = ComponentType<T> & {
  preload?: () => Promise<ComponentType<T>>;
};

export function dynamicNamedImport<T extends Record<K, unknown>, K extends keyof T>(
  importFunction: () => Promise<T>,
  key: K,
  options?: DynamicOptions<InferComponentProps<T[K]>>
) {
  const importComponent = async () => {
    const importedModule: T = await importFunction();

    const Component = importedModule[key];
    return Component as ComponentType<InferComponentProps<typeof Component>>;
  };

  const dynamicComponent: DynamicComponent<InferComponentProps<T[K]>> = dynamic(importComponent, {
    ...options,
  });

  dynamicComponent.preload = importComponent;

  return dynamicComponent;
}
