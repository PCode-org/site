# Tasks: Brand Rename - PCode to Hagicode

## 1. Preparation

- [x] 1.1 Create Git backup commit before any changes
- [x] 1.2 Review and confirm new brand name: "Hagicode"
- [x] 1.3 Identify any external dependencies (GitHub URLs, social media, etc.)
- [x] 1.4 Confirm GitHub organization change: `PCode-org` → `Hagicode-org`

## 2. Configuration File Updates

- [x] 2.1 Update `docusaurus.config.ts`:
  - [x] Update `title` from "PCode Documentation" to "Hagicode Documentation"
  - [x] Update `tagline` from "Build better code with PCode" to "Build better code with Hagicode"
  - [x] Update `navbar.title` from "PCode Docs" to "Hagicode Docs"
  - [x] Update `footer.copyright` from "PCode" to "Hagicode"
  - [x] Update `organizationName` from "PCode-org" to "Hagicode-org"
  - [x] Update `projectName` from "pcode-docs" to "hagicode-docs" (if applicable)
  - [x] Update `editUrl` GitHub links to use new organization
  - [x] Update GitHub repository links in navbar and footer

- [x] 2.2 Update `package.json`:
  - [x] Update `name` from "pcode-docs" to "hagicode-docs"
  - [x] Update `description` with "hagicode" references

- [x] 2.3 Update TypeScript compilation verification:
  - [x] Run `npm run typecheck` to ensure no TypeScript errors

## 3. OpenSpec Documentation Updates

- [x] 3.1 Update `openspec/project.md`:
  - [x] Update title: "PCode Documentation" → "Hagicode Documentation"
  - [x] Update all "PCode" references in Purpose section
  - [x] Update "PCode" references in Domain Context section
  - [x] Update GitHub repository URLs from `PCode-org` to `Hagicode-org`
  - [x] Update GitHub URLs: `https://github.com/PCode-org/pcode-docs` → `https://github.com/Hagicode-org/hagicode-docs`
  - [x] Update external dependencies section if applicable
  - [x] Add note about brand rename in Recent Changes section

- [x] 3.2 Update `openspec/specs/docusaurus-site/spec.md`:
  - [x] Update all "PCode" references to "Hagicode" in requirements
  - [x] Verify scenarios still accurately reflect product functionality

- [x] 3.3 Create spec delta file `openspec/changes/brand-rename-pcode-to-hagicode/specs/docusaurus-site/spec.md`

## 4. Documentation Content Updates

- [x] 4.1 Update `docs/quick-start/installation.md`:
  - [x] Replace "PCode" with "Hagicode" in title and description
  - [x] Replace "PCode" with "Hagicode" in content body
  - [x] Verify code commands remain unchanged

- [x] 4.2 Update `docs/quick-start/create-first-project.md`:
  - [x] Replace "PCode" with "Hagicode" throughout

- [x] 4.3 Update `docs/quick-start/conversation-session.md`:
  - [x] Replace "PCode" with "Hagicode" throughout

- [x] 4.4 Update `docs/quick-start/proposal-session.md`:
  - [x] Replace "PCode" with "Hagicode" throughout

- [x] 4.5 Update `docs/related-software-installation/` directory:
  - [x] Scan and update all `.md` files for "PCode" → "Hagicode"
  - [x] Update category metadata files if they contain brand references

- [x] 4.6 Update `docs/contributor-guide/mermaid-guide.md`:
  - [x] Replace "PCode" with "Hagicode" throughout

- [x] 4.7 Update blog posts:
  - [x] Scan `blog/` directory for "PCode" references
  - [x] Update blog post content (consider historical context - may want to keep some references accurate to time of writing)

## 5. Homepage Component Updates

- [x] 5.1 Update `src/components/home/HeroSection.tsx`:
  - [x] Replace "PCode" with "Hagicode" in component text
  - [x] Update title and description text

- [x] 5.2 Update `src/components/home/FeaturesShowcase.tsx`:
  - [x] Replace "PCode" with "Hagicode" in component text

- [x] 5.3 Update `src/components/home/ShowcaseSection.tsx`:
  - [x] Replace "PCode" with "Hagicode" in component text

- [x] 5.4 Update `src/components/home/QuickStartSection.tsx`:
  - [x] Replace "PCode" with "Hagicode" in component text

- [x] 5.5 Update CSS module files:
  - [x] Check `src/components/home/*.module.css` for brand-specific class names
  - [x] Update class names if they reference "PCode" or "pcode"

## 6. Sidebar and Navigation Updates

- [x] 6.1 Update `sidebars.ts`:
  - [x] Check for any brand references in sidebar configuration
  - [x] Update if necessary

## 7. Static Assets Check

- [x] 7.1 Review `static/` directory:
  - [x] Check for images or files named with "pcode" or "PCode"
  - [x] Update filenames if necessary (consider SEO impact)
  - [x] Update image references in markdown if filenames change

- [x] 7.2 Check favicon and logo:
  - [x] Verify if visual branding needs updating (logo, favicon)
  - [x] Update assets if new branding is provided

## 8. Build Validation

- [x] 8.1 Clear Docusaurus cache: `npm run clear`
- [x] 8.2 Run production build: `npm run build`
- [x] 8.3 Verify build completes without errors
- [x] 8.4 Verify no broken links in build output
- [x] 8.5 Start development server: `npm start`
- [x] 8.6 Navigate to homepage (http://localhost:3000) and verify:
  - [x] Title shows "Hagicode Documentation"
  - [x] Navbar shows "Hagicode Docs"
  - [x] Footer shows "Hagicode" copyright
  - [x] All page content uses "Hagicode"
- [x] 8.7 Navigate to documentation pages and verify:
  - [x] All content references "Hagicode" instead of "PCode"
  - [x] No broken links or missing images
- [x] 8.8 Check search functionality with new brand name

## 9. Post-Migration Tasks

- [x] 9.1 Update any external references:
  - [x] README.md if it exists
  - [x] CONTRIBUTING.md if it exists
  - [x] Any other documentation files

- [x] 9.2 Update GitHub repository metadata (if applicable):
  - [x] Repository description
  - [x] Repository topics
  - [x] About section

- [x] 9.3 Commit changes with descriptive commit message

## 10. Optional Enhancement Tasks

- [ ] 10.1 Add temporary announcement banner about name change (if needed)
- [ ] 10.2 Set up redirects from old URLs if repository name changes
- [ ] 10.3 Submit updated sitemap to search engines
- [ ] 10.4 Update social media profiles and links

## Success Criteria

- [x] Site builds successfully with `npm run build`
- [x] All pages display "Hagicode" instead of "PCode"
- [x] No broken links or missing assets
- [x] TypeScript compilation passes without errors
- [x] All navigation elements use new brand name
- [x] Footer copyright displays "Hagicode"
- [x] Homepage Hero section displays "Hagicode"
- [x] Documentation content consistently uses "Hagicode"
- [x] No references to "PCode" remain in user-facing content (except historical archives)
