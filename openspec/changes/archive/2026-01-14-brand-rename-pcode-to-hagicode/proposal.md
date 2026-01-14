# Change: Brand Rename - PCode to Hagicode

## Why

The product name has been officially updated from **PCode** to **Hagicode**. This change requires a comprehensive update across the entire documentation site to reflect the new brand identity. Maintaining consistency with the new product name is critical for:
- Brand alignment across all touchpoints
- User confusion avoidance (old vs new name)
- Search engine optimization (SEO) with the new brand name
- Maintaining professional documentation standards

## What Changes

### Primary Changes

- **BREAKING** Update all product name references from "PCode" to "Hagicode" across the entire documentation site
- Update site configuration (title, tagline, metadata) in `docusaurus.config.ts`
- Update project information in `package.json`
- Update project context documentation in `openspec/project.md`
- Update all documentation content (Markdown files in `docs/` directory)
- Update blog content if applicable
- Update homepage components and text
- Update footer copyright text

### Configuration Changes

**docusaurus.config.ts updates:**
- `title`: "PCode Documentation" → "Hagicode Documentation"
- `tagline`: "Build better code with PCode" → "Build better code with Hagicode"
- `navbar.title`: "PCode Docs" → "Hagicode Docs"
- `footer.copyright`: "PCode" → "Hagicode"

**package.json updates:**
- `name`: "pcode-docs" → "hagicode-docs"
- `description`: Update all references from "pcode" to "hagicode"

**openspec/project.md updates:**
- Update all "PCode" references to "Hagicode" in project description and domain context
- Update GitHub repository references (URLs, organization name: `Hagicode-org`)
- Update external dependency descriptions

### Content Updates

| File Type | Count | Action |
|-----------|-------|--------|
| Markdown documentation | ~20+ files | Replace "PCode" with "Hagicode" |
| Homepage components | 3+ files | Update brand references |
| OpenSpec specs | 1 file | Update product name references |
| Archived changes | 50+ files | No action (historical record) |

**Note:** Files in `openspec/changes/archive/` represent historical records and should NOT be modified to preserve change history accuracy.

### GitHub Repository Updates

- **NEW organization**: `Hagicode-org` (updated from `PCode-org`)
- Update GitHub organization references from `PCode-org` to `Hagicode-org`
- Update repository URLs in configuration and documentation
- Update social media links and references

## Impact

- **Affected specs:** docusaurus-site
- **Affected code:**
  - `docusaurus.config.ts` - site title, tagline, navbar, footer
  - `package.json` - project name and description
  - `openspec/project.md` - project context and domain documentation
  - `openspec/specs/docusaurus-site/spec.md` - specification references
  - `docs/**/*.md` - all documentation content (~20+ files)
  - `src/components/home/*.tsx` - homepage component text
  - `src/components/home/*.css` - CSS class names (if any reference PCode)
  - `sidebars.ts` - sidebar configuration (if brand references exist)
  - `blog/**/*.md` - blog post content
  - `static/` - static assets with brand references (images, favicons if named with brand)

## Benefits

1. **Brand consistency**: All public-facing content reflects the new product name
2. **User clarity**: Eliminates confusion between old and new product names
3. **SEO alignment**: Search engines index the new brand name correctly
4. **Professional image**: Documentation stays synchronized with product evolution

## Risks

1. **Broken external links**: If external sites link to specific pages mentioning "PCode", content now says "Hagicode"
   - **Mitigation**: Consider redirects or transition period; ensure URL structure remains unchanged

2. **Search engine re-indexing**: Search engines need to re-index with new brand name
   - **Mitigation**: Submit updated sitemap to search engines after deployment; maintain URL structure

3. **Archive consistency**: Historical changes in archive still reference "PCode"
   - **Mitigation**: This is intentional - archives represent historical state. Add note to project.md explaining the rename

4. **User confusion during transition**: Users familiar with "PCode" may be confused by "Hagicode"
   - **Mitigation**: Consider adding a banner or note explaining the name change temporarily

5. **GitHub organization changes**: If the GitHub organization or repository name changes, existing links may break
   - **Mitigation**: Coordinate with GitHub repository renaming; set up redirects from old URLs

## Migration Path

### Forward Migration (PCode → Hagicode)

1. Create Git backup commit before any changes
2. Update configuration files (`docusaurus.config.ts`, `package.json`)
3. Update `openspec/project.md` with new brand name
4. Scan and update all Markdown files in `docs/` directory
5. Update homepage React components in `src/components/home/`
6. Update `openspec/specs/docusaurus-site/spec.md` specification
7. Run `npm run clear` to clear Docusaurus cache
8. Run `npm run build` to verify build succeeds
9. Run `npm start` to visually verify changes
10. Commit changes with descriptive message

### Post-Migration Validation

- Verify build completes without errors
- Check all pages render correctly with new brand name
- Verify no broken links or missing assets
- Test search functionality with new brand name
- Check social media cards display new title

### Rollback Migration

If issues occur:

1. Revert to the backup commit created before migration
2. Identify and fix the specific issue causing problems
3. Re-apply changes more carefully or in smaller batches

## Alternatives Considered

### Alternative 1: Keep both names temporarily

**Approach**: Use "PCode (now Hagicode)" or similar transition text

**Rationale for rejection**:
- Creates inconsistency in documentation
- Confuses users more than a clean break
- Requires future cleanup anyway
- Less professional appearance

### Alternative 2: Rename only visible text, keep code references

**Approach**: Update user-facing content but keep variable names, CSS classes, etc.

**Rationale for rejection**:
- Creates technical debt and confusion for developers
- Code should match content for maintainability
- Future developers may not understand the discrepancy

### Alternative 3: No change to documentation

**Approach**: Keep documentation as "PCode" indefinitely

**Rationale for rejection**:
- Misalignment with actual product name
- Creates brand confusion
- Unprofessional and misleading to users

## Open Questions

1. ~~**GitHub repository renaming**: Will the GitHub repository name change from `pcode-docs` to `hagicode-docs`?~~
   - **RESOLVED**: GitHub organization is now `Hagicode-org`
   - **Impact**: Affects `organizationName`, `projectName` in docusaurus.config.ts, edit URLs, and all GitHub links
   - **Action**: Update all references from `PCode-org` to `Hagicode-org`

2. ~~**GitHub organization change**: Will the GitHub organization change from `PCode-org`?~~
   - **RESOLVED**: GitHub organization has changed to `Hagicode-org`
   - **Impact**: Affects all GitHub URLs and external references
   - **Action**: Update documentation references and repository URLs

3. **URL structure**: Should documentation URLs change to reflect new brand?
   - **Impact**: SEO, existing links, bookmarks
   - **Recommendation**: Keep URL structure unchanged (`/site/`, `/docs/`) to minimize disruption

4. **Transition period**: Should we add a temporary banner announcing the name change?
   - **Impact**: User awareness, implementation effort
   - **Assumption**: Optional; consider based on user feedback

## References

- Current active changes: Check `openspec list` for conflicting changes
- Existing spec: `openspec/specs/docusaurus-site/spec.md`
- Project context: `openspec/project.md`
- Docusaurus configuration documentation: https://docusaurus.io/docs/api
