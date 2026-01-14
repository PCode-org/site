## ADDED Requirements

### Requirement: Docker Compose Deployment Documentation

The documentation site MUST provide a comprehensive guide for deploying Hagicode using Docker Compose. The guide SHALL cover the complete containerized deployment workflow including prerequisites, quick start commands, configuration details (especially ZAI MCP server configuration and volume path mapping), service architecture, access methods, and troubleshooting.

#### Scenario: User accesses Docker Compose installation guide

- **GIVEN** the user has navigated to the Installation category
- **WHEN** the user views the installation options
- **THEN** a Docker Compose deployment guide titled "Docker Compose 部署" MUST be accessible
- **AND** the guide MUST be marked as the recommended installation method
- **AND** the guide MUST appear as the first document in the Installation category

#### Scenario: Guide includes complete deployment workflow

- **GIVEN** the user is reading the Docker Compose deployment guide
- **WHEN** the user views the document content
- **THEN** the guide MUST include the following sections:
  - Prerequisites (Docker and Docker Compose installation)
  - Quick Start (one-command deployment)
  - Configuration Details (environment variables, ports, volumes)
  - ZAI MCP Server Configuration (container-specific setup)
  - Volume Path Mapping (host-to-container path mapping)
  - Service Architecture (PostgreSQL and Hagicode services)
  - Access Methods (application URL and database connection)
  - Troubleshooting (common containerization issues)
- **AND** the guide MUST use Docusaurus Tabs and TabItem components for cross-platform content
- **AND** code blocks MUST use appropriate syntax highlighting (bash, yaml)

#### Scenario: ZAI MCP server configuration is documented

- **GIVEN** the user is deploying Hagicode with Docker Compose
- **WHEN** the user reaches the configuration section
- **THEN** the guide MUST explain ZAI MCP server configuration for containerized environments
- **AND** the guide MUST document any special environment variables required for ZAI
- **AND** the guide MUST explain how ZAI interacts with the containerized Hagicode service
- **AND** the guide MUST provide example configurations for common ZAI use cases

#### Scenario: Volume path mapping is clearly explained

- **GIVEN** the Docker Compose configuration includes volume mounts
- **WHEN** the user reads the path mapping section
- **THEN** the guide MUST clearly explain the host path `/home/newbe36524/repos/newbe36524` mapping
- **AND** the guide MUST explain that file operations should be performed on the host path
- **AND** the guide MUST provide examples of common file operations through the mapped path
- **AND** the guide MUST warn about path differences between development and production environments

#### Scenario: Environment variables are documented

- **GIVEN** the Docker Compose file defines environment variables for the Hagicode service
- **WHEN** the user views the configuration section
- **THEN** the guide MUST explain each key environment variable:
  - `ASPNETCORE_ENVIRONMENT` - Application environment (Production)
  - `ASPNETCORE_URLS` - Application URL binding
  - `TZ` - Timezone setting (Asia/Shanghai)
  - `ConnectionStrings__Default` - PostgreSQL connection string
  - `License__Activation__LicenseKey` - License activation key
  - `PUID` and `PGID` - User and group IDs for file permissions
- **AND** the guide MUST provide guidance on how to customize these values

#### Scenario: Port mappings are documented

- **GIVEN** the Docker Compose configuration maps container ports to host ports
- **WHEN** the user reads the access section
- **THEN** the guide MUST document the following port mappings:
  - PostgreSQL: `35439:5432` (host:container)
  - Hagicode Application: `45000:5000` (host:container)
- **AND** the guide MUST explain how to access services via `http://localhost:45000`
- **AND** the guide MUST warn about potential port conflicts

#### Scenario: Service architecture is explained

- **GIVEN** the Docker Compose deployment includes multiple services
- **WHEN** the user views the service architecture section
- **THEN** the guide MUST explain the PostgreSQL service configuration:
  - Bitnami PostgreSQL 16 image
  - Container name: `pcode-postgres`
  - Database initialization with keygen schema
  - Health check configuration
- **AND** the guide MUST explain the Hagicode application service configuration:
  - Image: `hagicode:latest`
  - Container name: `pcode-app`
  - Dependency on PostgreSQL health check
  - Health check configuration
- **AND** the guide MUST explain the network configuration:
  - Bridge network: `pcode-network`
  - Inter-service communication via service names

#### Scenario: Quick start provides one-command deployment

- **GIVEN** the user has Docker and Docker Compose installed
- **WHEN** the user follows the quick start section
- **THEN** the guide MUST provide a simple command to start all services: `docker-compose up -d`
- **AND** the guide MUST explain how to verify services are running: `docker-compose ps`
- **AND** the guide MUST explain how to view logs: `docker-compose logs -f`
- **AND** the guide MUST explain how to stop services: `docker-compose down`

#### Scenario: Troubleshooting addresses container-specific issues

- **GIVEN** the user encounters issues with Docker Compose deployment
- **WHEN** the user reads the troubleshooting section
- **THEN** the guide MUST address common containerization issues:
  - Port conflicts (ports 35439, 45000 already in use)
  - Container startup failures
  - Network connectivity issues between services
  - Volume permission issues
  - Health check failures
- **AND** the guide MUST provide commands to diagnose issues:
  - `docker-compose logs` - View service logs
  - `docker inspect` - Inspect container configuration
  - `docker-compose ps` - Check service status
- **AND** the guide MUST provide resolution steps for each issue

#### Scenario: Cross-platform instructions use Tabs component

- **GIVEN** the Docker Compose installation guide includes instructions for multiple operating systems
- **WHEN** a user views the prerequisites section
- **THEN** the guide MUST use `<Tabs>` and `<TabItem>` components to separate Windows, macOS, and Linux instructions
- **AND** each platform MUST have its own `<TabItem>` with `value` attribute set to "win", "mac", or "linux"
- **AND** each `<TabItem>` MUST have a `label` attribute set to "Windows", "macOS", or "Linux"

### Requirement: Installation Documentation Structure

The documentation site MUST restructure installation documentation into a dedicated `docs/installation/` directory with two separate deployment methods (Docker Compose as primary, package deployment as alternative), clear recommendation guidance, and proper sidebar organization.

#### Scenario: Installation directory exists with proper structure

- **GIVEN** the documentation restructure is complete
- **WHEN** listing the `docs/installation/` directory
- **THEN** the following files MUST exist:
  - `_category_.json` - Category metadata
  - `docker-compose.md` - Docker Compose deployment guide (recommended)
  - `package-deployment.md` - Software package deployment guide (alternative)

#### Scenario: Installation category metadata is configured

- **GIVEN** the `docs/installation/_category_.json` file exists
- **WHEN** the file is parsed by Docusaurus
- **THEN** the category displays with the label "安装指南"
- **AND** the category position is configured to appear prominently in the sidebar
- **AND** the category is configured as collapsible

#### Scenario: Sidebar includes installation category

- **GIVEN** the `sidebars.ts` has been updated
- **WHEN** the user views the documentation sidebar
- **THEN** an "安装指南" category MUST be visible
- **AND** the category MUST contain both deployment method documents
- **AND** the Docker Compose guide MUST appear first (as the recommended method)
- **AND** the package deployment guide MUST appear second

#### Scenario: Quick start category no longer contains installation guide

- **GIVEN** the installation guide has been moved to the installation category
- **WHEN** the user views the Quick Start category
- **THEN** the installation guide MUST NOT appear in Quick Start
- **AND** Quick Start MUST contain only quick-start specific content (project creation, session management)

#### Scenario: Recommendation guidance is clear

- **GIVEN** the user is choosing an installation method
- **WHEN** the user views the installation category
- **THEN** the Docker Compose guide MUST be marked as "推荐" (recommended)
- **AND** both guides MUST include a comparison section explaining:
  - Docker Compose advantages: environment isolation, one-command deployment, easy management, suitable for development and testing
  - Package deployment use cases: fine-grained control, no Docker requirement, production native deployment

#### Scenario: Internal links are updated after move

- **GIVEN** the installation guide has been moved from `docs/quick-start/installation.md`
- **WHEN** the user views other documentation pages
- **THEN** all links to the old installation path MUST be updated to point to `docs/installation/`
- **AND** no broken links to the installation guide MUST exist
- **AND** the package-deployment.md MUST have updated internal references

#### Scenario: Quick start guides reference installation category

- **GIVEN** the user is starting with Hagicode for the first time
- **WHEN** the user views quick start documentation
- **THEN** appropriate quick start guides MUST reference the installation category
- **AND** users MUST be directed to choose their preferred installation method
- **AND** the guidance MUST help users decide between Docker Compose and package deployment

### Requirement: Package Deployment Documentation Migration

The existing software package installation guide MUST be migrated from `docs/quick-start/installation.md` to `docs/installation/package-deployment.md` with updated content to reflect its position as an alternative deployment method.

#### Scenario: Package deployment guide is moved

- **GIVEN** the installation documentation restructure is in progress
- **WHEN** the file migration is complete
- **THEN** `docs/quick-start/installation.md` MUST be moved to `docs/installation/package-deployment.md`
- **AND** the original file MUST be removed from the quick-start directory

#### Scenario: Package deployment frontmatter is updated

- **GIVEN** the package deployment guide has been moved
- **WHEN** the file frontmatter is examined
- **THEN** the title MUST be "软件包部署" or similar
- **AND** the description MUST reflect that this is an alternative installation method
- **AND** the sidebar_position MUST be configured to appear after the Docker Compose guide

#### Scenario: Package deployment content includes recommendation notice

- **GIVEN** the user is viewing the package deployment guide
- **WHEN** the user reads the introduction
- **THEN** a notice MUST appear indicating Docker Compose is the recommended method
- **AND** the notice MUST explain when package deployment is appropriate
- **AND** a link to the Docker Compose guide MUST be provided

#### Scenario: Internal links in package deployment are updated

- **GIVEN** the package deployment guide has been moved
- **WHEN** the user views links within the document
- **THEN** all internal links MUST point to the correct new locations
- **AND** links to related documentation MUST be verified and updated if needed
