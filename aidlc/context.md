# AI-DLC Context: World Scout SaaS MVP

Last updated: 2026-06-15

## Project Identity

- Project name: World Scout
- Repository root: `worldcup2026-saas`
- Product type: Static MVP SaaS prototype
- Current deployment target: AWS Amplify Hosting
- Primary users: Football fans, scouts, analysts, and demo users who need quick lookup of national-team players
- Current implementation: Vanilla HTML, CSS, and JavaScript with local static data

## AI-DLC Operating Context

This file stores the project context evolution, base requirements, decisions, risks, and next planned work. It is intended to support AI-DLC-style continuity across development sessions.

AI-DLC alignment:

- Inception: Capture what to build, why it matters, user goals, requirements, scope, and risks.
- Construction: Capture how the MVP is implemented, build/deploy setup, validation, and technical decisions.
- Operations: Capture deployment readiness, hosting assumptions, monitoring gaps, and future production concerns.
- Context preservation: Keep an append-only evolution log so future agents can understand project direction before changing code.

## Base Requirements

### Functional Requirements

- The app must let users select a national football team.
- The app must let users search players by national-team uniform number.
- The app must let users search players by player name or alias.
- Search results must return the player's current football club.
- Search results must include a short player description:
  - height
  - weight
  - age
  - position
- Numeric searches must match exact national-team shirt numbers.
- Name searches should be flexible enough to match common aliases.
- The MVP must support Brazil, France, Germany, and Argentina.
- The app must be deployable as a static frontend in AWS Amplify.

### Non-Functional Requirements

- No backend is required for the current MVP.
- No package installation or build tooling should be required for the current MVP.
- The app should work by opening `index.html` directly.
- The app should be simple to host with AWS Amplify.
- The UI should be responsive for desktop and mobile screens.
- The app should remain easy to extend with more teams and data sources.
- Data source assumptions must be documented because player clubs, ages, and squad numbers change over time.

## Current Scope

### In Scope

- Static frontend MVP.
- Local player dataset in `script.js`.
- Team selector for Brazil, France, Germany, and Argentina.
- Per-team quick-search chips.
- Team-themed visual styling and local flag assets.
- AWS Amplify static hosting configuration.

### Out of Scope for Current MVP

- Authentication.
- Paid SaaS billing.
- Backend APIs.
- Database persistence.
- Admin panel for editing player data.
- Automated scraping or API sync.
- Real-time player data validation.
- Full AI-DLC generated `aidlc-docs/` artifact set.

## Current File Map

- `index.html`: Static app shell, team selector, search input, result panels.
- `styles.css`: Responsive UI, team themes, cards, search controls.
- `script.js`: Team/player data and client-side search/render logic.
- `assets/*.svg`: Local flag assets.
- `amplify.yml`: AWS Amplify static hosting build spec.
- `README.md`: Project overview and source notes.
- `aidlc/context.md`: AI-DLC project context and evolution log.

## Current Technical Decisions

- Use vanilla HTML/CSS/JS to avoid build complexity.
- Keep the MVP static until the data model or SaaS features justify a backend.
- Store player data locally in `script.js` for fast iteration.
- Use exact numeric matching for national-team shirt numbers to avoid false positives such as `7` matching `17`.
- Use an Amplify build command that performs no build step:
  - `echo "Static MVP - no frontend build step required"`
- Use Amplify artifact `baseDirectory: .` because the project root itself contains the deployable static files.
- Leave Amplify monorepo settings blank because `worldcup2026-saas` is now the Git root.

## Deployment Context

AWS Amplify settings for the current repository:

- Monorepo root directory: leave blank / unset.
- App root path: leave blank or use `.`.
- Build command: handled by `amplify.yml`.
- Build output directory: `.`.
- Frontend framework: static site / no framework.

Current `amplify.yml` intent:

```yaml
version: 1
frontend:
  phases:
    build:
      commands:
        - echo "Static MVP - no frontend build step required"
  artifacts:
    baseDirectory: .
    files:
      - index.html
      - styles.css
      - script.js
      - README.md
      - assets/**/*
  cache:
    paths: []
```

## Data Context

Initial suggested data sources came from `info.md`:

- API-Football
- TheSportsDB
- Sportradar
- Transfermarkt
- Sofascore
- Ogol

Current MVP data is manually seeded as a product-prototype snapshot. It is not yet automatically synchronized from official APIs.

Known source categories:

- Squad number references for national-team shirt numbers.
- Club roster references for current clubs.
- Player profile references for height, weight, and age.

Data risk:

- Player clubs and squad numbers can change.
- Ages change yearly and should eventually be derived from birth dates.
- Some profile data can differ across sources.

Recommended future data model:

- Store `dateOfBirth` instead of static `age`.
- Store source metadata per player field.
- Track `lastVerifiedAt` per player and per team.
- Split data into `data/teams/*.json` before adding many more countries.

## Validation History

Validated locally with Node-based logic checks:

- Brazil `#10` returns Neymar Junior.
- France `#10` returns Kylian Mbappe.
- Germany `#10` returns Jamal Musiala.
- Argentina `#10` returns Lionel Messi.
- France `mbappe` returns Real Madrid number 10.
- Germany `wirtz` returns Liverpool number 7.
- Argentina `messi` returns Inter Miami number 10.

Browser verification note:

- The in-app browser runtime failed to start in the local sandbox during prior verification attempts.
- Static behavior was validated through JavaScript execution checks instead.

## Context Evolution Log

### 2026-06-07: MVP Created

- User requested a SaaS MVP to search football players by uniform number or name.
- Initial scope targeted the Brazilian national team.
- Created static files:
  - `index.html`
  - `styles.css`
  - `script.js`
  - `README.md`
  - `assets/brazil-flag.svg`
- Implemented search by player name, aliases, position, club, and exact shirt number.
- Fixed numeric search so `7` does not match `17`.
- Verified Vini Jr example:
  - Search `7` or `vini` returns `Real Madrid number 7`.

### 2026-06-07: Multi-Team Expansion

- User requested expansion to France, Germany, and Argentina.
- Refactored data model from one `players` array to a `teams` object.
- Added 26-player datasets for:
  - Brazil
  - France
  - Germany
  - Argentina
- Added team selector.
- Added team-specific quick searches.
- Added local SVG flag assets:
  - `brazil-flag.svg`
  - `france-flag.svg`
  - `germany-flag.svg`
  - `argentina-flag.svg`
- Added team visual themes.

### 2026-06-07: AWS Amplify Setup

- User planned to host the SaaS on AWS Amplify.
- Clarified that the current app is static and does not need a frontend build.
- Added `amplify.yml`.
- Initially adjusted for a monorepo layout.
- User clarified `worldcup2026-saas` is the actual Git root.
- Simplified Amplify configuration to a single-app static hosting setup.

### 2026-06-15: AI-DLC Context Added

- User requested an AI-DLC context file based on `awslabs/aidlc-workflows`.
- Created `aidlc/context.md` to preserve base requirements, decisions, deployment context, validation history, risks, and future plan.

## Current Risks

- Static data can become stale quickly.
- No automated tests exist yet.
- No structured data file exists outside `script.js`, making data review less convenient as more teams are added.
- No production monitoring or analytics exists yet.
- No accessibility audit has been completed.
- No backend or API boundary exists for future SaaS features.

## Recommended Next Plan

### Inception Next Steps

- Confirm target SaaS audience:
  - fan lookup
  - scout/analyst lookup
  - fantasy/sports media lookup
  - demo/portfolio project
- Decide whether MVP should prioritize official national-team roster data or current club identity.
- Define what "current" means for player data:
  - latest verified manually
  - official API sync
  - daily scheduled update

### Construction Next Steps

- Move player data out of `script.js` into structured JSON files.
- Add a lightweight test script for search behavior.
- Add `lastVerifiedAt` and `sources` fields to each player.
- Improve empty states and source confidence labels.
- Add a basic data update workflow.

### Operations Next Steps

- Deploy to AWS Amplify.
- Confirm Amplify uses `amplify.yml` successfully.
- Add a custom domain when ready.
- Add simple analytics after deployment.
- Add data freshness monitoring once external APIs are integrated.

## Open Questions

- Should the product name remain `World Scout`?
- Should the dataset represent World Cup squads, latest national-team callups, or projected squads?
- Which source should be authoritative for squad numbers?
- Should age be displayed as live-calculated from birth date?
- Should the app expose source links in the UI for each player?
- Should future SaaS work include login, saved searches, and paid tiers?
