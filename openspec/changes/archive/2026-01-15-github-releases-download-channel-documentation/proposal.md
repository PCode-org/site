# Change: Add GitHub Releases Download Channel to Installation Guide

## Why

The current installation guide only mentions software package deployment without documenting the GitHub Releases download channel. This limits user options for obtaining Hagicode, especially for users who:
- Are unfamiliar with package managers
- Need specific versions
- Cannot access certain package management sources

## What Changes

- Add a new "从 GitHub Releases 下载" (Download from GitHub Releases) section to the package deployment guide
- Document the GitHub Releases URL: `https://github.com/Hagicode-org/releases/releases`
- Provide clear instructions on how to select versions and download platform-specific packages
- Maintain consistency with existing documentation style and structure

## Impact

### Affected Specs
- `docusaurus-site` - Package Deployment Documentation requirement

### Affected Code
- `docs/installation/package-deployment.md` - Add GitHub Releases download section

### User Benefits
- Expanded software acquisition channels
- Better experience for users uncomfortable with command-line tools
- Support for version rollback scenarios
