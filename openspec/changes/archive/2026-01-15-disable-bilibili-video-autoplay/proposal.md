# Change: Disable Bilibili Video Autoplay

## Why

Currently, the Bilibili video player on the homepage automatically plays when the page loads, which can:
- Produce unexpected audio output that startles users
- Consume network bandwidth without user consent
- Distract users from reading the documentation content
- Create an unpredictable and intrusive browsing experience

## What Changes

- Modify the Bilibili video player iframe URL to include `autoplay=0` parameter
- Update the "Bilibili Video Player Component" requirement to specify autoplay behavior
- Ensure all new Bilibili video embeds default to autoplay disabled

## Impact

- Affected specs: `docusaurus-site`
- Affected code:
  - `src/theme/BilibiliVideo/index.tsx` (line 40: iframeSrc URL)

## Status

**ExecutionCompleted** - All tasks have been implemented successfully.
