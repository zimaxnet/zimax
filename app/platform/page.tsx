import Link from 'next/link';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Platform | Zimax Networks LC',
  description:
    'The Zimax inference platform: tiered routing on Azure AI Foundry, truth-value retrieval, policy-enforced tenant isolation, dual US/MX regions, and a roadmap to on-premise edge inference.',
};

export default function Platform() {
  return (
    <>
      <section className="bg-gray-950 py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-sky-400 mb-4">
              The platform
            </p>
            <h1 className="text-4xl font-bold mb-4">
              Managed inference, with a conscience about what it retrieves.
            </h1>
            <p className="text-lg text-gray-300">
              One gateway, five capability tiers, a truth-value retrieval layer, and
              isolation enforced by policy on every request — running today in two
              regions on Microsoft Azure.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture narrative */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                1 · The inference gateway
              </h2>
              <p className="text-gray-600 mb-4">
                Every model call in the platform flows through a single gateway that
                exposes capability tiers — <code className="text-sm font-mono">fast</code>,{' '}
                <code className="text-sm font-mono">standard</code>,{' '}
                <code className="text-sm font-mono">frontier</code>,{' '}
                <code className="text-sm font-mono">utility</code>,{' '}
                <code className="text-sm font-mono">image</code> — never vendor model
                names. Swapping a backing model is a configuration change gated by an
                executable CI evaluation contract: required tiers must exist, fallback
                chains must be legal, embedding dimensions must match. Fallback is
                tier-degrade only (frontier to standard to fast) — never a silent hop to
                a different vendor.
              </p>
              <p className="text-gray-500 text-sm">
                Today the tiers are backed by Azure AI Foundry serverless deployments.
                Because applications only know tier names, the same platform can be
                re-pointed at on-premise serving as our edge hardware program matures —
                with zero application changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                2 · Truth-value retrieval
              </h2>
              <p className="text-gray-600 mb-4">
                Retrieval-augmented generation is only as good as what it retrieves.
                Zimax classifies every document at ingestion —{' '}
                <strong>Authoritative</strong> (human-asserted, audited),{' '}
                <strong>Working</strong> (current operational material), or{' '}
                <strong>Observed</strong> (unvetted input) — and retrieval scoring
                multiplies raw relevance by truth class and a time-decay factor.
                Supersession detection demotes outdated versions on a half-life rather
                than deleting them, and the machine can never promote a document to
                Authoritative: that takes a human, a written reason, and an append-only
                audit trail.
              </p>
              <p className="text-gray-600 mb-4">
                Search itself is hybrid: dense vector similarity fused with native BM25
                keyword scoring, plus an entity graph for relationship queries — with
                truth values inherited along graph paths, so a chain of reasoning is
                only as trustworthy as its weakest link.
              </p>
              <p className="text-gray-500 text-sm">
                This layer exists because we lived the failure it prevents: our own
                platform once served its founders&apos; superseded design documents as
                confidently as current ones. We built the fix into the core.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                3 · Isolation enforced by policy
              </h2>
              <p className="text-gray-600 mb-4">
                Every tool call crosses a policy engine that fails closed. The tenant in
                the verified token must match the tenant in the request. Vector search
                filters are injected server-side — never trusted from the client.
                Clearance is computed as the maximum of caller and document, so a
                permissive caller cannot unlock a restricted document. Every allow and
                deny is written to a decision log.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                4 · Two regions, one platform
              </h2>
              <p className="text-gray-600 mb-4">
                The platform runs live in a US region and a Mexico region — same images
                (pinned by content digest), same declarative configuration, region
                differences expressed as reviewed overlay patches. Data residency is a
                first-class construct: each region has its own identity provider, its
                own key vault, and its own backup chain.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                5 · The edge inference roadmap
              </h2>
              <p className="text-gray-600 mb-4">
                Some inference belongs close to the data. Our Tier&nbsp;0 edge program
                runs speech-to-text, reranking, and embedding workloads on compact
                on-premise hardware — keeping raw audio and document content inside the
                customer boundary while cloud tiers handle frontier reasoning. One
                complete unit is in validation today; it is a proving ground, stated as
                exactly that.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="default">Whisper-class STT</Badge>
                <Badge variant="default">Local reranking</Badge>
                <Badge variant="default">Local embeddings</Badge>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Built on ctxEco
            </h2>
            <p className="text-gray-600 mb-8">
              The platform is delivered through ctxEco, our multi-tenant context
              ecology: document ingestion across dozens of formats, the truth-value
              corpus, agentic chat, and a governed workspace — all riding the inference
              tiers above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products/ctxeco"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                Explore ctxEco
              </Link>
              <Link
                href="/evidence"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-base font-medium rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                See the evidence
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
