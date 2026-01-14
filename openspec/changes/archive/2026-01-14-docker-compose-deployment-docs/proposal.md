# Change: 添加 Docker Compose 部署文档

## Why

Hagicode 文档站点当前的安装指南（`docs/quick-start/installation.md`）仅描述了通过软件包分发方式进行本地安装的流程。该方式需要用户手动部署 PostgreSQL、配置环境、解压软件包并运行启动脚本。

与此同时，在 Hagicode 主代码仓库中存在一个 `docker-compose.yml` 文件，该文件定义了完整的容器化部署方案。此 Docker Compose 方式与现有的软件包安装方式存在显著差异，特别是涉及 ZAI MCP 服务器配置和物理路径映射方面。

当前文档站点存在以下问题：
1. 缺少 Docker Compose 部署文档，用户无法了解如何使用容器化方式快速部署 Hagicode 系统
2. 安装文档组织混乱，软件包安装方式与 Docker Compose 安装方式混合在同一位置
3. ZAI 配置说明缺失，Docker Compose 方式涉及 ZAI MCP 服务器的特殊配置未得到充分说明
4. 路径映射操作不明确，用户需要在主机路径上进行文件操作，但这一重要特性未突出说明
5. 缺乏推荐指导，用户不清楚应该优先选择哪种安装方式

## What Changes

- 创建新的 `docs/installation/` 目录结构，将安装文档独立管理
- 新增 `docs/installation/docker-compose.md` Docker Compose 部署文档（主要推荐方式）
- 迁移 `docs/quick-start/installation.md` → `docs/installation/package-deployment.md`（软件包部署方式）
- 更新 `sidebars.ts` 添加新的 installation 分类
- 更新快速开始指南，引导用户根据需求选择安装方式
- 在文档中明确说明推荐策略和两种方式的适用场景

## Impact

### 影响的规格
- `docusaurus-site` - 添加 Docker Compose 部署文档和新的安装文档结构需求

### 影响的文件/目录
- 新增：`docs/installation/_category_.json`
- 新增：`docs/installation/docker-compose.md`
- 移动：`docs/quick-start/installation.md` → `docs/installation/package-deployment.md`
- 修改：`sidebars.ts` - 添加 installation 分类
- 修改：`docs/quick-start/` 相关文档 - 添加对 installation/ 的引用

### 预期成果
- 用户可以通过 Docker Compose 一键部署完整的 Hagicode 系统
- 文档结构更清晰，用户可以快速对比两种安装方式并做出选择
- Docker Compose 用户和软件包用户都能找到适合自己的文档
- 为容器化部署中的 ZAI MCP 服务器配置提供完整参考
- 帮助用户理解和使用主机路径映射进行文件操作

## Status

**ExecutionCompleted** (已完成执行)
