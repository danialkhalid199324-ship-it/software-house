import type { Metadata } from "next";
import Link from "next/link";
import { LegalHero, LegalBody, LegalSection, LegalList } from "@/components/legal";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing use of the TrivaSoft Technology website and the services we provide.",
};

export default function TermsPage() {
  return (
    <>
      <LegalHero
        title="Terms & Conditions"
        intro="The terms governing your use of this website and the services TrivaSoft Technology provides."
        updated="12 July 2026"
      />
      <LegalBody>
        <LegalSection title="1. Acceptance of these terms">
          <p>
            These Terms &amp; Conditions govern your use of the {site.name}{" "}
            website and any services you engage us to provide. By accessing this
            website, you agree to these terms. If you do not agree, please do not
            use the website.
          </p>
          <p>
            We may update these terms from time to time. The current version will
            always be available on this page.
          </p>
        </LegalSection>

        <LegalSection title="2. Website use">
          <p>
            You may use this website for lawful purposes only. You agree not to:
          </p>
          <LegalList
            items={[
              "Use the website in any way that breaches applicable laws or regulations.",
              "Attempt to gain unauthorised access to the website, its servers or any connected systems.",
              "Introduce malicious code or otherwise interfere with the proper operation of the website.",
              "Copy, reproduce or exploit any part of the website except as permitted by these terms or with our written permission.",
            ]}
          />
          <p>
            We may change, suspend or withdraw any part of the website at any time
            without notice.
          </p>
        </LegalSection>

        <LegalSection title="3. Intellectual property">
          <p>
            Unless otherwise stated, all content on this website — including text,
            graphics, layout, code and branding — is owned by or licensed to{" "}
            {site.name} and is protected by intellectual property laws. You may not
            reproduce, distribute or use it without our prior written consent.
          </p>
          <p>
            Ownership of intellectual property in the bespoke work we deliver for
            clients is dealt with in the individual agreement for that project. As
            a general principle, on full payment we transfer to the client the
            intellectual property in the custom work created specifically for
            them, while we retain rights in our pre-existing tools, libraries and
            know-how.
          </p>
        </LegalSection>

        <LegalSection title="4. Services">
          <p>
            The information on this website describes the services we offer and is
            provided for general information only. It does not constitute a binding
            offer. The specific scope, deliverables and terms of any engagement are
            set out in a separate written agreement between you and {site.name}.
          </p>
          <p>
            We provide our services with due care and skill. Nothing in these terms
            excludes any rights or guarantees you have under the Australian Consumer
            Law that cannot lawfully be excluded.
          </p>
        </LegalSection>

        <LegalSection title="5. Quotes & proposals">
          <p>
            Any quotes, estimates or proposals we provide are based on the
            information available at the time and are valid for the period stated
            in them, or for 30 days if no period is stated.
          </p>
          <p>
            A quote or proposal does not create a binding agreement until it is
            accepted in writing and any required deposit is paid. Changes to scope
            may affect pricing and timelines, which we will confirm with you before
            proceeding.
          </p>
        </LegalSection>

        <LegalSection title="6. Limitation of liability">
          <p>
            To the maximum extent permitted by law, {site.name} is not liable for
            any indirect, incidental, special or consequential loss, or for any
            loss of profits, revenue or data, arising from your use of this website
            or its content.
          </p>
          <p>
            Where our liability cannot be excluded but can be limited, our liability
            is limited, at our option, to re-supplying the relevant services or
            paying the cost of having them re-supplied. This clause does not limit
            any rights you have under the Australian Consumer Law.
          </p>
        </LegalSection>

        <LegalSection title="7. Third-party links">
          <p>
            This website may contain links to third-party websites for your
            convenience. We do not control those websites and are not responsible
            for their content, availability or privacy practices. A link does not
            imply our endorsement, and you access third-party sites at your own
            risk.
          </p>
        </LegalSection>

        <LegalSection title="8. Governing law">
          <p>
            These terms are governed by the laws of the State of Victoria,
            Australia. You and {site.name} submit to the non-exclusive jurisdiction
            of the courts of Victoria and the courts able to hear appeals from
            them.
          </p>
        </LegalSection>

        <LegalSection title="9. Contact information">
          <p>
            If you have any questions about these Terms &amp; Conditions, please
            contact us:
          </p>
          <p className="font-mono text-sm">
            {site.name}
            <br />
            <a
              href={`mailto:${site.email}`}
              className="text-signal hover:text-signal-deep"
            >
              {site.email}
            </a>
            <br />
            {site.location}
          </p>
          <p>
            See also our{" "}
            <Link href="/privacy" className="text-signal hover:text-signal-deep">
              Privacy Policy
            </Link>
            .
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
