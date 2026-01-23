# Zimax.net — Phase B Backlog (v1.0)
**Date:** 2026-01-23  
**Scope:** Phase B enhancements for zimax.net after Phase A deployment (corporate trust anchor).  
**Legend:** P0 = must-do next • P1 = important • P2 = nice-to-have (Phase C+)

> Tip: If you use GitHub Issues, you can copy each ticket into an issue. A CSV import file is also provided.

---

## Workstream 1 — Deploy, Domain, and Ops

### ZB-001 (P0) Close custom domain validation + HTTPS lock
**Goal:** Ensure zimax.net is fully live on the custom domain with stable HTTPS.  
**Acceptance criteria**
- Domain verification is complete
- HTTPS is enabled and stable
- Redirects behave as intended (http→https, apex↔www if used)  
**Dependencies:** none

### ZB-002 (P0) Confirm CI/CD pipeline “green” on main
**Goal:** Ensure every push to main builds and deploys reliably.  
**Acceptance criteria**
- Build and deploy succeed from main
- PR checks gate merges
- Deployment logs are easy to find and documented in README  
**Dependencies:** ZB-001

### ZB-003 (P1) Add staged environment (optional)
**Goal:** Create a staging site for safe content/design iteration.  
**Acceptance criteria**
- Staging URL exists and deploys from a staging branch
- Clear “staging” banner in staging only  
**Dependencies:** ZB-002

### ZB-004 (P1) Add basic uptime monitoring + alert
**Goal:** Know when the corporate site is down.  
**Acceptance criteria**
- Simple uptime monitor configured
- Alert route defined (email/webhook)  
**Dependencies:** ZB-001

---

## Workstream 2 — SEO, Sharing, and Analytics

### ZB-010 (P0) Open Graph + Twitter card metadata
**Goal:** Links shared on LinkedIn/X render professionally.  
**Acceptance criteria**
- Global OG defaults set (title, description, image)
- Per-page overrides for Products and key pages
- Validated via at least one OG validator tool  
**Dependencies:** none

### ZB-011 (P0) Canonical URLs + trailing slash policy
**Goal:** Avoid duplicate indexing and inconsistent URLs.  
**Acceptance criteria**
- Canonical tags set for all pages
- A single URL format enforced (documented)  
**Dependencies:** none

### ZB-012 (P0) Generate sitemap.xml + robots.txt
**Goal:** Make indexing predictable and clean.  
**Acceptance criteria**
- /sitemap.xml exists and includes all public routes
- /robots.txt exists with sensible defaults  
**Dependencies:** none

### ZB-013 (P1) Add structured data (Organization + SoftwareApplication)
**Goal:** Improve Google understanding and credibility.  
**Acceptance criteria**
- JSON-LD Organization schema on homepage
- Product pages include SoftwareApplication schema  
**Dependencies:** ZB-010

### ZB-014 (P1) Add analytics instrumentation (privacy-aware)
**Goal:** Track conversions and product routing.  
**Acceptance criteria**
- Analytics configured (GA4 or privacy-first alternative)
- Events tracked: product card clicks, contact submits, outbound clicks to secairadar/ctxeco/GitHub
- Cookie/consent UX documented (if required)  
**Dependencies:** ZB-010

---

## Workstream 3 — Performance, Accessibility, Quality

### ZB-020 (P0) Lighthouse baseline pass + remediation list
**Goal:** Establish a measurable quality floor.  
**Acceptance criteria**
- Lighthouse report captured (desktop + mobile)
- Top 5 issues fixed (perf/a11y/best practices)
- “Quality baselines” section added to README  
**Dependencies:** ZB-002

### ZB-021 (P1) Accessibility checklist + keyboard navigation pass
**Goal:** Ensure enterprise-friendly accessibility.  
**Acceptance criteria**
- Keyboard nav works for header, footer, CTAs
- Headings are properly structured (H1/H2/H3)
- Color contrast meets baseline guidelines  
**Dependencies:** ZB-020

### ZB-022 (P1) Broken link checker in CI
**Goal:** Stop regressions.  
**Acceptance criteria**
- CI job fails on broken internal links
- Optional: warns on broken external links  
**Dependencies:** ZB-002

---

## Workstream 4 — Press Kit + Corporate Credibility Assets

### ZB-030 (P0) Press kit: add logos (SVG/PNG) + usage guidelines
**Goal:** Make media/partners self-serve.  
**Acceptance criteria**
- /press/brand-kit includes downloadable assets
- Usage notes for colors, spacing, and naming  
**Dependencies:** none

### ZB-031 (P0) Press kit: add product screenshots (SecAI Radar + ctxeco)
**Goal:** Make the portfolio tangible.  
**Acceptance criteria**
- 3–6 curated screenshots with captions
- Clear “where this lives” links to product domains  
**Dependencies:** ZB-030

### ZB-032 (P1) Add 2 diagrams: Portfolio map + Wiring map
**Goal:** Visual credibility for enterprise buyers.  
**Acceptance criteria**
- One diagram shows brand/portfolio relationships
- One diagram shows endpoint/domain wiring (can reuse Mermaid render)
- Both placed in press kit and product pages  
**Dependencies:** ZB-030

### ZB-033 (P1) Create a 1-page “Company + Products” PDF
**Goal:** Procurement/intro deck substitute.  
**Acceptance criteria**
- Downloadable PDF exists from /press or /resources
- Includes: who we are, 3 products, contact, disclaimers  
**Dependencies:** ZB-030

---

## Workstream 5 — Solutions & Resources Expansion (Phase B content)

### ZB-040 (P1) Solutions hub polish (copy + routing)
**Goal:** Make “Solutions” feel intentional (not placeholder).  
**Acceptance criteria**
- Clear problem→outcome framing on /solutions
- CTA routes to right product pages  
**Dependencies:** none

### ZB-041 (P1) Solution page: Enterprise Agent Governance
**Goal:** A buyer-friendly narrative for governance.  
**Acceptance criteria**
- Sections: problem, outcomes, how it works, recommended path, CTA
- Links to SecAI Radar Trust Registry (app + overview)  
**Dependencies:** ZB-040

### ZB-042 (P1) Solution page: Secure MCP Adoption
**Goal:** Make the trust hub + managed gateway story obvious.  
**Acceptance criteria**
- Sections: posture scoring, drift, policy gates, runtime controls
- Links to Verified MCP + ctxeco runtime APIs  
**Dependencies:** ZB-040

### ZB-043 (P1) Resources: Blog index + tags + post template
**Goal:** Consistent publishing format.  
**Acceptance criteria**
- /resources/blog lists posts
- Posts support tags: secai-radar, verified-mcp, ctxeco, gk, oss
- Post template includes TL;DR + related links block  
**Dependencies:** ZB-010

### ZB-044 (P1) Publish 5 anchor posts (titles + acceptance)
**Goal:** Seed credibility and search presence.  
**Acceptance criteria**
- 5 posts published with consistent template
- Each post has OG image + metadata
- Each post includes at least 2 cross-links to product surfaces  
**Suggested post set**
1) “Verified MCP: Turning MCP from Black Box to Glass Box”
2) “Evidence Confidence: A Practical Scale for Trust Signals”
3) “Drift Matters: What Changed Since Yesterday (and Why You Should Care)”
4) “Managed MCP Gateways: Policy Enforcement for Tooling”
5) “Graph Knowledge (GK): The Missing Layer for Explainability”  
**Dependencies:** ZB-043, ZB-010

---

## Workstream 6 — Cross-domain coherence (portfolio “loop closure”)

### ZB-050 (P1) Standard “Back to Zimax” footer link pattern in product sites
**Goal:** Create a cohesive ecosystem without forcing shared theming.  
**Acceptance criteria**
- SecAI Radar footer includes “Zimax Networks” link
- ctxeco footer includes “Zimax Networks” link
- Link targets: zimax.net/products  
**Dependencies:** none (coordination with product sites)

### ZB-051 (P1) Add “Latest Verified MCP updates” teaser block on zimax.net
**Goal:** Show freshness without hosting the full firehose.  
**Acceptance criteria**
- Home page shows “Latest Trust Brief” teaser + 3 updates
- Data sourced from secairadar.cloud feed.json or public API
- Teasers click through to secairadar.cloud/mcp  
**Dependencies:** ZB-010 (and SecAI Radar feed availability later)

### ZB-052 (P2) Add a lightweight “status” link in zimax footer
**Goal:** Make reliability visible (enterprise expectation).  
**Acceptance criteria**
- Footer includes “System Status” linking to secairadar status or a simple status page  
**Dependencies:** ZB-004 or SecAI Radar status endpoint later

---

## Workstream 7 — Security & Legal strengthening

### ZB-060 (P0) Security page: clarify public vs private data boundaries
**Goal:** Reduce enterprise uncertainty.  
**Acceptance criteria**
- Clear description of public trust hub vs private evidence packs
- Includes contact channel for security inquiries  
**Dependencies:** none

### ZB-061 (P0) Vulnerability disclosure policy complete (safe harbor + scope)
**Goal:** Standard security hygiene.  
**Acceptance criteria**
- Reporting instructions, scope, response expectations
- Safe harbor statement included  
**Dependencies:** none

### ZB-062 (P0) Open source policy page (MIT + commercial separation)
**Goal:** Remove ambiguity about OSS vs paid services.  
**Acceptance criteria**
- Explicit MIT statement for openContextGraph and OSS components
- “Commercial services are separate” language
- Attribution policy included  
**Dependencies:** none

### ZB-063 (P1) Acceptable Use Policy (AUP) review for future APIs
**Goal:** Prepare for ctxeco and registry offerings.  
**Acceptance criteria**
- AUP includes prohibited use of destructive tooling without authorization
- Mentions automated tool invocation constraints  
**Dependencies:** ZB-062

---

## Workstream 8 — Contact + conversion

### ZB-070 (P0) Contact form operational (deliverability + routing)
**Goal:** Capture leads reliably.  
**Acceptance criteria**
- Form submissions reach the intended inbox
- Spam protection enabled (basic)
- Confirmation message shown to user  
**Dependencies:** none

### ZB-071 (P1) Add “Interest routing” in contact (SecAI/ctxeco/press/partnership)
**Goal:** Make triage easy.  
**Acceptance criteria**
- Dropdown influences subject line or stored field
- Optional: auto-response email template  
**Dependencies:** ZB-070

### ZB-072 (P2) Add calendaring link option (optional)
**Goal:** Reduce friction for serious buyers.  
**Acceptance criteria**
- Optional schedule link appears after submit or on Contact page  
**Dependencies:** ZB-070

---

## Phase B “Definition of Done”
Phase B is complete when:
- **All P0 tickets are ✅**
- At least **ZB-031, ZB-032, ZB-041, ZB-042, ZB-044** are ✅
- Site has professional sharing previews, sitemap, baseline Lighthouse pass, and a press kit that includes screenshots + diagrams.

---

## Appendix: Suggested folder/asset conventions
- `/public/brand/` → logos, colors, wordmarks
- `/public/press/` → screenshots and diagrams
- `/content/blog/` → MDX posts with frontmatter: title, date, tags, ogImage, summary
