export interface AppVersionPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
