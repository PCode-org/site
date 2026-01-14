# Hero 组件高度调整

**Change ID:** `hero-component-height-adjustment`
**Status:** ExecutionCompleted
**Created:** 2025-01-13

## 概述

将网站首页 Hero 组件的最小高度从当前的 `90vh` 调整为 `50vh`，以改善用户体验，提供更清晰的视觉提示，引导用户发现页面下方的更多内容。

## 背景

当前网站首页使用自定义 Hero 组件作为主要视觉展示区域。该组件目前设置了 `min-height: 90vh`（在移动端为 `70vh`），占据了视口高度的 90%，这使得首屏内容完全填充了用户视野。

**相关技术栈：**
- Docusaurus 3.0
- React 18.2
- CSS Modules (位于 `src/components/home/home.module.css`)

## 问题陈述

当前 Hero 组件的高度设置存在以下用户体验问题：

1. **视觉提示不足**：用户无法直观地感知到页面下方还有更多内容
2. **滚动引导缺失**：接近全屏的高度（90vh）使得首屏几乎完全填充，用户可能误以为页面内容仅限于此
3. **探索行为受阻**：缺乏自然的视觉引导鼓励用户继续向下滚动浏览网站的其他部分（功能展示、截图展示、快速开始等）

## 解决方案

### 核心变更

将 Hero 组件的最小高度从 `90vh` 修改为 `50vh`：

**修改文件：**
- `src/components/home/home.module.css`

**具体修改：**
```css
/* 修改前 */
.heroSection {
  min-height: 90vh;
  ...
}

/* 修改后 */
.heroSection {
  min-height: 50vh;
  ...
}
```

**响应式调整（移动端）：**
```css
/* 移动端保持相对较低的高度以确保良好的移动体验 */
@media (max-width: 767px) {
  .heroSection {
    min-height: 50vh; /* 从 70vh 调整为 50vh */
  }
}
```

### 设计考量

1. **一致性**：桌面端和移动端统一使用 `50vh`，保持跨设备的一致体验
2. **内容可见性**：调整后，用户可以看到 Hero 区域的部分内容以及下一个 section（Features）的开头，提供明确的滚动提示
3. **视觉平衡**：`50vh` 的高度足够展示 Hero 标题、副标题和按钮，同时留出空间预览下方内容

## 影响分析

### 预期效果

- **改善内容可发现性**：用户能够立即看到页面下方存在更多内容
- **自然的滚动引导**：部分可见的下一个 section 提供视觉提示，促进向下滚动行为
- **提升探索率**：用户更有可能浏览完整页面，发现功能展示、截图展示等内容

### 潜在风险

1. **视觉冲击力减弱**：较小的 Hero 可能降低首屏的视觉冲击力
2. **品牌展示空间减少**：Hero 区域减少可能影响品牌信息的展示

**缓解措施：**
- 保留 Hero 区域的渐变背景、动画效果和视觉设计
- 保持响应式设计，确保在不同屏幕尺寸下的良好体验

## 验证标准

### 功能验证

- [ ] Hero 组件高度从 `90vh` 变更为 `50vh`
- [ ] 移动端响应式高度从 `70vh` 变更为 `50vh`
- [ ] Hero 内容（标题、副标题、按钮）完整显示且无溢出
- [ ] 下一个 section（Features）在首屏部分可见

### 构建验证

```bash
# 运行本地开发服务器测试
npm start

# 确保生产构建无错误
npm run build

# 验证 TypeScript 类型正确性
npm run typecheck
```

### 浏览器测试

- [ ] Chrome/Edge (最新版)
- [ ] Firefox (最新版)
- [ ] Safari (最新版)
- [ ] 移动端浏览器 (iOS Safari, Chrome Mobile)

## 回滚计划

如果调整后的用户体验不佳，可以通过简单的 CSS 修改恢复原值：

```css
.heroSection {
  min-height: 90vh; /* 恢复原值 */
}

@media (max-width: 767px) {
  .heroSection {
    min-height: 70vh; /* 恢复原值 */
  }
}
```

## 相关资源

- **实现文件：** `src/components/home/home.module.css`
- **组件文件：** `src/components/home/HeroSection.tsx`
- **页面入口：** `src/pages/index.tsx`
- **Docusaurus 文档：** https://docusaurus.io/docs
