# Internationalization (i18n)

This directory contains internationalization configuration and translations for multi-language support.

## Current Locales

- **en** (English) - Default locale
- **zh-CN** (简体中文) - Simplified Chinese

## Structure

When you add translations, create subdirectories for each locale:

```
i18n/
├── en/
│   └── docusaurus-plugin-content-docs/
│       └── current/
│           └── (translated markdown files)
└── zh-CN/
    └── docusaurus-plugin-content-docs/
        └── current/
            └── (translated markdown files)
```

## Adding a New Language

1. Add the locale to `docusaurus.config.ts` in the `i18n.locales` array
2. Create the corresponding directory structure
3. Run `npm run write-translations -- --locale <locale>` to generate translation files
4. Translate the content

## Translation Workflow

```bash
# Extract content to be translated
npm run write-translations -- --locale zh-CN

# Start the site with a specific locale
npm start -- --locale zh-CN

# Build the site with all locales
npm run build
```

## Resources

- [Docusaurus i18n Documentation](https://docusaurus.io/docs/i18n/introduction)
- [Crowdin](https://crowdin.com/) - Translation management platform

## Notes

- Default locale (en) files are stored in the regular `docs/` directory
- Only translated files go in this `i18n/` directory
- untranslated content will fall back to the default locale
