# .claude/ 폴더 구조

Figma → Tailwind 코드 변환 자동화를 위한 Claude Code 설정.

## 파일 구조

```
.claude/
├── project-config.md        ← 🔴 프로젝트 단일 진실 원본 (토큰, 구조, 규칙)
├── README.md                ← 이 파일
├── settings.local.json      ← MCP/도구 권한
│
├── skills/                  ← 슬래시 커맨드
│   ├── figma-to-code/       /figma-to-code — Figma URL → React + Tailwind 컴포넌트
│   │   └── SKILL.md
│   └── figma-to-tokens/     /figma-to-tokens — Figma → @theme + project-config.md 동기화
│       ├── SKILL.md
│       └── token-schema.md  토큰 카테고리 + Tailwind v4 매핑 규칙
│
└── agents/                  ← 전문 에이전트 (스킬에서 자동 호출)
    ├── figma-analyzer.md    Figma MCP로 데이터/자산 추출
    └── code-implementer.md  Tailwind 기반 React 컴포넌트 구현
```

## 동작 흐름

```
사용자: /figma-to-code <url> <Hero>
            ↓
        Phase 1: figma-analyzer
            - mcp__figma__get_figma_data
            - 토큰 추출, 자산 다운로드
            ↓
        Phase 2: code-implementer
            - globals.css @theme 업데이트
            - project-config.md 동기화
            ↓
        Phase 3: code-implementer
            - src/components/sections/Hero.tsx 생성
            ↓
        Phase 4: 검증 (npm run lint/build)
            ↓
        통합 가이드 출력
```

## MCP 서버

`.mcp.json` (프로젝트 루트):
- `figma`: figma-developer-mcp 패키지 — `mcp__figma__get_figma_data`, `mcp__figma__download_figma_images`
- `playwright`: 브라우저 검증
- `sequential-thinking`: 복잡한 분석
- `context7`: 라이브러리 공식 문서

## 새 프로젝트에 복사할 때

1. `.claude/` 전체 + `.mcp.json` 복사
2. `project-config.md` 수정 (project_name, 토큰, 구조)
3. `code-implementer.md`의 스타일링 규칙이 프로젝트 스택에 맞는지 확인
4. `.mcp.json`의 figma API 키는 본인 키로 교체 (보안)
