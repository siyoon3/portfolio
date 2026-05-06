@AGENTS.md

# Portfolio Project

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 기반 포트폴리오.

## Figma → Code 워크플로우

이 프로젝트는 Figma 디자인을 코드로 변환하는 자동화 스킬을 갖추고 있습니다:

- `/figma-to-code <figma_url> <ComponentName>` — Figma URL → React + Tailwind 컴포넌트 생성
- `/figma-to-tokens <figma_url> --update` — Figma → globals.css `@theme` + project-config.md 토큰 동기화

세부 사용법은 각 스킬의 `SKILL.md` 참조:
- `.claude/skills/figma-to-code/SKILL.md`
- `.claude/skills/figma-to-tokens/SKILL.md`

## 디자인 토큰 / 프로젝트 설정

`.claude/project-config.md` 가 단일 진실 원본입니다.
- 색상, 타이포, spacing, breakpoint
- 파일 구조 규칙 (`src/app/`, `src/components/sections/`, `src/components/ui/`)
- 스타일링 규칙 (Tailwind v4 only)

스킬과 에이전트는 모두 이 파일을 참조합니다.

## MCP 서버

`.mcp.json`에 정의:
- `figma` — Figma 디자인 데이터 추출 (`mcp__figma__get_figma_data`, `mcp__figma__download_figma_images`)
- `playwright` — 브라우저 검증
- `sequential-thinking` — 복잡 분석
- `context7` — 라이브러리 문서

## 폴더 구조

```
src/
├── app/
│   ├── globals.css        ← @theme (디자인 토큰)
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── sections/          ← 페이지 섹션 (Hero, About, Projects)
    ├── ui/                ← 재사용 UI (Button, Card)
    └── layout/            ← Header, Footer

public/
└── assets/
    ├── images/
    └── icons/
```
