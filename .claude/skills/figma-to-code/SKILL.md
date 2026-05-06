---
name: figma-to-code
description: Figma 디자인 URL을 받아 Next.js + Tailwind CSS 코드로 변환하는 워크플로우. Figma → 분석 → 토큰 추가 → React 컴포넌트 생성까지 자동화. 디자인을 코드로 옮길 때 사용합니다.
argument-hint: "[figma_url] [component_name] [--analyze-only | --skip-build | --section | --component]"
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, mcp__figma__get_figma_data, mcp__figma__download_figma_images
---

# Figma to Code — 디자인 → Tailwind 컴포넌트

Figma URL을 받아 Next.js + Tailwind CSS 코드로 변환합니다.

## 연동 에이전트
- `figma-analyzer`: Figma MCP로 디자인 데이터/자산 추출
- `code-implementer`: 분석 결과 기반 React + Tailwind 코드 생성

## 사용법

```
/figma-to-code <figma_url> <component_name> [options]
```

### 인자
| 인자 | 설명 | 예시 |
|------|------|------|
| `figma_url` | Figma 디자인 URL (`node-id` 포함 필수) | `https://www.figma.com/design/ABC/Portfolio?node-id=12-345` |
| `component_name` | 생성할 컴포넌트/섹션 이름 (PascalCase) | `Hero`, `ProjectCard` |

### 옵션
| 옵션 | 동작 |
|------|------|
| `--analyze-only` | Phase 1만 실행 (분석/토큰 추출, 코드 생성 안 함) |
| `--skip-build` | Phase 4 검증 스킵 (lint/build 안 돌림) |
| `--section` | `src/components/sections/`에 생성 (기본) |
| `--component` | `src/components/ui/`에 재사용 컴포넌트로 생성 |

---

## 실행 단계

### Phase 1: 디자인 분석 (figma-analyzer 호출)

1. **URL 파싱** — `fileKey`, `nodeId` 추출
2. **Figma 데이터 가져오기**
   ```
   mcp__figma__get_figma_data(fileKey, nodeId)
   ```
3. **디자인 토큰 추출** — color, typography, spacing, radius, shadow
4. **Tailwind 매핑 판단** — 기본 토큰 vs 커스텀 토큰 vs 임의값
5. **자산 추출 판단 + 다운로드**
   ```
   mcp__figma__download_figma_images(fileKey, nodes, localPath)
   ```
6. **분석 리포트 출력** — 사용자 확인 (필요 시 토큰명 조정)

> `--analyze-only` 옵션이면 여기서 종료.

### Phase 2: 토큰 동기화 (code-implementer)

신규 토큰이 있으면:

1. `src/app/globals.css`의 `@theme` 블록에 추가
   ```css
   @theme {
     --color-brand-primary: #2563eb;
     --text-display: 48px;
   }
   ```
2. `.claude/project-config.md`의 yaml 섹션도 동기화 업데이트
3. 사용자에게 토큰 추가 결과 표시

### Phase 3: 컴포넌트 구현 (code-implementer)

1. **파일 위치 결정**
   - `--section` (기본): `src/components/sections/{ComponentName}.tsx`
   - `--component`: `src/components/ui/{ComponentName}.tsx`

2. **Server / Client 판단**
   - 인터랙션 (state, event handler) 있음 → `"use client"` 추가
   - 그 외 → Server Component (App Router 기본)

3. **JSX 구성**
   - 시맨틱 HTML 우선 (`<section>`, `<article>`, `<header>`)
   - figma-analyzer 출력의 Tailwind 매핑 그대로 적용
   - 다운로드된 이미지/SVG는 `next/image` 또는 직접 path

4. **반응형**
   - 모바일 기본 → `md:` / `lg:` 로 PC 추가
   - figma-analyzer가 PC/Mobile 차이 보고했으면 그대로 반영

5. **타입 정의**
   - props 있으면 interface 정의 + export

### Phase 4: 검증 (옵션)

`--skip-build` 없으면:

1. `npm run lint` — 0 에러
2. `npm run build` — 성공
3. 실패 시 자동 수정 시도

### Phase 5: 통합 안내

생성된 컴포넌트를 어디에 import 할지 안내:

```markdown
## ✅ 생성 완료

📄 컴포넌트: src/components/sections/Hero.tsx

다음 위치에 추가하세요:
```tsx
// src/app/page.tsx
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero title="..." description="..." />
    </main>
  );
}
```
```

---

## 에이전트 협업 흐름

```
/figma-to-code [url] [name]
       ↓
Phase 1: figma-analyzer
   - get_figma_data
   - 토큰 추출
   - 자산 다운로드 (download_figma_images)
       ↓
Phase 2: code-implementer
   - globals.css @theme 업데이트
   - project-config.md 동기화
       ↓
Phase 3: code-implementer
   - {ComponentName}.tsx 생성
   - 반응형 적용
       ↓
Phase 4: 검증 (npm run lint, build)
       ↓
Phase 5: 통합 가이드 출력
```

---

## 사용 예시

```bash
# Hero 섹션 생성
/figma-to-code https://www.figma.com/design/ABC/Portfolio?node-id=12-345 Hero

# 재사용 카드 컴포넌트 생성
/figma-to-code https://www.figma.com/design/ABC/Portfolio?node-id=20-100 ProjectCard --component

# 분석만 (실제 코드 생성 X)
/figma-to-code https://www.figma.com/design/ABC/Portfolio?node-id=12-345 Hero --analyze-only

# 빌드 검증 스킵 (빠른 반복)
/figma-to-code https://www.figma.com/design/ABC/Portfolio?node-id=30-1 About --skip-build
```

---

## 주의사항

1. **node-id 필수**: Figma URL에 `?node-id=...`가 없으면 어떤 영역을 변환할지 알 수 없음. 사용자에게 확인 요청.
2. **Import 경로**: 항상 `@/` 절대 경로
3. **스타일링**: Tailwind v4만 사용 (Emotion/CSS Modules 금지)
4. **이미지 경로**: `public/assets/` 하위에 저장, `<Image>`로 사용
5. **토큰 우선**: Tailwind 기본 → 커스텀 토큰 → 임의값 순으로 검토
6. **자산 다운로드 경로**: 절대 경로로 전달 (예: `/Users/siyoon/ebrainsoft/study/portfolio/public/assets/icons`)

---

## 관련 스킬

- `/figma-to-tokens [url]` — 토큰만 추출 (코드 생성 없음)
