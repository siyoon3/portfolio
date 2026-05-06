# Token Schema — Tailwind v4 기반

이 문서는 Figma 디자인에서 추출할 토큰의 카테고리 정의 + Tailwind v4 `@theme` 매핑 규칙을 설명합니다.

## Tailwind v4 토큰 명명 규칙

Tailwind v4는 CSS Variable 이름이 곧 클래스명이 됩니다:

| CSS Variable | Tailwind 클래스 |
|--------------|----------------|
| `--color-brand-primary` | `bg-brand-primary`, `text-brand-primary`, `border-brand-primary` |
| `--text-display` | `text-display` |
| `--font-display` | `font-display` |
| `--spacing-section` | `p-section`, `m-section`, `gap-section` |
| `--radius-card` | `rounded-card` |
| `--shadow-card` | `shadow-card` |

**⚠️ Tailwind 기본 토큰과 충돌 금지**: `--color-blue-500`, `--text-lg` 같은 이름은 덮어쓰지 말 것

---

## 카테고리별 추출 규칙

### 1. Colors (`--color-*`)

Figma fill의 solid color에서 추출. 의미별 그룹화:

| 그룹 | 토큰 예시 | Figma 추정 위치 |
|------|----------|----------------|
| 배경 | `--color-bg-primary`, `--color-bg-secondary` | 큰 frame의 background |
| 텍스트 | `--color-text-primary`, `--color-text-muted` | text node의 fill |
| 브랜드 | `--color-brand-primary`, `--color-brand-accent` | 강조색, CTA 버튼 |
| 보더 | `--color-border-default`, `--color-border-strong` | stroke |
| 상태 | `--color-success`, `--color-warning`, `--color-error` | 명시적 의미 색상 |

**선택 기준**:
- ✅ 디자인 전체에서 3회 이상 등장
- ✅ Figma Variables/Styles에 정의되어 있음
- ❌ 1회성 사용 (임의값으로 처리)

### 2. Typography

#### Font Family (`--font-*`)
```css
--font-sans: "Inter", system-ui, sans-serif;
--font-display: "Pretendard", sans-serif;
--font-mono: "JetBrains Mono", monospace;
```

#### Font Size (`--text-*`)
의미별 또는 크기별:
```css
/* 의미별 (권장) */
--text-display: 48px;
--text-h1: 32px;
--text-h2: 24px;
--text-body: 16px;
--text-caption: 12px;
```

> Tailwind 기본(`text-xs/sm/base/lg/xl/2xl...`)과 겹치는 크기는 추가하지 않음

### 3. Spacing (`--spacing-*`)

Tailwind 기본 spacing (4px 배수: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80...)에 **없는 값**만 추가:

```css
/* 의미 기반 (권장) */
--spacing-section: 80px;       /* 섹션 간격 */
--spacing-content: 24px;       /* 콘텐츠 패딩 */
--spacing-gutter: 16px;        /* 카드 사이 간격 */
```

**판단 기준**:
- 4의 배수인가? → Tailwind 기본 사용 (`p-4`, `gap-6` 등)
- 비표준 값 (예: 17px, 22px)?
  - 1~2회 사용 → 임의값 `p-[17px]`
  - 3회 이상 → 토큰 추가

### 4. Border Radius (`--radius-*`)

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 20px;
--radius-card: 16px;
--radius-pill: 9999px;
```

> Tailwind 기본(`rounded-sm/md/lg/xl/full`)으로 충분하면 추가 안 함

### 5. Shadow / Effects (`--shadow-*`)

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-card: 0 4px 12px rgba(0, 0, 0, 0.1);
--shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.15);
--shadow-modal: 0 20px 40px rgba(0, 0, 0, 0.2);
```

---

## globals.css 통합 예시

```css
@import "tailwindcss";

@theme {
  /* ===== Colors ===== */
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: #171717;
  --color-text-primary: #ededed;
  --color-text-muted: #a1a1a1;
  --color-brand-primary: #2563eb;
  --color-brand-accent: #f59e0b;
  --color-border-default: #2a2a2a;

  /* ===== Typography ===== */
  --font-display: "Pretendard", sans-serif;
  --text-display: 48px;
  --text-h1: 32px;
  --text-h2: 24px;

  /* ===== Spacing ===== */
  --spacing-section: 80px;
  --spacing-section-mobile: 48px;

  /* ===== Radius ===== */
  --radius-card: 16px;

  /* ===== Shadow ===== */
  --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

---

## project-config.md 동기화 매핑

| globals.css `@theme` | project-config.md yaml |
|---------------------|------------------------|
| `--color-bg-primary` | `colors.bg-primary` |
| `--text-h1` | `typography.font-size.h1` |
| `--font-display` | `typography.font-family.display` |
| `--spacing-section` | `spacing.section-gap` |
| `--radius-card` | `border-radius.card` |
| `--shadow-card` | `effects.shadow-card` |

`/figma-to-tokens --update` 실행 시 양쪽이 자동 동기화됩니다.

---

## 안티패턴

### ❌ 색상값을 이름으로 사용
```css
/* 나쁨 */
--color-gray-1: #f5f5f5;
--color-dark-blue: #1e3a8a;
```

### ✅ 의미 기반
```css
/* 좋음 */
--color-bg-secondary: #f5f5f5;
--color-brand-primary: #1e3a8a;
```

### ❌ Tailwind 기본 덮어쓰기
```css
/* 나쁨 - Tailwind 기본 색상 깨짐 */
--color-blue-500: #ff0000;
```

### ✅ 새 이름 사용
```css
/* 좋음 */
--color-brand-blue: #ff0000;
```
