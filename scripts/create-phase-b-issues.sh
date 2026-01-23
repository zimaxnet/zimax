#!/bin/bash

# Script to create GitHub issues from Phase B backlog
# Usage: ./scripts/create-phase-b-issues.sh

REPO="zimaxnet/zimax"

# Function to create an issue
create_issue() {
    local ticket_id=$1
    local priority=$2
    local workstream=$3
    local title=$4
    local body=$5
    
    local labels="priority:${priority},workstream:${workstream}"
    
    echo "Creating issue: ${ticket_id} - ${title}"
    
    gh issue create \
        --repo "$REPO" \
        --title "${ticket_id}: ${title}" \
        --body "$body" \
        --label "$labels" \
        --assignee "@me" 2>/dev/null || \
    gh issue create \
        --repo "$REPO" \
        --title "${ticket_id}: ${title}" \
        --body "$body" \
        --label "$labels"
}

# Workstream 1 — Deploy, Domain, and Ops
create_issue "ZB-001" "p0" "deploy" "Close custom domain validation + HTTPS lock" \
"**Goal:** Ensure zimax.net is fully live on the custom domain with stable HTTPS.

**Acceptance criteria:**
- Domain verification is complete
- HTTPS is enabled and stable
- Redirects behave as intended (http→https, apex↔www if used)

**Dependencies:** none"

create_issue "ZB-002" "p0" "deploy" "Confirm CI/CD pipeline \"green\" on main" \
"**Goal:** Ensure every push to main builds and deploys reliably.

**Acceptance criteria:**
- Build and deploy succeed from main
- PR checks gate merges
- Deployment logs are easy to find and documented in README

**Dependencies:** ZB-001"

create_issue "ZB-003" "p1" "deploy" "Add staged environment (optional)" \
"**Goal:** Create a staging site for safe content/design iteration.

**Acceptance criteria:**
- Staging URL exists and deploys from a staging branch
- Clear \"staging\" banner in staging only

**Dependencies:** ZB-002"

create_issue "ZB-004" "p1" "deploy" "Add basic uptime monitoring + alert" \
"**Goal:** Know when the corporate site is down.

**Acceptance criteria:**
- Simple uptime monitor configured
- Alert route defined (email/webhook)

**Dependencies:** ZB-001"

# Workstream 2 — SEO, Sharing, and Analytics
create_issue "ZB-010" "p0" "seo" "Open Graph + Twitter card metadata" \
"**Goal:** Links shared on LinkedIn/X render professionally.

**Acceptance criteria:**
- Global OG defaults set (title, description, image)
- Per-page overrides for Products and key pages
- Validated via at least one OG validator tool

**Dependencies:** none"

create_issue "ZB-011" "p0" "seo" "Canonical URLs + trailing slash policy" \
"**Goal:** Avoid duplicate indexing and inconsistent URLs.

**Acceptance criteria:**
- Canonical tags set for all pages
- A single URL format enforced (documented)

**Dependencies:** none"

create_issue "ZB-012" "p0" "seo" "Generate sitemap.xml + robots.txt" \
"**Goal:** Make indexing predictable and clean.

**Acceptance criteria:**
- /sitemap.xml exists and includes all public routes
- /robots.txt exists with sensible defaults

**Dependencies:** none

**Note:** Already implemented, verify completeness"

create_issue "ZB-013" "p1" "seo" "Add structured data (Organization + SoftwareApplication)" \
"**Goal:** Improve Google understanding and credibility.

**Acceptance criteria:**
- JSON-LD Organization schema on homepage
- Product pages include SoftwareApplication schema

**Dependencies:** ZB-010"

create_issue "ZB-014" "p1" "seo" "Add analytics instrumentation (privacy-aware)" \
"**Goal:** Track conversions and product routing.

**Acceptance criteria:**
- Analytics configured (GA4 or privacy-first alternative)
- Events tracked: product card clicks, contact submits, outbound clicks to secairadar/ctxeco/GitHub
- Cookie/consent UX documented (if required)

**Dependencies:** ZB-010"

# Workstream 3 — Performance, Accessibility, Quality
create_issue "ZB-020" "p0" "quality" "Lighthouse baseline pass + remediation list" \
"**Goal:** Establish a measurable quality floor.

**Acceptance criteria:**
- Lighthouse report captured (desktop + mobile)
- Top 5 issues fixed (perf/a11y/best practices)
- \"Quality baselines\" section added to README

**Dependencies:** ZB-002"

create_issue "ZB-021" "p1" "quality" "Accessibility checklist + keyboard navigation pass" \
"**Goal:** Ensure enterprise-friendly accessibility.

**Acceptance criteria:**
- Keyboard nav works for header, footer, CTAs
- Headings are properly structured (H1/H2/H3)
- Color contrast meets baseline guidelines

**Dependencies:** ZB-020"

create_issue "ZB-022" "p1" "quality" "Broken link checker in CI" \
"**Goal:** Stop regressions.

**Acceptance criteria:**
- CI job fails on broken internal links
- Optional: warns on broken external links

**Dependencies:** ZB-002"

# Workstream 4 — Press Kit + Corporate Credibility Assets
create_issue "ZB-030" "p0" "press" "Press kit: add logos (SVG/PNG) + usage guidelines" \
"**Goal:** Make media/partners self-serve.

**Acceptance criteria:**
- /press/brand-kit includes downloadable assets
- Usage notes for colors, spacing, and naming

**Dependencies:** none

**Note:** Logos already created, add usage guidelines"

create_issue "ZB-031" "p0" "press" "Press kit: add product screenshots (SecAI Radar + ctxeco)" \
"**Goal:** Make the portfolio tangible.

**Acceptance criteria:**
- 3–6 curated screenshots with captions
- Clear \"where this lives\" links to product domains

**Dependencies:** ZB-030"

create_issue "ZB-032" "p1" "press" "Add 2 diagrams: Portfolio map + Wiring map" \
"**Goal:** Visual credibility for enterprise buyers.

**Acceptance criteria:**
- One diagram shows brand/portfolio relationships
- One diagram shows endpoint/domain wiring (can reuse Mermaid render)
- Both placed in press kit and product pages

**Dependencies:** ZB-030"

create_issue "ZB-033" "p1" "press" "Create a 1-page \"Company + Products\" PDF" \
"**Goal:** Procurement/intro deck substitute.

**Acceptance criteria:**
- Downloadable PDF exists from /press or /resources
- Includes: who we are, 3 products, contact, disclaimers

**Dependencies:** ZB-030"

# Workstream 5 — Solutions & Resources Expansion
create_issue "ZB-040" "p1" "solutions" "Solutions hub polish (copy + routing)" \
"**Goal:** Make \"Solutions\" feel intentional (not placeholder).

**Acceptance criteria:**
- Clear problem→outcome framing on /solutions
- CTA routes to right product pages

**Dependencies:** none"

create_issue "ZB-041" "p1" "solutions" "Solution page: Enterprise Agent Governance" \
"**Goal:** A buyer-friendly narrative for governance.

**Acceptance criteria:**
- Sections: problem, outcomes, how it works, recommended path, CTA
- Links to SecAI Radar Trust Registry (app + overview)

**Dependencies:** ZB-040"

create_issue "ZB-042" "p1" "solutions" "Solution page: Secure MCP Adoption" \
"**Goal:** Make the trust hub + managed gateway story obvious.

**Acceptance criteria:**
- Sections: posture scoring, drift, policy gates, runtime controls
- Links to Verified MCP + ctxeco runtime APIs

**Dependencies:** ZB-040"

create_issue "ZB-043" "p1" "solutions" "Resources: Blog index + tags + post template" \
"**Goal:** Consistent publishing format.

**Acceptance criteria:**
- /resources/blog lists posts
- Posts support tags: secai-radar, verified-mcp, ctxeco, gk, oss
- Post template includes TL;DR + related links block

**Dependencies:** ZB-010"

create_issue "ZB-044" "p1" "solutions" "Publish 5 anchor posts (titles + acceptance)" \
"**Goal:** Seed credibility and search presence.

**Acceptance criteria:**
- 5 posts published with consistent template
- Each post has OG image + metadata
- Each post includes at least 2 cross-links to product surfaces

**Suggested post set:**
1. \"Verified MCP: Turning MCP from Black Box to Glass Box\"
2. \"Evidence Confidence: A Practical Scale for Trust Signals\"
3. \"Drift Matters: What Changed Since Yesterday (and Why You Should Care)\"
4. \"Managed MCP Gateways: Policy Enforcement for Tooling\"
5. \"Graph Knowledge (GK): The Missing Layer for Explainability\"

**Dependencies:** ZB-043, ZB-010"

# Workstream 6 — Cross-domain coherence
create_issue "ZB-050" "p1" "cross-domain" "Standard \"Back to Zimax\" footer link pattern in product sites" \
"**Goal:** Create a cohesive ecosystem without forcing shared theming.

**Acceptance criteria:**
- SecAI Radar footer includes \"Zimax Networks\" link
- ctxeco footer includes \"Zimax Networks\" link
- Link targets: zimax.net/products

**Dependencies:** none (coordination with product sites)"

create_issue "ZB-051" "p1" "cross-domain" "Add \"Latest Verified MCP updates\" teaser block on zimax.net" \
"**Goal:** Show freshness without hosting the full firehose.

**Acceptance criteria:**
- Home page shows \"Latest Trust Brief\" teaser + 3 updates
- Data sourced from secairadar.cloud feed.json or public API
- Teasers click through to secairadar.cloud/mcp

**Dependencies:** ZB-010 (and SecAI Radar feed availability later)"

create_issue "ZB-052" "p2" "cross-domain" "Add a lightweight \"status\" link in zimax footer" \
"**Goal:** Make reliability visible (enterprise expectation).

**Acceptance criteria:**
- Footer includes \"System Status\" linking to secairadar status or a simple status page

**Dependencies:** ZB-004 or SecAI Radar status endpoint later"

# Workstream 7 — Security & Legal strengthening
create_issue "ZB-060" "p0" "security" "Security page: clarify public vs private data boundaries" \
"**Goal:** Reduce enterprise uncertainty.

**Acceptance criteria:**
- Clear description of public trust hub vs private evidence packs
- Includes contact channel for security inquiries

**Dependencies:** none

**Note:** Already implemented, verify completeness"

create_issue "ZB-061" "p0" "security" "Vulnerability disclosure policy complete (safe harbor + scope)" \
"**Goal:** Standard security hygiene.

**Acceptance criteria:**
- Reporting instructions, scope, response expectations
- Safe harbor statement included

**Dependencies:** none

**Note:** Already implemented, verify completeness"

create_issue "ZB-062" "p0" "security" "Open source policy page (MIT + commercial separation)" \
"**Goal:** Remove ambiguity about OSS vs paid services.

**Acceptance criteria:**
- Explicit MIT statement for openContextGraph and OSS components
- \"Commercial services are separate\" language
- Attribution policy included

**Dependencies:** none

**Note:** Already implemented, verify completeness"

create_issue "ZB-063" "p1" "security" "Acceptable Use Policy (AUP) review for future APIs" \
"**Goal:** Prepare for ctxeco and registry offerings.

**Acceptance criteria:**
- AUP includes prohibited use of destructive tooling without authorization
- Mentions automated tool invocation constraints

**Dependencies:** ZB-062"

# Workstream 8 — Contact + conversion
create_issue "ZB-070" "p0" "contact" "Contact form operational (deliverability + routing)" \
"**Goal:** Capture leads reliably.

**Acceptance criteria:**
- Form submissions reach the intended inbox
- Spam protection enabled (basic)
- Confirmation message shown to user

**Dependencies:** none

**Note:** Already implemented with Resend, verify deliverability"

create_issue "ZB-071" "p1" "contact" "Add \"Interest routing\" in contact (SecAI/ctxeco/press/partnership)" \
"**Goal:** Make triage easy.

**Acceptance criteria:**
- Dropdown influences subject line or stored field
- Optional: auto-response email template

**Dependencies:** ZB-070

**Note:** Interest dropdown already exists, enhance routing logic"

create_issue "ZB-072" "p2" "contact" "Add calendaring link option (optional)" \
"**Goal:** Reduce friction for serious buyers.

**Acceptance criteria:**
- Optional schedule link appears after submit or on Contact page

**Dependencies:** ZB-070"

echo ""
echo "✅ All Phase B issues created!"
echo ""
echo "Next steps:"
echo "1. Review issues in GitHub"
echo "2. Add issues to the Phase B project"
echo "3. Prioritize and assign as needed"
