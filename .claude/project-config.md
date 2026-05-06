# Project Configuration

이 파일은 프로젝트별 설정값을 정의합니다.
모든 스킬/에이전트가 이 파일을 참조하여 동작합니다.

## 프로젝트 정보

```yaml
project_name: "Portfolio"
framework: "Next.js 16 (App Router) with TypeScript"
styling: "Tailwind CSS v4"
node_version: "20+"
```

## 개발 환경

```yaml
dev_server:
  url: "http://localhost:3000"
  port: 3000
  command: "npm run dev"

viewports:
  desktop: "1440x900"
  tablet: "768x1024"
  mobile: "375x812"

container_max: "1280px"
content_max: "1200px"
```

## 디자인 토큰

> Figma node `29:1571` (psd.to.design Portfolio Site Design Request) 기준.
> 토큰은 `src/app/globals.css`의 `@theme` 블록과 동기화되어 있습니다.

### Colors

```yaml
colors:
  # 텍스트 (라이트 → 다크)
  text-foreground: '#0a0a0a'    # 본문/헤딩 기본
  text-strong: '#1e2939'        # H3/Subheading
  text-body: '#364153'          # 카드 본문
  text-secondary: '#4a5565'     # Hero 보조 카피
  text-muted: '#6a7282'         # 캡션/날짜
  text-footer: '#99a1af'        # Footer 카피라이트

  # 표면
  app-from: '#f9fafb'           # body gradient 시작
  app-to: '#f3f4f6'             # body gradient 끝
  footer: '#101828'             # Footer bg
  badge: '#eceef2'              # Tech badge bg

  # UI
  primary: '#030213'            # Primary 버튼 / 진행바 fill
  border-soft: 'rgba(0,0,0,0.1)'
  track: 'rgba(3,2,19,0.2)'     # Project 진행바 track
  skill-track: '#e5e7eb'        # Skill 진행바 track

  # Brand gradient (90deg / 135deg 공용)
  brand-blue: '#155dfc'
  brand-purple: '#9810fa'
```

### Typography

```yaml
typography:
  font-family:
    sans: "var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif"

  # font-size / line-height pairs (Tailwind v4 @theme)
  font-size:
    xs: '12px / 16px'
    sm: '14px / 20px'
    base: '16px / 24px'
    lg: '18px / 1.625'
    xl: '20px / 28px'
    2xl: '24px / 32px'
    3xl: '36px / 40px'      # 섹션 H2
    display-2xl: '72px / 1' # Hero 디스플레이

  font-weight:
    normal: 400
    medium: 500
    semibold: 600
    bold: 700
```

### Spacing

```yaml
spacing:
  section-py: '80px'            # 섹션 상단 padding (PC)
  section-py-mobile: '48px'
  container-max: '1280px'
  container-px-mobile: '24px'
  container-px-desktop: '32px'
```

### Border Radius

```yaml
border-radius:
  lg: '8px'                     # 버튼, 뱃지
  pill: '10px'                  # Skill 카드, Private 오버레이 pill
  card: '14px'                  # Project 카드
  2xl: '16px'                   # About 카드
  full: '9999px'
```

### Effects

```yaml
effects:
  shadow-sm: '0 1px 2px -1px rgba(0,0,0,0.1), 0 1px 3px 0 rgba(0,0,0,0.1)'   # Skill 카드
  shadow-md: '0 2px 4px -2px rgba(0,0,0,0.1), 0 4px 6px -1px rgba(0,0,0,0.1)' # Project 카드
  shadow-lg: '0 4px 6px -4px rgba(0,0,0,0.1), 0 10px 15px -3px rgba(0,0,0,0.1)' # About 카드
```

### Breakpoints (Tailwind v4 기본)

```yaml
breakpoints:
  sm: '640px'
  md: '768px'
  lg: '1024px'
  xl: '1280px'
  2xl: '1536px'
```

## 프로젝트 구조

```yaml
file_structure:
  app: "src/app/"                    # Next.js App Router
  components: "src/components/"      # 재사용 컴포넌트 (UI 단위)
  sections: "src/components/sections/"  # 페이지 섹션 (Hero, About, Projects 등)
  lib: "src/lib/"                    # 유틸/헬퍼
  styles: "src/app/globals.css"      # Tailwind 글로벌 (@theme 포함)
  assets: "public/assets/"           # 이미지/SVG
  assets-images: "public/assets/images/"
  assets-icons: "public/assets/icons/"

base_docs:
  - "CLAUDE.md"
  - ".claude/project-config.md"

agents:
  - ".claude/agents/figma-analyzer.md"
  - ".claude/agents/code-implementer.md"
```

## Tailwind v4 규칙

- **테마 정의**: `src/app/globals.css`의 `@theme { ... }` 블록에 디자인 토큰을 CSS Variable로 정의
- **클래스 사용**: 임의값(`bg-[#fff]`)보다 토큰 클래스(`bg-bg-primary`) 우선
- **반응형**: Mobile-first. `md:`/`lg:` 접두사로 데스크톱 스타일 추가
- **다크모드**: `prefers-color-scheme` 자동 감지 (필요 시 `dark:` 활용)

## 스타일링 규칙 (Tailwind 기준)

- ❌ Emotion/styled-components 사용 금지 (이 프로젝트는 Tailwind만)
- ❌ CSS Modules 추가 사용 금지 (Tailwind 클래스로 통일)
- ✅ 클래스 길어지면 `cn()` 유틸이나 `clsx` 도입 검토
- ✅ 같은 컴포넌트가 3회 이상 반복되면 `src/components/`에 추출
