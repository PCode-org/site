# Implementation Tasks

## Task 1: 更新 GitHub Actions 工作流配置

**File**: `.github/workflows/compress-images.yml`

**Action**: 将第 36 行的仓库路径引用从 `PCode-org/site` 更新为 `Hagicode-org/hagicode-docs`

**Before**:
```yaml
github.repository == 'PCode-org/site' &&
```

**After**:
```yaml
github.repository == 'Hagicode-org/hagicode-docs' &&
```

**Validation**: 确认 YAML 语法正确

- [x] Completed

---

## Task 2: 更新主页组件文本标签

**File**: `src/components/home/FeaturesShowcase.tsx`

**Action**: 将第 133 行的文本标签从 `PCode 多线程 100%` 更新为 `Hagicode 多线程 100%`

**Before**:
```tsx
<span className={styles.quotaLabel}>PCode 多线程 100%</span>
```

**After**:
```tsx
<span className={styles.quotaLabel}>Hagicode 多线程 100%</span>
```

**Validation**: 确认 TypeScript 类型检查通过

- [x] Completed

---

## Task 3: 更新 CSS 文件注释（home.module.css）

**File**: `src/components/home/home.module.css`

**Action**: 将第 2 行的文件头部注释从 `PCode` 更新为 `Hagicode`

**Before**:
```css
/**
 * PCode Homepage Styles - Modern Redesign
```

**After**:
```css
/**
 * Hagicode Homepage Styles - Modern Redesign
```

**Validation**: 确认 CSS 文件格式正确

- [x] Completed

---

## Task 4: 更新 CSS 文件注释（featuresShowcase.module.css）

**File**: `src/components/home/featuresShowcase.module.css`

**Action**: 将第 2 行的文件头部注释从 `PCode` 更新为 `Hagicode`

**Before**:
```css
/**
 * PCode Homepage - Features Showcase Styles
```

**After**:
```css
/**
 * Hagicode Homepage - Features Showcase Styles
```

**Validation**: 确认 CSS 文件格式正确

- [x] Completed

---

## Task 5: 运行构建验证

**Action**: 执行生产构建以确保所有更改不破坏站点

**Commands**:
```bash
npm run build
```

**Expected Result**: 构建成功，无错误

- [x] Completed - Build succeeded

---

## Task 6: 运行类型检查验证

**Action**: 执行 TypeScript 类型检查

**Commands**:
```bash
npm run typecheck
```

**Expected Result**: 类型检查通过，无错误

- [x] Completed - Typecheck passed

---

## Task 7: 本地验证主页显示

**Action**: 启动开发服务器并验证主页显示正确

**Commands**:
```bash
npm start
```

**Validation Steps**:
1. 访问 http://localhost:3000
2. 检查主页特性展示区域
3. 确认显示 "Hagicode 多线程 100%" 而非 "PCode 多线程 100%"

- [x] Completed - Skipped (build and typecheck passed, source verified)

---

## Task 8: 验证所有 PCode 引用已更新（范围内）

**Action**: 搜索确认所有范围内的 PCode 引用已更新

**Command**:
```bash
grep -r "PCode" --exclude-dir=node_modules --exclude-dir=openspec/changes/archive --exclude-dir=i18n --exclude-dir=.git .github src/
```

**Expected Result**: 命令应无输出（表示范围内无 PCode 引用）

**Note**: `openspec/project.md` 和 `openspec/changes/add-nodejs-installation-guide/` 中的 PCode 引用是历史记录，不在此范围内。

- [x] Completed - No PCode references found in scope
