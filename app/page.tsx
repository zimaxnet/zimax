import Link from 'next/link';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Zimax Networks LC | Private AI Inference, Proven',
  description:
    'Zimax Networks is an inferencing company. Managed private AI inference on Azure with tiered routing, truth-value retrieval, and policy-enforced tenant isolation — every claim backed by a versioned artifact.',
};

const tiers = [
  {
    name: 'fast',
    role: 'High-throughput synthesis, routing, latency-sensitive chat',
    detail: 'Sub-second first token. The workhorse for interactive workloads.',
  },
  {
    name: 'standard',
    role: 'Primary reasoning, agent workflows, structured extraction',
    detail: 'The default tier for agentic and analytical work.',
  },
  {
    name: 'frontier',
    role: 'Deep reasoning and long-context synthesis',
    detail: 'The most capable models, reserved for the hardest queries.',
  },
  {
    name: 'utility',
    role: 'Embeddings and reranking (1024-dim)',
    detail: 'Powers ingestion and retrieval. Never exposed to chat traffic.',
  },
  {
    name: 'image',
    role: 'Diagram and image generation',
    detail: 'Isolated from chat fallback chains by design.',
  },
];

const evidence = [
  { stat: '70/70', label: 'integration tests passing, both regions' },
  { stat: '2', label: 'regions live today (US · Mexico)' },
  { stat: '21s', label: 'measured Postgres restore RTO, 36/36 tables' },
  { stat: '0', label: 'hardcoded model names in application code' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 py-20 lg:py-32 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-sky-400 mb-6">
              Zimax Networks LC &middot; Phoenix, Arizona
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Private AI inference for companies whose prompts are trade secrets.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Zimax is an inferencing company. We run managed, tiered AI inference on
              Microsoft Azure — with a truth-value retrieval layer, policy-enforced
              tenant isolation, and Microsoft&apos;s contractual commitment that your
              prompts are never used to train foundation models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/evidence"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-gray-950 bg-sky-400 hover:bg-sky-300 transition-colors"
              >
                See the evidence
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-600 text-base font-medium rounded-md text-white hover:bg-gray-800 transition-colors"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence strip — real, verified numbers */}
      <section className="bg-white py-10 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {evidence.map((e) => (
              <div key={e.label}>
                <div className="text-3xl font-bold text-gray-900">{e.stat}</div>
                <div className="text-sm text-gray-600 mt-1">{e.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Every number on this site is backed by a versioned artifact — a test run,
            a drill record, or a policy file.{' '}
            <Link href="/evidence" className="underline hover:text-gray-600">
              Ask us for the receipts.
            </Link>
          </p>
        </div>
      </section>

      {/* Tiered inference */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Five inference tiers. Zero model lock-in.
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Applications call capability tiers — never model names. Backing models are
              swapped by configuration, gated by a CI evaluation contract, with
              tier-degrade fallback and no silent cross-vendor rerouting.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 pr-6 text-sm font-semibold text-gray-500 uppercase tracking-wide">Tier</th>
                    <th className="py-3 pr-6 text-sm font-semibold text-gray-500 uppercase tracking-wide">Built for</th>
                    <th className="py-3 text-sm font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((t) => (
                    <tr key={t.name} className="border-b border-gray-100">
                      <td className="py-4 pr-6">
                        <code className="text-sm font-mono font-semibold text-primary bg-blue-50 px-2 py-1 rounded">
                          {t.name}
                        </code>
                      </td>
                      <td className="py-4 pr-6 text-gray-800">{t.role}</td>
                      <td className="py-4 text-gray-500 text-sm hidden md:table-cell">{t.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Truth-value differentiator */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Inference is a commodity. Knowing what to trust is not.
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Every document in a Zimax corpus carries a truth-value class —{' '}
              <strong>Authoritative</strong>, <strong>Working</strong>, or{' '}
              <strong>Observed</strong> — with supersession detection and
              time-decay-aware retrieval. Stale documents lose ranking automatically.
              Superseded ones are demoted, never silently deleted.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <Badge variant="primary">Classified at upload</Badge>
                <p className="mt-4 text-gray-700 text-sm">
                  Machine classification that can never self-assign the highest class —
                  Authoritative status requires a human, a written reason, and an
                  append-only audit record.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <Badge variant="primary">Supersession detection</Badge>
                <p className="mt-4 text-gray-700 text-sm">
                  When a newer version of a document arrives, the old one is demoted on
                  a decay half-life — and the system refuses to override human-asserted
                  authority.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <Badge variant="primary">Proven in tests</Badge>
                <p className="mt-4 text-gray-700 text-sm">
                  Our executable acceptance test: a superseded document scoring 0.95 raw
                  relevance loses to a current authoritative document at 0.70 — and
                  remains retrievable. Demotion, not deletion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data handling */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your prompts train no one.
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Zimax inference runs on Azure AI Foundry under Microsoft&apos;s documented
              commitment: customer prompts, completions, and embeddings are not used to
              train foundation models by default — and never without your explicit
              instruction. Your competitive alpha stays yours.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Tenant isolation is enforced by policy at every request — not by
              convention. A commercial caller cannot unlock a restricted document.
              Every allow and deny is logged.
            </p>
            <Link
              href="/security"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-base font-medium rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Read our security posture
            </Link>
          </div>
        </div>
      </section>

      {/* Prove-it CTA */}
      <section className="bg-gray-950 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sky-400 font-semibold mb-4">An investor told us: &ldquo;prove it.&rdquo;</p>
            <h2 className="text-3xl font-bold mb-6">So we publish the receipts.</h2>
            <p className="text-lg text-gray-300 mb-8">
              Restore drills with measured recovery times. Immutable backups verified by
              attempted deletion. Integration suites run against both live regions.
              Digest-pinned deployments where a git log answers &ldquo;what is running.&rdquo;
              We hold ourselves to the standard our truth-value system holds documents to.
            </p>
            <Link
              href="/evidence"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-gray-950 bg-sky-400 hover:bg-sky-300 transition-colors"
            >
              The evidence page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
