# Implementation Tasks

## 1. 顶部导航栏添加 QQ 群链接

- [x] 1.1 在 `docusaurus.config.ts` 的 navbar.items 数组中添加 QQ 群链接项
- [x] 1.2 配置链接为外部链接类型 (`type: 'href'`)
- [x] 1.3 设置链接目标为 `https://qm.qq.com/q/Wk6twXHdyS`
- [x] 1.4 设置显示标签为 "QQ群"
- [x] 1.5 确保链接配置为在新标签页打开（Docusaurus 默认行为）

## 2. 底部栏添加 QQ 群链接

- [x] 2.1 在 `docusaurus.config.ts` 的 footer.links 数组的 Community 部分添加 QQ 群链接
- [x] 2.2 配置链接为外部链接 (`href`)
- [x] 2.3 设置链接目标为 `https://qm.qq.com/q/Wk6twXHdyS`
- [x] 2.4 设置显示标签为 "QQ技术支持群 (610394020)" 或 "HagiCode 技术支持 QQ 群 610394020"

## 3. 首页 Hero 添加 QQ 群卡片

- [x] 3.1 在 `src/components/home/HeroSection.tsx` 中添加 QQ 群卡片组件
- [x] 3.2 使用现有的样式系统 (`home.module.css`) 或添加新样式
- [x] 3.3 设计卡片样式，包括：
  - 边框和圆角（与其他卡片一致）
  - 图标（🤝 或类似图标）
  - 标题："加入技术支持群组"
  - 描述："HagiCode 技术支持 QQ 群 610394020"
  - CTA 按钮："立即加入"
- [x] 3.4 配置按钮链接为 `https://qm.qq.com/q/Wk6twXHdyS`
- [x] 3.5 确保按钮在新标签页打开

## 4. 样式一致性检查

- [x] 4.1 确保 QQ 群卡片与首页其他卡片样式一致
- [x] 4.2 确保 QQ 群链接在导航栏和底部栏中的样式与现有链接一致
- [x] 4.3 验证深色/浅色主题下的显示效果

## 5. 验证和测试

- [x] 5.1 运行 `npm run build` 确保构建成功
- [x] 5.2 运行 `npm run typecheck` 确保没有 TypeScript 错误
- [x] 5.3 在开发服务器 (`npm start`) 中验证所有链接正常工作
- [x] 5.4 验证所有链接在新标签页打开
- [x] 5.5 在不同浏览器中测试显示效果
- [x] 5.6 在移动设备上测试响应式布局
