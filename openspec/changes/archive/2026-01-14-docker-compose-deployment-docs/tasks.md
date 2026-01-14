## 1. 创建新的安装文档目录结构

- [x] 1.1 创建 `docs/installation/` 目录
- [x] 1.2 创建 `docs/installation/_category_.json` 分类元数据文件
  - 配置标签为"安装指南"
  - 设置适当的 sidebar_position
  - 配置为可折叠类别

## 2. 编写 Docker Compose 部署文档

- [x] 2.1 创建 `docs/installation/docker-compose.md` 文件
- [x] 2.2 添加 frontmatter（title, description, sidebar_position）
- [x] 2.3 编写前置要求章节
  - Docker 安装说明（Windows、macOS、Linux）
  - Docker Compose 版本要求
- [x] 2.4 编写快速开始章节
  - docker-compose.yml 文件下载/准备
  - 一键启动命令：`docker-compose up -d`
  - 服务验证步骤
- [x] 2.5 编写配置说明章节
  - **ZAI MCP 服务器配置**：详细说明如何在容器环境中配置 ZAI
  - **路径映射**：重点说明卷挂载配置，主机路径 `/home/newbe36524/repos/newbe36524` 与容器内路径的映射关系
  - **环境变量**：解释 `ASPNETCORE_ENVIRONMENT`、`ConnectionStrings__Default`、`License__Activation__LicenseKey` 等关键配置
  - 端口映射说明（PostgreSQL: `35439:5432`，Hagicode: `45000:5000`）
- [x] 2.6 编写服务架构章节
  - PostgreSQL 服务配置说明
  - Hagicode 应用服务配置说明
  - 网络配置（pcode-network 桥接网络）
  - 健康检查配置
- [x] 2.7 编写访问方式章节
  - 通过 `http://localhost:45000` 访问应用
  - 数据库连接说明
- [x] 2.8 编写故障排除章节
  - 容器启动失败的常见原因
  - 端口冲突解决
  - 网络问题排查
  - 日志查看方法

## 3. 迁移现有安装文档

- [x] 3.1 移动 `docs/quick-start/installation.md` → `docs/installation/package-deployment.md`
- [x] 3.2 更新 `package-deployment.md` 中的内部链接引用
- [x] 3.3 添加 frontmatter 更新（title, description, sidebar_position）
- [x] 3.4 在文档开头添加推荐说明，引导用户优先考虑 Docker Compose 方式

## 4. 更新侧边栏配置

- [x] 4.1 修改 `sidebars.ts`，在 `docsSidebar` 中添加新的 `installation` 分类
- [x] 4.2 配置 installation 分类为自动生成子目录内容
- [x] 4.3 移除 quick-start 分类中的 installation.md 引用（已被移动）
- [x] 4.4 设置 installation 分类显示在 quick-start 分类之前或之后（根据文档流程确定）

## 5. 更新快速开始指南

- [x] 5.1 在 `docs/quick-start/` 相关文档中添加对 `docs/installation/` 的引用
- [x] 5.2 在适当的文档中添加安装方式选择指导
- [x] 5.3 确保所有指向旧安装指南的链接都更新到新位置

## 6. 明确推荐策略

- [x] 6.1 在 installation 分类索引页或两篇文档开头添加推荐说明
  - **首选方式**：Docker Compose 部署（推荐大多数用户使用）
    - 优势：环境隔离、一键部署、易于管理、适合开发和测试
  - **备选方式**：软件包部署（适用于特定场景）
    - 场景：需要更精细控制、不使用 Docker、生产环境原生部署

## 7. 验证和测试

- [x] 7.1 运行 `npm run typecheck` 确保无 TypeScript 错误
- [x] 7.2 运行 `npm run build` 确保构建成功，无断链错误
- [x] 7.3 使用 `npm start` 在本地预览文档
- [x] 7.4 验证所有链接正确指向新位置
- [x] 7.5 验证侧边栏正确显示 installation 分类
- [x] 7.6 验证 Docker Compose 文档中的代码块语法高亮正确
- [x] 7.7 验证 Tabs 组件（跨平台内容）正确显示

## 8. 完成

- [x] 8.1 更新 tasks.md，将所有任务标记为完成
- [x] 8.2 提交更改并等待审核批准
