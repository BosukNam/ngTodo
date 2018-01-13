// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// 개발환경
export const environment = {
  production: false,
  // HOST: "http://localhost:8080" 실제로는 이렇게 들어가는게 맞음
  HOST: "http://www.javabrain.kr:8080"
};
