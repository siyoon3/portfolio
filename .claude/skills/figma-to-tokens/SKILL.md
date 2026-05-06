---
name: figma-to-tokens
description: Figma URL에서 디자인 토큰(색상, 타이포그래피, spacing, radius, shadow)만 추출. 코드는 생성하지 않고 globals.css @theme + project-config.md만 업데이트. 디자인 시스템 정의/업데이트 시 사용합니다.
argument-hint: "[figma_url] [--format css|yaml|both] [--update | --dry-run]"
allowed-tools: Read, Write, Edit, Bash, mcp__figma__get_figma_data
---

# Figma to Tokens — 디자인 토큰 추출

Figma 디자인에서 토큰만 뽑아 Tailwind v4 `@theme` 블록과 `project-config.md`에 적용합니다.

## 연동 에이전트
- `figma-analyzer`: 토큰 추출 전문

## 사용법

```
/figma-to-tokens <figma_url> [options]
```

### 인자
| 인자 | 설명 |
|------|------|
| `figma_url` | Figma 디자인 URL (`node-id` 포함 필수) |

### 옵션
| 옵션 | 동작 |
|------|------|
| `--format css` | CSS Variable 형식만 출력 (기본) |
| `--format yaml` | YAML만 출력 (project-config.md 형식) |
| `--format both` | 둘 다 출력 |
| `--update` | 실제 파일 업데이트 (기본은 dry-run) |
| `--dry-run` | 미리보기만, 파일 수정 안 함 |

---

## 실행 단계

### Step 1: Figma 데이터 추출

```
mcp__figma__get_figma_data(fileKey, nodeId)
```

### Step 2: 토큰 분류 추출

[token-schema.md](token-schema.md)의 카테고리별로 분류:

1. **Colors** — bg, text, brand, border 등
2. **Typography** — font-family, font-size, font-weight, line-height
3. **Spacing** — section-gap, content-padding 등
4. **Border Radius** — sm, md, lg, xl, full
5. **Effects** — shadow, blur

### Step 3: 출력 생성

#### CSS Variables (Tailwind v4 @theme 형식)
```css
@theme {
  /* Colors */
  --color-bg-primary: #1a1a1a;
  --color-text-primary: #ffffff;
  --color-brand-primary: #2563eb;

  /* Typography */
  --font-display: "Inter", sans-serif;
  --text-display: 48px;
  --text-body: 16px;

  /* Spacing */
  --spacing-section: 80px;

  /* Radius */
  --radius-card: 12px;

  /* Shadow */
  --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

#### YAML (project-config.md 동기화용)
```yaml
colors:
  bg-primary: '#1a1a1a'
  text-primary: '#ffffff'
  brand-primary: '#2563eb'

typography:
  font-family:
    display: '"Inter", sans-serif'
  font-size:
    display: '48px'
    body: '16px'

spacing:
  section-gap: '80px'

border-radius:
  card: '12px'

effects:
  shadow-card: '0 4px 12px rgba(0, 0, 0, 0.1)'
```

### Step 4: 적용 (`--update` 시)

1. **`src/app/globals.css`** 의 `@theme { ... }` 블록 업데이트
   - 기존 토큰은 유지/덮어쓰기
   - 신규 토큰은 추가
   - 사용자에게 변경 diff 표시

2. **`.claude/project-config.md`** 의 yaml 섹션 동기화
   - colors, typography, spacing, border-radius, effects 섹션 갱신

3. **변경 리포트 출력**
   ```markdown
   ## ✅ 토큰 업데이트 완료

   ### globals.css @theme
   - 추가: --color-brand-primary, --text-display
   - 변경: --color-text-primary (#fff → #f5f5f5)

   ### project-config.md
   - colors 섹션 동기화 완료
   - typography 섹션 동기화 완료
   ```

---

## 주의사항

1. **`--update` 없으면 미리보기만**: 실수 방지를 위한 안전 기본값
2. **Tailwind 기본 토큰과 충돌 회피**: `--color-blue-500` 같이 기본 색상 덮어쓰지 않음. 새 이름 사용 (`--color-brand-blue`)
3. **네이밍 규칙**: 의미 기반 (`bg-primary`, `text-muted`), 색상값 기반 금지 (`gray-1`, `dark-blue` ❌)
4. **사용 빈도 낮은 값은 토큰화 X**: 1~2회만 쓰이면 임의값으로 충분
5. **figma-analyzer 호출**: 이 스킬은 figma-analyzer 에이전트에게 위임

---

## 사용 예시

```bash
# 미리보기 (파일 수정 안 함)
/figma-to-tokens https://www.figma.com/design/ABC/Portfolio?node-id=1-1

# 실제 적용
/figma-to-tokens https://www.figma.com/design/ABC/Portfolio?node-id=1-1 --update

# YAML만 출력 (project-config.md 수동 편집용)
/figma-to-tokens https://www.figma.com/design/ABC/Portfolio?node-id=1-1 --format yaml
```
