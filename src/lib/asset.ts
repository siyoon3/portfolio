// Next.js의 basePath/assetPrefix는 `_next/...` 내부 자산엔 자동 적용되지만,
// public/ 의 사용자 자산엔 적용되지 않음 (특히 output: 'export' + unoptimized).
// 이 헬퍼는 production에서만 basePath 를 prepend 한다.

export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const withBasePath = (path: string) => `${BASE_PATH}${path}`;
