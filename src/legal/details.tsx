import type { ReactNode } from 'react';

/**
 * The company behind Tendao, from its certificate of incorporation and the
 * Companies Office entity summary (generated 5 May 2025). Only the company's
 * own details: the directors' names and identity numbers on those documents
 * are not for a public page.
 */
export const company = {
  name: 'Snaprise Investments (Private) Limited',
  number: '41932A0252025',
  registeredIn:
    'Zimbabwe, under the Companies and Other Business Entities Act [Chapter 24:31]',
  incorporated: '4 May 2025',
  address: 'Calder Gardens, Unit 29, 87 Tongogara Avenue, Harare, Zimbabwe',
};

/**
 * The details the drafts left open, filled in on 17 October 2026 from the
 * Cyber and Data Protection Act [Chapter 12:07] and its regulations (SI 155
 * of 2024), ZIMRA's record-keeping rules and how Tendao is actually run, so
 * the pages can be published. They are to be reviewed with Zimbabwean legal
 * advisers, who may change them. A value set back to null shows on the page
 * as still to be confirmed.
 *
 * The email addresses are on the tendao.co.zw domain and have to exist as
 * real mailboxes or aliases before anybody relies on them.
 */
const pending = {
  EFFECTIVE_DATE: '17 October 2026',
  POLICY_VERSION: '1.0',
  GENERAL_EMAIL: 'hello@tendao.co.zw',
  LEGAL_EMAIL: 'legal@tendao.co.zw',
  BILLING_EMAIL: 'billing@tendao.co.zw',
  PRIVACY_EMAIL: 'privacy@tendao.co.zw',
  SECURITY_EMAIL: 'security@tendao.co.zw',
  PRIVACY_CONTACT_NAME_OR_ROLE: 'our Data Protection Officer',
  DPO_CONTACT_DETAILS: 'privacy@tendao.co.zw, or by post to the address above',
  CANCELLATION_NOTICE:
    '30 days’ written notice before the end of the current subscription period',
  BREACH_REMEDY_PERIOD: '30 days',
  EXPORT_WINDOW_DAYS: '90',
  ACTIVE_DELETION_DAYS: '30',
  BACKUP_EXPIRY_DAYS: '35',
  LIABILITY_CAP_TEXT:
    'the total fees the school paid to Tendao under the agreement in the 12 months before the event giving rise to the claim',
  MATERIAL_CHANGE_NOTICE_DAYS: '30',
  // Section 10 of the Act: consent, which may be implied from an adult with
  // full legal capacity (s10(1)–(2)), or without consent for a legal
  // obligation (s10(3)(b)) or legitimate interests (s10(3)(e)).
  BASIS_ENQUIRIES:
    'Your consent, which the Act allows to be implied when an adult contacts us about Tendao (section 10(1) and (2))',
  BASIS_BUSINESS_ADMIN:
    'The consent of the school’s authorised representative in entering the agreement, and our legitimate interests in running it (sections 10(2) and 10(3)(e))',
  BASIS_SECURITY:
    'Our legitimate interests in keeping Tendao and schools’ records secure, and preserving evidence of an offence where one is suspected (sections 10(3)(e) and 10(3)(a))',
  BASIS_LEGAL_DUTIES:
    'Compliance with a legal obligation, such as keeping tax records under the Income Tax Act and the Value Added Tax Act (section 10(3)(b))',
  PRIMARY_PROCESSING_LOCATIONS:
    'Amazon Web Services, Cape Town region (af-south-1), South Africa',
  FILE_AND_BACKUP_LOCATIONS:
    'Amazon Web Services, Cape Town region (af-south-1), South Africa',
  SUPPORT_ACCESS_LOCATIONS: 'Zimbabwe',
  ENQUIRY_RETENTION: '12 months after our last contact',
  BUSINESS_RECORD_RETENTION:
    '6 years after the end of the tax period they relate to, as the Income Tax Act and the Value Added Tax Act require',
  SCHOOL_RECORD_RETENTION:
    'kept for as long as the school’s subscription is active, unless the school instructs otherwise; a pupil’s records are not deleted when they leave a class or the school',
  AI_RECORD_RETENTION:
    'Kept with the school’s records for as long as its subscription is active',
  LOG_RETENTION: '12 months',
  SUPPORT_RETENTION: '24 months after the request is closed',
  MARKETING_RECORD_RETENTION:
    'Until you withdraw permission; after that, only the contact detail needed to keep you off our lists',
} satisfies Record<string, string | null>;

export type PendingField = keyof typeof pending;

/** True while any field is still to be confirmed. */
export const isDraft = Object.values(pending).some(
  (value: string | null) => value === null
);

/** A field's value, or a visible marker that it is still to be confirmed. */
export function Field({ name }: { name: PendingField }): ReactNode {
  const value = pending[name];
  if (value !== null) return value;
  return (
    <mark className="rounded bg-khaki-soft px-1 font-semibold text-khaki-deep">
      [to be confirmed: {name.toLowerCase().replaceAll('_', ' ')}]
    </mark>
  );
}
