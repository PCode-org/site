# 使用官方插件集成 Microsoft Clarity

## 元数据

| 属性 | 值 |
|------|-----|
| **Change ID** | `integrate-microsoft-clarity-plugin` |
| **状态** | ExecutionCompleted |
| **创建日期** | 2025-01-15 |
| **优先级** | Medium |
| **复杂度** | Low |
| **类型** | Improvement |

## 概述

将现有的自定义 Microsoft Clarity 集成迁移到官方 Docusaurus 插件 `@gracefullight/docusaurus-plugin-microsoft-clarity`，以实现更标准化、可维护的集成方式。

## 背景

### 当前实现

当前 Hagicode 文档站点已经实现了 Microsoft Clarity 集成，但采用的是自定义实现方式：

1. **配置注入** (`docusaurus.config.ts:4-26`):
   - 通过 `process.env.CLARITY_PROJECT_ID` 读取环境变量
   - 使用内联脚本将 Clarity Project ID 暴露到 `window.__CLARITY_PROJECT_ID__`

2. **脚本注入** (`src/theme/Footer/index.tsx:19-30`):
   - 在 Footer 组件中通过 `useEffect` 动态注入 Clarity 脚本
   - 脚本地址: `https://www.clarity.ms/tag/${clarityProjectId}`

3. **区域标注** (`src/theme/DocItem/Layout/index.tsx:51`):
   - 在文档文章元素上添加 `data-clarity-region="article"` 属性

### 存在的问题

- **非标准化集成**: 自定义实现不符合 Docusaurus 插件生态的最佳实践
- **维护成本高**: Clarity 脚本注入逻辑分散在配置和主题组件中
- **版本兼容性风险**: 自定义实现可能在 Docusaurus 升级时出现兼容性问题
- **类型声明污染**: 需要扩展 Window 接口以支持全局变量

## 解决方案

### 使用官方插件

安装并配置 `@gracefullight/docusaurus-plugin-microsoft-clarity` 插件：

- **插件包**: `@gracefullight/docusaurus-plugin-microsoft-clarity`
- **NPM 地址**: https://www.npmjs.com/package/@gracefullight/docusaurus-plugin-microsoft-clarity
- **配置方式**: 在 `docusaurus.config.ts` 的 `plugins` 数组中配置

### 技术方案

```typescript
// docusaurus.config.ts
plugins: [
  [
    '@gracefullight/docusaurus-plugin-microsoft-clarity',
    {
      projectId: process.env.CLARITY_PROJECT_ID,
    },
  ],
],
```

### 影响范围

| 文件 | 操作 | 说明 |
|------|------|------|
| `package.json` | 修改 | 添加插件依赖 |
| `docusaurus.config.ts` | 修改 | 移除内联脚本，添加插件配置 |
| `src/theme/Footer/index.tsx` | 修改 | 移除 Clarity 脚本注入逻辑 |
| `src/theme/DocItem/Layout/index.tsx` | 保留 | `data-clarity-region` 属性保留 |

## 影响分析

### 技术变更

1. **依赖变更**:
   - 新增: `@gracefullight/docusaurus-plugin-microsoft-clarity`

2. **代码变更**:
   - 删除 `docusaurus.config.ts` 中的 `scripts` 配置 (第 21-26 行)
   - 删除 `docusaurus.config.ts` 中的 `CLARITY_PROJECT_ID` 常量 (第 5 行)
   - 添加 `plugins` 配置到 `docusaurus.config.ts`
   - 删除 `src/theme/Footer/index.tsx` 中的 Clarity 脚本注入逻辑 (第 19-30 行)
   - 删除 `src/theme/Footer/index.tsx` 中的 Window 接口扩展 (第 9-14 行)

### 兼容性

- **Docusaurus 版本**: 插件兼容 Docusaurus v3.x
- **TypeScript**: 支持类型定义
- **环境变量**: 保持 `CLARITY_PROJECT_ID` 环境变量配置方式不变

### 风险评估

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| 插件功能缺失 | Low | 插件支持标准 Clarity 集成功能 |
| 插件维护停止 | Low | 可快速回退到自定义实现 |
| 环境变量配置差异 | Low | 使用相同的环境变量名 |

## 验证标准

### 功能验证

- [ ] Clarity 脚本正常加载（检查网络请求）
- [ ] Clarity 热图录制功能正常
- [ ] `data-clarity-region="article"` 属性正常工作

### 构建验证

- [ ] `npm run build` 构建成功
- [ ] `npm run typecheck` TypeScript 类型检查通过
- [ ] 本地开发服务器启动正常

### 部署验证

- [ ] 生产环境 Clarity 脚本正常加载
- [ ] 数据上报正常（检查 Clarity 控制台）

## 预期收益

1. **标准化**: 使用官方插件符合 Docusaurus 生态最佳实践
2. **可维护性**: 减少自定义代码，降低维护成本
3. **兼容性**: 插件更新由社区维护，升级更安全
4. **代码简洁**: 移除约 20 行自定义代码

## 相关资源

- [Docusaurus Plugins 文档](https://docusaurus.io/docs/api/plugins)
- [@gracefullight/docusaurus-plugin-microsoft-clarity NPM](https://www.npmjs.com/package/@gracefullight/docusaurus-plugin-microsoft-clarity)
- [Microsoft Clarity 官方文档](https://learn.microsoft.com/en-us/clarity/)
