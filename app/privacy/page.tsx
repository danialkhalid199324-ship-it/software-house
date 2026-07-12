import type { Metadata } from "next";
import Link from "next/link";
import { LegalHero, LegalBody, LegalSection, LegalList } from "@/components/legal";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How TrivaSoft Technology collects, uses, stores and protects your personal information, in line with the Australian Privacy Act 1988 and the Australian Privacy Principles.",
};

export default function PrivacyPage() {
  return (
    <>
      <LegalHero
        title="Privacy Policy"
        intro="How TrivaSoft Technology collects, uses and protects your personal information."
        updated="12 July 2026"
      />
      <LegalBody>
        <LegalSection title="1. Introduction">
          <p>
            {site.name} (&quot;TrivaSoft&quot;, &quot;we&quot;, &quot;us&quot; or
            &quot;our&quot;) is committed to protecting your privacy. This policy
            explains how we handle personal information in accordance with the{" "}
            <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles
            (APPs).
          </p>
          <p>
            It applies to our website and to the services we provide. By using our
            website or contacting us, you consent to the collection and use of
            your information as described below.
          </p>
        </LegalSection>

        <LegalSection title="2. Information we collect">
          <p>We may collect the following types of information:</p>
          <LegalList
            items={[
              "Contact details you provide — such as your name, email address, phone number and company name.",
              "Enquiry details — the service you are interested in and the message you send us through our contact form or by email.",
              "Technical information — such as your IP address, browser type, device information and the pages you visit, collected automatically when you use our website.",
              "Any other information you choose to provide in the course of communicating with us or engaging our services.",
            ]}
          />
          <p>
            We only collect personal information that is reasonably necessary for
            our business functions and activities.
          </p>
        </LegalSection>

        <LegalSection title="3. How we use your information">
          <p>We use the information we collect to:</p>
          <LegalList
            items={[
              "Respond to your enquiries and provide the information or quotes you request.",
              "Deliver, manage and improve our services and our website.",
              "Communicate with you about your project or our services.",
              "Maintain our business records and meet our legal and regulatory obligations.",
            ]}
          />
          <p>
            We do not sell your personal information, and we do not use it for
            unrelated purposes without your consent.
          </p>
        </LegalSection>

        <LegalSection title="4. Cookies">
          <p>
            Our website may use cookies and similar technologies. Cookies are
            small files stored on your device that help the site function and
            allow us to understand how it is used.
          </p>
          <p>
            Essential cookies are needed for the website to work. Analytics
            cookies help us measure and improve performance. You can control or
            disable cookies through your browser settings, though some parts of
            the site may not function correctly if you do.
          </p>
        </LegalSection>

        <LegalSection title="5. Analytics">
          <p>
            We may use analytics tools to understand how visitors use our website
            — for example, which pages are visited and how people arrive at the
            site. This information is generally aggregated and used to improve the
            website and our services.
          </p>
          <p>
            Where these tools are provided by third parties, they process data in
            accordance with their own privacy policies. Where available, we enable
            privacy-protective settings such as IP anonymisation.
          </p>
        </LegalSection>

        <LegalSection title="6. Contact forms">
          <p>
            When you submit our contact form, the details you provide are sent to
            us by email so we can respond to your enquiry. We use this information
            only to reply to you and to discuss your potential project.
          </p>
          <p>
            We retain enquiry correspondence for as long as needed to assist you
            and to keep reasonable business records, after which it is securely
            deleted or de-identified.
          </p>
        </LegalSection>

        <LegalSection title="7. Data security">
          <p>
            We take reasonable technical and organisational measures to protect
            personal information from misuse, interference, loss, and unauthorised
            access, modification or disclosure. These include secure hosting,
            access controls and encryption in transit where appropriate.
          </p>
          <p>
            No method of transmission or storage is completely secure. While we
            work to protect your information, we cannot guarantee absolute
            security.
          </p>
        </LegalSection>

        <LegalSection title="8. Third-party services">
          <p>
            We rely on trusted third-party providers to operate our website and
            business — for example, website hosting, email delivery, and analytics
            services. These providers only access personal information to the
            extent needed to perform their services for us.
          </p>
          <p>
            Some of these providers may store or process data outside Australia.
            Where that occurs, we take reasonable steps to ensure your information
            is handled consistently with the Australian Privacy Principles.
          </p>
        </LegalSection>

        <LegalSection title="9. Your rights">
          <p>Under the Australian Privacy Principles, you have the right to:</p>
          <LegalList
            items={[
              "Request access to the personal information we hold about you.",
              "Request correction of information that is inaccurate, out of date or incomplete.",
              "Ask questions about how we handle your personal information.",
              "Make a complaint if you believe we have breached your privacy.",
            ]}
          />
          <p>
            To exercise any of these rights, contact us using the details below.
            If you are not satisfied with our response, you may contact the Office
            of the Australian Information Commissioner (OAIC) at oaic.gov.au.
          </p>
        </LegalSection>

        <LegalSection title="10. Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. The latest
            version will always be available on this page, with the &quot;last
            updated&quot; date shown above.
          </p>
        </LegalSection>

        <LegalSection title="11. Contact us">
          <p>
            If you have any questions about this policy or how we handle your
            personal information, please contact us:
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
            <Link href="/terms" className="text-signal hover:text-signal-deep">
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
