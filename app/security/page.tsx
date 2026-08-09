import Link from 'next/link';

export const metadata = {
  title: 'Security & Trust | Zimax Networks LC',
  description:
    'How Zimax handles inference data: Microsoft no-training commitment, policy-enforced tenant isolation, TLS 1.3, immutable backups, and an honest account of what is certified versus designed.',
};

export default function Security() {
  return (
    <>
      <section className="bg-gray-950 py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security posture, stated precisely.
            </h1>
            <p className="text-lg text-gray-300">
              We say what is enforced, what is contractual, what is designed, and what
              is roadmap — and we never blur the four.
            </p>
          </div>
        </div>
      </section>

      {/* Data handling */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Your prompts and your alpha
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong className="text-gray-900">Contractual:</strong> Zimax inference
                runs on Azure AI Foundry (&ldquo;Models sold by Azure&rdquo;). Under
                Microsoft&apos;s documented data-privacy commitments, customer prompts,
                completions, and embeddings are not available to model providers and are
                not used to train foundation models by default — and never without the
                customer&apos;s explicit instruction. The models are stateless: prompts
                and completions are not stored in the model.
              </p>
              <p>
                <strong className="text-gray-900">Enforced:</strong> our inference
                gateway&apos;s usage accounting explicitly disables prompt storage in
                spend logs. What we meter is tokens, not content.
              </p>
              <p>
                <strong className="text-gray-900">Stated honestly:</strong> Azure&apos;s
                default abuse-monitoring may retain flagged content for up to 30 days
                for human review. Microsoft&apos;s Zero Data Retention configuration
                (&ldquo;modified abuse monitoring&rdquo;) requires an approved,
                account-managed relationship — we are pursuing it and will not claim it
                until granted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enforcement */}
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Isolation is enforced, not promised
            </h2>
            <ul className="space-y-4 text-gray-600 list-disc pl-5">
              <li>
                Every tool call crosses an Open Policy Agent check that{' '}
                <strong className="text-gray-900">fails closed</strong> — if the policy
                engine is unreachable, the request is denied.
              </li>
              <li>
                The tenant identity in the verified token must equal the tenant in the
                request; vector-store filters are injected server-side and are keyed to
                the token, never to client input.
              </li>
              <li>
                Document clearance participates in every decision: effective clearance
                is the <em>maximum</em> of caller and document, so a permissive caller
                cannot unlock a restricted document.
              </li>
              <li>
                Every allow and deny — including which rule fired — is written to a
                decision log.
              </li>
              <li>
                Edge TLS is 1.3-only with a restricted cipher suite; per-IP rate
                limiting is enforced at the edge and verified by smoke test.
              </li>
              <li>
                Off-site backups are write-once (WORM): a locked, time-based retention
                policy that we verified by attempting a deletion and having Azure refuse
                it.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications honesty */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Certified vs. designed — the honest ledger
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong className="text-gray-900">We do not hold</strong> SOC&nbsp;2,
                ISO&nbsp;27001, HIPAA, or FedRAMP certifications today, and we will
                never imply otherwise. Formal audit is on our roadmap and our
                architecture was built to make it boring.
              </p>
              <p>
                <strong className="text-gray-900">Designed to support</strong> — our
                clearance ladder (commercial / unclassified / export-restricted tiers),
                per-document classification, and cloud-egress policy gates were designed
                against ITAR/EAR and CMMC/NIST control families from day one. Restricted
                tiers are architecturally present and deliberately not yet in service;
                they activate only when the in-boundary inference hardware and controls
                that back them honestly exist.
              </p>
              <p>
                <strong className="text-gray-900">Regional care:</strong> our Mexico
                region is operated with data residency as a first-class constraint, and
                we treat Mexican data-protection review (LFPDPPP) as a gate on customer
                onboarding there — not a checkbox after the fact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure + contact */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsible disclosure</h2>
            <p className="text-gray-600 mb-6">
              Found something? We want to know, and we will treat you well.{' '}
              <Link href="/security/disclosure" className="text-primary hover:underline font-medium">
                Disclosure policy
              </Link>{' '}
              &middot;{' '}
              <a href="mailto:security@zimax.net" className="text-primary hover:underline">
                security@zimax.net
              </a>
            </p>
            <p className="text-sm text-gray-500">
              Vendor security questionnaire? Send it over — we answer them candidly,
              including the questions where the honest answer is &ldquo;not yet.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
