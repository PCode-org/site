## MODIFIED Requirements

### Requirement: Brand Consistency

All user-facing text and configuration files in the Hagicode documentation site MUST consistently use "Hagicode" as the product brand name.

#### Scenario: GitHub Actions workflow uses correct repository

**Given** the GitHub Actions workflow file exists at `.github/workflows/compress-images.yml`
**When** the workflow condition references the repository
**THEN** the repository path MUST be `Hagicode-org/hagicode-docs`
**AND** the legacy `PCode-org/site` reference MUST NOT exist

#### Scenario: Homepage components display correct brand name

**Given** a user views the homepage
**WHEN** the Features Showcase section renders
**THEN** the quota label MUST display "Hagicode 多线程 100%"
**AND** the legacy "PCode 多线程 100%" text MUST NOT exist

#### Scenario: CSS file headers reference correct brand

**Given** a developer views the CSS source files in `src/components/home/`
**WHEN** the file header comments are read
**THEN** `home.module.css` MUST reference "Hagicode Homepage Styles"
**AND** `featuresShowcase.module.css` MUST reference "Hagicode Homepage - Features Showcase Styles"
**AND** legacy "PCode" references in comments MUST NOT exist

#### Scenario: Source code contains consistent brand naming

**Given** the entire codebase is searched for "PCode" references
**WHEN** searching in active source directories (excluding archives and history)
**THEN** NO "PCode" references MUST exist in:
  - `.github/` directory
  - `src/` directory
  - `docs/` directory
  - `docusaurus.config.ts`
  - `package.json`
**AND** historical "PCode" references MAY exist in:
  - `openspec/project.md` Recent Changes section
  - `openspec/changes/archive/` directory
  - `openspec/changes/` directory (other completed/historical proposals)
  - `i18n/en/` directory (deprecated bilingual content)
