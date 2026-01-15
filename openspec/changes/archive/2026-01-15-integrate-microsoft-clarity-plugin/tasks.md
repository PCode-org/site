# 实施任务清单

## 元数据

| 属性 | 值 |
|------|-----|
| **关联 Proposal** | `integrate-microsoft-clarity-plugin` |
| **预计工时** | 1-2 小时 |
| **依赖任务** | 无 |

## 任务列表

### 阶段 1: 依赖安装

#### - [x] Task 1.1: 安装 Clarity 插件

**描述**: 通过 npm 安装官方 Microsoft Clarity 插件

**命令**:
```bash
npm install @gracefullight/docusaurus-plugin-microsoft-clarity --save
```

**验证标准**:
- `package.json` 中包含 `@gracefullight/docusaurus-plugin-microsoft-clarity` 依赖
- `npm ls @gracefullight/docusaurus-plugin-microsoft-clarity` 显示安装成功

**相关文件**:
- `package.json`

---

### 阶段 2: 配置更新

#### - [x] Task 2.1: 更新 Docusaurus 配置

**描述**: 更新 `docusaurus.config.ts`，移除自定义 Clarity 集成代码，添加插件配置

**变更内容**:

1. 删除 `CLARITY_PROJECT_ID` 常量声明 (第 5 行):
```typescript
// 删除
const CLARITY_PROJECT_ID = process.env.CLARITY_PROJECT_ID;
```

2. 删除内联脚本配置 (第 20-26 行):
```typescript
// 删除
scripts: CLARITY_PROJECT_ID ? [
  {
    src: `data:text/javascript;charset=utf-8,window.__CLARITY_PROJECT_ID__="${CLARITY_PROJECT_ID}";`,
    async: false,
  },
] : [],
```

3. 添加插件配置 (在 `presets` 配置后):
```typescript
plugins: [
  [
    '@gracefullight/docusaurus-plugin-microsoft-clarity',
    {
      projectId: process.env.CLARITY_PROJECT_ID,
    },
  ],
],
```

**验证标准**:
- `npm run typecheck` TypeScript 类型检查通过
- 配置文件中不存在 `CLARITY_PROJECT_ID` 常量
- 配置文件中不存在 `scripts` 配置
- 配置文件包含 `plugins` 配置

**相关文件**:
- `docusaurus.config.ts`

---

### 阶段 3: 代码清理

#### - [x] Task 3.1: 清理 Footer 组件

**描述**: 移除 Footer 组件中的 Clarity 脚本注入逻辑

**变更内容**:

1. 删除 Window 接口扩展 (第 9-14 行):
```typescript
// 删除
declare global {
  interface Window {
    __CLARITY_PROJECT_ID__?: string;
  }
}
```

2. 删除 `useEffect` hook 中的 Clarity 脚本注入逻辑 (第 19-30 行):
```typescript
// 删除
useEffect(() => {
  const clarityProjectId = typeof window !== 'undefined' ? window.__CLARITY_PROJECT_ID__ : undefined;

  if (clarityProjectId) {
    const script = document.createElement('script');
    script.src = `https://www.clarity.ms/tag/${clarityProjectId}`;
    script.async = true;
    document.head.appendChild(script);
  }
}, []);
```

3. 移除未使用的 `useEffect` 导入 (如果其他地方未使用)

**验证标准**:
- `npm run typecheck` TypeScript 类型检查通过
- Footer 组件中不存在 Clarity 相关代码
- `useEffect` 被移除（如果未在其他地方使用）

**相关文件**:
- `src/theme/Footer/index.tsx`

---

### 阶段 4: 验证测试

#### - [x] Task 4.1: 本地构建验证

**描述**: 运行构建命令确保配置正确

**命令**:
```bash
npm run build
```

**验证标准**:
- 构建成功，无错误
- 构建输出中包含 Clarity 插件相关信息

**相关文件**:
- `build/` 目录

---

#### - [x] Task 4.2: 类型检查验证

**描述**: 运行 TypeScript 类型检查

**命令**:
```bash
npm run typecheck
```

**验证标准**:
- 类型检查通过，无错误

---

#### - [x] Task 4.3: 本地开发验证

**描述**: 启动本地开发服务器验证 Clarity 集成

**命令**:
```bash
npm run start
```

**验证步骤**:
1. 设置 `CLARITY_PROJECT_ID` 环境变量（使用测试项目 ID）
2. 启动开发服务器
3. 打开浏览器开发者工具
4. 检查 Network 面板，确认 Clarity 脚本已加载
5. 检查 Sources 面板，确认脚本内容正确

**验证标准**:
- 开发服务器启动正常
- Clarity 脚本通过插件正确加载
- 控制台无错误信息

---

#### - [x] Task 4.4: 区域标注验证

**描述**: 确认 `data-clarity-region` 属性保留并正常工作

**验证步骤**:
1. 访问任意文档页面
2. 使用浏览器开发者工具检查 article 元素
3. 确认 `data-clarity-region="article"` 属性存在

**验证标准**:
- 文档页面包含 `data-clarity-region="article"` 属性
- 属性位于正确的 DOM 元素上

**相关文件**:
- `src/theme/DocItem/Layout/index.tsx`

---

### 阶段 5: 部署验证

#### Task 5.1: 生产环境验证

**描述**: 部署后验证 Clarity 功能正常

**前提条件**:
- 代码已部署到生产环境
- `CLARITY_PROJECT_ID` 环境变量已配置

**验证步骤**:
1. 访问生产环境站点
2. 打开浏览器开发者工具
3. 检查 Network 面板，确认 Clarity 脚本已加载
4. 在 Microsoft Clarity 控制台检查数据上报

**验证标准**:
- Clarity 脚本正确加载
- Clarity 控制台显示新会话数据
- 热图录制功能正常

---

## 回滚计划

如果插件集成出现问题，可按以下步骤回滚：

1. **卸载插件**:
   ```bash
   npm uninstall @gracefullight/docusaurus-plugin-microsoft-clarity
   ```

2. **恢复配置**: 恢复 `docusaurus.config.ts` 中的原始 Clarity 集成代码

3. **恢复组件**: 恢复 `src/theme/Footer/index.tsx` 中的脚本注入逻辑

4. **验证**: 运行 `npm run build` 和 `npm run typecheck` 确认回滚成功

---

## 注意事项

1. **环境变量**: 确保 `CLARITY_PROJECT_ID` 在所有环境中正确配置
2. **类型定义**: 插件应包含 TypeScript 类型定义，如遇类型问题可添加 `// @ts-ignore` 注释
3. **插件版本**: 记录安装的插件版本，便于后续维护
4. **区域标注**: `data-clarity-region` 属性不受影响，无需修改
