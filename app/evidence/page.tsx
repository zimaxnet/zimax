import Link from 'next/link';

export const metadata = {
  title: 'Evidence | Zimax Networks LC',
  description:
    'Every operational claim Zimax makes, backed by a versioned artifact: test runs, drill records, policy files, and immutability proofs. Ask us for the receipts.',
};

type EvidenceRow = {
  claim: string;
  proof: string;
  date: string;
};

const rows: EvidenceRow[] = [
  {
    claim: 'Full integration suite passes against both live regions (US, Mexico)',
    proof: '70/70 checks, run in-cluster against the live US and Mexico deployments',
    date: 'Jul 2026',
  },
  {
    claim: 'Database restore is drilled, not assumed',
    proof: 'PostgreSQL restore RTO measured at 21 seconds, 36/36 tables; MongoDB 4/4 collections — recorded drill notes',
    date: 'Jul 16, 2026',
  },
  {
    claim: 'Off-site backups are immutable (WORM), verified adversarially',
    proof: 'Time-based retention policy locked; verified by an attempted blob deletion being refused by Azure ("blob is immutable due to a policy") with the blob still present',
    date: 'Aug 5, 2026',
  },
  {
    claim: 'Edge rate limiting works under attack conditions',
    proof: 'Smoke test drove 120 requests; 21 correctly rejected with HTTP 429 at the edge',
    date: 'Jul 16, 2026',
  },
  {
    claim: 'No application code contains a hardcoded model name',
    proof: 'All inference flows through capability-tier aliases; verified by repository-wide search — zero live call sites reference a vendor model',
    date: 'Aug 2026',
  },
  {
    claim: 'Model changes are gated by an executable evaluation contract',
    proof: 'CI blocks any inference-binding change unless the eval harness passes: required tiers present, fallback chains legal, embedding dimensions pinned',
    date: 'Jul 2026',
  },
  {
    claim: 'Truth-value retrieval behaves as designed, as an executable test',
    proof: 'A superseded document at 0.95 raw relevance ranks below a current authoritative document at 0.70 — and remains retrievable at a non-zero floor. Demotion, never silent deletion.',
    date: 'Aug 5, 2026',
  },
  {
    claim: 'Authoritative status cannot be machine-assigned',
    proof: 'The classifier is structurally incapable of producing the highest truth class; promotion requires an authenticated human, a written reason, and an append-only audit record',
    date: 'Aug 5, 2026',
  },
  {
    claim: 'Tenant isolation is enforced by policy, not convention',
    proof: 'Vector search filters are injected server-side keyed to the verified token; policy requires token tenant to equal tool tenant; effective clearance is the maximum of caller and document — a commercial caller cannot unlock a restricted document',
    date: 'Jul 2026',
  },
  {
    claim: 'Production state is answerable from a git log',
    proof: 'All first-party images deploy by content digest, not tag; the deployment mechanism is a reviewed git commit, and rollback is a revert',
    date: 'Aug 3, 2026',
  },
  {
    claim: 'A full vector-store rebuild from source is an operational routine, not a crisis',
    proof: '161-document corpus re-embedded and re-indexed from durable source storage in approximately 7 minutes with zero failures',
    date: 'Aug 9, 2026',
  },
  {
    claim: 'Prompts are not retained in our spend logs',
    proof: 'Inference gateway persists usage accounting with prompt storage explicitly disabled in configuration',
    date: 'Aug 2026',
  },
];

export default function Evidence() {
  return (
    <>
      <section className="bg-gray-950 py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-sky-400 mb-4">
              Prove it
            </p>
            <h1 className="text-4xl font-bold mb-4">The evidence page</h1>
            <p className="text-lg text-gray-300">
              Our platform classifies every document by how much it should be trusted.
              We apply the same standard to ourselves: every operational claim below is
              backed by a versioned artifact — a test run, a drill record, a policy
              file, or a refused deletion. Under NDA, we will show you any of them.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-6 text-sm font-semibold text-gray-500 uppercase tracking-wide w-1/3">Claim</th>
                  <th className="py-3 pr-6 text-sm font-semibold text-gray-500 uppercase tracking-wide">Backed by</th>
                  <th className="py-3 text-sm font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">Verified</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.claim} className="border-b border-gray-100 align-top">
                    <td className="py-4 pr-6 font-medium text-gray-900">{r.claim}</td>
                    <td className="py-4 pr-6 text-gray-600 text-sm">{r.proof}</td>
                    <td className="py-4 text-gray-500 text-sm whitespace-nowrap">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Candor section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What we have not done yet
            </h2>
            <p className="text-gray-600 mb-6">
              An evidence page that only lists wins is a marketing page. These are the
              things we are candid about with every investor and design partner:
            </p>
            <ul className="space-y-3 text-gray-700 text-sm list-disc pl-5">
              <li>
                <strong>SOC 2 is a roadmap item, not a certification we hold.</strong>{' '}
                Our compliance posture is designed to support formal audit; the audit
                itself has not been engaged.
              </li>
              <li>
                <strong>Zero Data Retention on Azure requires Microsoft approval we do
                not yet have.</strong> Today we operate under Microsoft&apos;s standard
                no-training commitment (contractual, documented) — which is strong — and
                we say exactly that, not more.
              </li>
              <li>
                <strong>We are onboarding design partners, not self-serve customers.</strong>{' '}
                Signup requires human approval by design. Usage-based billing is under
                construction; early partners get flat, simple terms.
              </li>
              <li>
                <strong>High availability is a build-out in progress.</strong> Early
                deployments run lean; our recovery posture (measured restore times,
                immutable off-site backups) is how we manage that honestly today.
              </li>
            </ul>
            <p className="text-gray-600 mt-6 text-sm">
              If any of this changes your decision, we would rather you know now.
              If the candor itself is what you were looking for — {' '}
              <Link href="/contact" className="text-primary underline hover:text-primary-dark">
                talk to us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
