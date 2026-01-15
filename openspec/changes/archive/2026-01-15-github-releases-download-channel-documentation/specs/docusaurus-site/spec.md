## MODIFIED Requirements

### Requirement: Installation Documentation Structure

The documentation site MUST restructure installation documentation into a dedicated `docs/installation/` directory with two separate deployment methods (Docker Compose as primary, package deployment as alternative), clear recommendation guidance, and proper sidebar organization. The package deployment guide MUST include instructions for obtaining the software package through GitHub Releases.

#### Scenario: Package deployment guide includes GitHub Releases download section

- **GIVEN** the user is viewing the package deployment guide at `docs/installation/package-deployment.md`
- **WHEN** the user reads the software package acquisition section
- **THEN** the guide MUST include a "从 GitHub Releases 下载" section
- **AND** the section MUST provide a direct link to `https://github.com/Hagicode-org/releases/releases`
- **AND** the section MUST explain that precompiled software packages are available for download
- **AND** the section MUST document how to select the appropriate version
- **AND** the section MUST explain how to download platform-specific packages (Windows .zip, macOS/Linux .tar.gz)

#### Scenario: GitHub Releases section provides clear user instructions

- **GIVEN** the user has navigated to the GitHub Releases download section
- **WHEN** the user reads the instructions
- **THEN** the section MUST include step-by-step guidance:
  1. Navigate to the GitHub Releases page
  2. Select the desired version (latest or specific version)
  3. Choose the appropriate package for the platform
  4. Download the package to the local machine
- **AND** the instructions MUST be written in clear Chinese
- **AND** platform-specific file formats MUST be clearly indicated

#### Scenario: GitHub Releases link is accessible and accurate

- **GIVEN** the package deployment guide includes a GitHub Releases link
- **WHEN** a user clicks on the link
- **THEN** the link MUST navigate to the correct GitHub repository releases page
- **AND** no 404 error MUST occur
- **AND** the releases page MUST display available Hagicode releases

#### Scenario: Documentation maintains consistency with existing style

- **GIVEN** the GitHub Releases section has been added to the package deployment guide
- **WHEN** comparing the new section to existing content
- **THEN** the section MUST use the same markdown formatting conventions
- **AND** the section MUST follow the same Chinese terminology style
- **AND** the section MUST integrate seamlessly with the "部署软件包" section
- **AND** proper use of Docusaurus components (if applicable) MUST be maintained

#### Scenario: Internal links remain functional after changes

- **GIVEN** the package deployment guide has been updated with the new section
- **WHEN** the user navigates to other documentation pages
- **THEN** all links to the package deployment guide MUST continue to work
- **AND** no broken links MUST exist in the installation documentation
