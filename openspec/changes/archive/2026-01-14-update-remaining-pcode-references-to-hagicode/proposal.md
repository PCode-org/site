# 更新剩余PCode引用为Hagicode

## Status

**Status:** ExecutionCompleted

## Overview

将文档站点中所有剩余的 "PCode" 引用统一更新为 "Hagicode"，确保品牌命名一致性。

## Background

项目已于 2026-01-14 完成了从 "PCode" 到 "Hagicode" 的品牌重命名，但仍有部分遗留内容使用旧名称 "PCode"。这些遗留引用主要存在于：

1. **GitHub Actions 工作流配置** - `.github/workflows/compress-images.yml` 中的仓库路径引用
2. **主页组件代码** - `src/components/home/FeaturesShowcase.tsx` 中的文本标签
3. **CSS 样式文件注释** - `src/components/home/home.module.css` 和 `featuresShowcase.module.css`
4. **遗留 i18n 目录** - `i18n/en/` 目录中的英文翻译文件（已废弃）
5. **OpenSpec 历史记录** - `openspec/project.md` 中的历史内容（保留原样）
6. **其他历史提案** - `openspec/changes/` 目录下其他已完成的提案（保留历史记录原样）

这些未更新的引用导致品牌命名不一致，可能造成用户理解和品牌识别上的混淆。

## Goals

1. **品牌一致性**：确保整个文档站点使用统一的 "Hagicode" 品牌名称
2. **用户体验**：消除因品牌名称不一致可能造成的困惑
3. **可维护性**：提高项目文档的准确性和专业性

## Non-Goals

1. 不更新 `openspec/changes/archive/` 目录下的历史记录（这些是历史文档，保留原样）
2. 不修改 `openspec/project.md` 中的 Recent Changes 部分（这是项目历史记录）
3. 不修改已废弃的 `i18n/en/` 目录（该目录在单语言迁移后已不再使用，后续可考虑删除）
4. **不修改其他历史提案**（`openspec/changes/` 目录下其他已完成的提案保留原样，作为历史记录）

## Scope

### In Scope

- **GitHub Actions 配置**
  - `.github/workflows/compress-images.yml`: 更新 `github.repository == 'PCode-org/site'` 为 `github.repository == 'Hagicode-org/hagicode-docs'`

- **主页组件代码**
  - `src/components/home/FeaturesShowcase.tsx`: 更新文本标签 `PCode 多线程 100%` 为 `Hagicode 多线程 100%`

- **CSS 样式文件**
  - `src/components/home/home.module.css`: 更新注释 `* PCode Homepage Styles` 为 `* Hagicode Homepage Styles`
  - `src/components/home/featuresShowcase.module.css`: 更新注释 `* PCode Homepage - Features Showcase Styles` 为 `* Hagicode Homepage - Features Showcase Styles`

### Out of Scope

- `openspec/changes/archive/` 目录下的历史记录
- `openspec/changes/` 目录下其他已完成的提案（保留历史记录原样）
- `openspec/project.md` 中的 Recent Changes 部分
- `i18n/en/` 目录（已废弃的英文翻译，不在当前项目中使用）

## Impact Analysis

### User Impact

- **正面影响**：
  - 用户在查看站点源码和 GitHub Actions 时将看到一致的品牌名称
  - 主页上的产品名称显示更加统一和专业

- **无负面影响**：
  - 这些更改不影响站点功能和用户体验
  - 更改仅涉及内部配置和注释

### Technical Impact

- **低风险**：
  - 所有更改都是简单的文本替换
  - 不涉及任何功能逻辑变更
  - GitHub Actions 工作流条件需要匹配新的仓库路径

### Breaking Changes

无破坏性变更。

## Success Criteria

1. 所有剩余的 "PCode" 引用（在范围内的）都已更新为 "Hagicode"
2. 站点构建成功（`npm run build` 通过）
3. TypeScript 类型检查通过（`npm run typecheck` 通过）
4. 主页显示正确的品牌名称

## Alternatives Considered

### Alternative 1: 完全删除 i18n/en/ 目录

**描述**：删除已废弃的 `i18n/en/` 目录，而不是保留它。

**优点**：
- 清理不需要的文件
- 减少仓库体积

**缺点**：
- 超出本次变更的范围
- 可能需要额外的验证工作

**决策**：保留该目录不变，仅更新范围内的文件。i18n/en/ 目录的删除可以作为单独的清理任务。

### Alternative 2: 同时更新 openspec/project.md 中的历史记录

**描述**：将 `openspec/project.md` Recent Changes 部分中的 "PCode" 也更新为 "Hagicode"。

**优点**：
- 整个文档完全统一

**缺点**：
- 破坏历史记录的准确性
- Recent Changes 应该反映当时的情况

**决策**：不更新历史记录，保持其准确性。

## Dependencies

- 无外部依赖
- 可独立完成

## Implementation Notes

1. 更改完成后需要验证：
   - `npm run build` 确保构建成功
   - `npm run typecheck` 确保 TypeScript 类型检查通过
   - 本地启动 `npm start` 验证主页显示正确

2. GitHub Actions 工作流更新后，需要在仓库设置中确认新的仓库路径匹配正确

## Related Changes

- 相关变更：2026-01-14 Brand Rename - PCode to Hagicode（已完成大部分重命名工作）
- 本次变更完成剩余的遗漏部分
