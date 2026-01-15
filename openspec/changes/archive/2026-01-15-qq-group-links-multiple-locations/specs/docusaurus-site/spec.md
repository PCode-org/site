# docusaurus-site Specification Delta

## ADDED Requirements

### Requirement: QQ Group Links in Navigation Elements

The documentation site MUST provide QQ group join links in multiple navigation locations to enable users to easily access technical support community.

#### Scenario: Navbar displays QQ group link

- **GIVEN** the Docusaurus site is running
- **WHEN** a user views the top navigation bar
- **THEN** a "QQ群" link SHALL be displayed in the right-aligned navigation items
- **AND** the link SHALL point to `https://qm.qq.com/q/Wk6twXHdyS`
- **AND** clicking the link SHALL open the QQ group join page in a new tab

#### Scenario: Footer displays QQ group link in Community section

- **GIVEN** a user scrolls to the bottom of any page
- **WHEN** the user views the footer's Community section
- **THEN** a "QQ技术支持群 (610394020)" or "HagiCode 技术支持 QQ 群 610394020" link SHALL be displayed
- **AND** the link SHALL point to `https://qm.qq.com/q/Wk6twXHdyS`
- **AND** the link SHALL be positioned alongside the GitHub link
- **AND** clicking the link SHALL open the QQ group join page in a new tab

---

### Requirement: Homepage QQ Group Card Component

The homepage MUST include a QQ group card component in the Hero section that provides a prominent call-to-action for joining the technical support community.

#### Scenario: QQ group card displays on homepage

- **GIVEN** a user navigates to the homepage
- **WHEN** the Hero section is rendered
- **THEN** a QQ group card SHALL be displayed after the hero buttons
- **AND** the card SHALL include:
  - A handshake or community emoji icon (🤝)
  - A title: "加入技术支持群组"
  - A description: "HagiCode 技术支持 QQ 群 610394020"
  - A CTA button: "立即加入"
- **AND** the button SHALL link to `https://qm.qq.com/q/Wk6twXHdyS`

#### Scenario: QQ group card matches site design system

- **GIVEN** the QQ group card is rendered on the homepage
- **WHEN** comparing the card to other homepage elements
- **THEN** the card SHALL use the same border-radius (24px) as feature cards
- **AND** the card SHALL display a gradient border effect on hover
- **AND** the card SHALL use site CSS variables for colors and shadows
- **AND** the card SHALL adapt properly to light and dark themes

#### Scenario: QQ group card is responsive

- **GIVEN** the QQ group card is displayed on the homepage
- **WHEN** viewed on different screen sizes
- **THEN** on desktop (>1024px) the card SHALL have a max-width of 500px and be centered
- **AND** on tablet (768px-1024px) the card SHALL scale appropriately maintaining readability
- **AND** on mobile (<768px) the card SHALL span full width with appropriate padding

---

### Requirement: External Links Open in New Tab

All QQ group links throughout the site MUST open in a new browser tab to preserve the user's context on the documentation site.

#### Scenario: Navbar QQ link opens in new tab

- **GIVEN** a user is viewing any page of the documentation site
- **WHEN** the user clicks the "QQ群" link in the navbar
- **THEN** the QQ group join page SHALL open in a new browser tab
- **AND** the original documentation page SHALL remain open and accessible

#### Scenario: Homepage QQ card button opens in new tab

- **GIVEN** a user is viewing the homepage
- **WHEN** the user clicks the "立即加入" button in the QQ group card
- **THEN** the QQ group join page SHALL open in a new browser tab
- **AND** the homepage SHALL remain open and accessible

#### Scenario: Footer QQ link opens in new tab

- **GIVEN** a user is viewing any page of the documentation site
- **WHEN** the user clicks the "QQ技术支持群" link in the footer
- **THEN** the QQ group join page SHALL open in a new browser tab
- **AND** the original documentation page SHALL remain open and accessible

---

### Requirement: QQ Group Links Accessibility

QQ group links MUST meet web accessibility standards to ensure users with disabilities can effectively access the community support resources.

#### Scenario: QQ group links are keyboard navigable

- **GIVEN** a user navigates the site using only a keyboard
- **WHEN** the user presses Tab to move focus
- **THEN** all QQ group links (navbar, homepage card, footer) SHALL receive focus in a logical order
- **AND** focus indicators SHALL be clearly visible on all QQ group links
- **AND** all QQ group links SHALL be activatable via the Enter key

#### Scenario: QQ group links have descriptive text

- **GIVEN** a screen reader user encounters a QQ group link
- **WHEN** the screen reader announces the link
- **THEN** the link text SHALL clearly indicate its purpose ("QQ群", "加入技术支持群组", "QQ技术支持群")
- **AND** the link text SHALL include context about the QQ group number (610394020)
- **AND** the purpose of the link SHALL be unambiguous to screen reader users

#### Scenario: QQ group card has sufficient color contrast

- **GIVEN** the QQ group card is displayed on the homepage
- **WHEN** color contrast is evaluated
- **THEN** all text in the card SHALL meet WCAG AA contrast requirements (4.5:1 for normal text)
- **AND** the card SHALL be readable in both light and dark themes
- **AND** color SHALL NOT be the only means of conveying the card's interactive nature
