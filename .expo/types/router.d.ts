/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/App` | `/_sitemap` | `/screens/home` | `/screens/login` | `/screens/register` | `/screens/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
