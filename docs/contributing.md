---
title: Contributing
sidebar_position: 999
---

# Contributing to PCode Documentation

Thank you for your interest in contributing to the PCode documentation! This guide will help you get started.

## Getting Started

### Prerequisites

- Node.js >= 18.0
- Git
- A code editor (VS Code recommended)

### Setup Your Development Environment

1. **Fork and Clone**

   ```bash
   git clone https://github.com/YOUR_USERNAME/pcode-docs.git
   cd pcode-docs
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Development Server**

   ```bash
   npm start
   ```

   The site will be available at `http://localhost:3000`

## Making Changes

### Adding Documentation

1. **Choose the Right Location**
   - Installation guides → `docs/installation/`
   - Feature documentation → `docs/feature-guides/`
   - Create a new category for new topics

2. **Create Your Document**
   - Use `.md` extension
   - Add frontmatter:
   ```yaml
   ---
   title: Your Document Title
   description: A clear description
   ---
   ```

3. **Write Content**
   - Use clear headings
   - Include code examples with syntax highlighting
   - Add images to `static/img/`
   - Link to related documents

4. **Test Your Changes**
   ```bash
   npm start
   ```
   - View your document at `http://localhost:3000/docs/your-path`

### Adding Blog Posts

1. **Create a New Post**
   - File format: `blog/YYYY-MM-DD-title.md`
   - Add frontmatter:
   ```yaml
   ---
   slug: your-post-slug
   title: Your Post Title
   authors: [pcode-team]
   tags: [tag1, tag2]
   ---

   <!-- truncate -->
   ```

2. **Write Your Content**
   - Add `<!-- truncate -->` after the first paragraph
   - This creates the excerpt for blog listings

### Adding Images

1. Place images in `static/img/`
2. Reference in markdown:
   ```markdown
   ![Alt text](/img/your-image.png)
   ```

## Code Style

### Markdown Guidelines

- Use ATX-style headings (`#` `##` `###`)
- Leave a blank line before headings
- Use sentence case for headings
- Add one space between `#` and heading text

### Code Blocks

Use fenced code blocks with language specification:

````markdown
```javascript
function example() {
  return 'Hello, World!';
}
```
````

### Links

- Use absolute paths for internal links: `/docs/installation`
- Use descriptive link text: [Installation Guide](/docs/installation)

## Testing Before Submitting

1. **Build the Site**
   ```bash
   npm run build
   ```

2. **Check for Errors**
   - No console errors
   - No broken links
   - All images load correctly

3. **Test Production Build**
   ```bash
   npm run serve
   ```

## Submitting Your Changes

1. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Brief description of changes"
   ```

2. **Push to Your Fork**
   ```bash
   git push origin your-branch-name
   ```

3. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Provide a clear description of your changes

## Pull Request Guidelines

### Title Format

Use a clear, descriptive title:
- `docs: Add installation guide for Windows`
- `fix: Correct link in feature guide`
- `style: Update custom CSS for better readability`

### Description

Include:
- What changes you made
- Why you made them
- Any relevant issue numbers

### Review Process

- Maintainers will review your PR
- Address any feedback
- Once approved, your changes will be merged

## Getting Help

If you need help:

1. Check existing documentation
2. Search for similar issues
3. Ask questions in your PR
4. Open an issue for bugs or feature requests

## Recognition

Contributors are recognized in the project. Your name will appear in:
- The contributors list
- Release notes (for significant contributions)

Thank you for contributing to PCode documentation! 🎉

## Additional Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [Project GitHub Repository](https://github.com/pcode/pcode-docs)
