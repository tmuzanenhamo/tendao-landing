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
 * Everything the drafts leave for the owner to decide, by the name the draft
 * gave it. A value of null is shown on the page as still to be confirmed, so
 * the pages cannot quietly go out with a guess in them.
 */
const pending = {
  EFFECTIVE_DATE: null,
  POLICY_VERSION: null,
  GENERAL_EMAIL: null,
  BUSINESS_PHONE: null,
  LEGAL_EMAIL: null,
  BILLING_EMAIL: null,
  PRIVACY_EMAIL: null,
  SECURITY_EMAIL: null,
  PRIVACY_CONTACT_NAME_OR_ROLE: null,
  DPO_CONTACT_DETAILS: null,
  CANCELLATION_NOTICE: null,
  BREACH_REMEDY_PERIOD: null,
  EXPORT_WINDOW_DAYS: null,
  ACTIVE_DELETION_DAYS: null,
  BACKUP_EXPIRY_DAYS: null,
  LIABILITY_CAP_TEXT: null,
  MATERIAL_CHANGE_NOTICE_DAYS: null,
  BASIS_ENQUIRIES: null,
  BASIS_BUSINESS_ADMIN: null,
  BASIS_SECURITY: null,
  BASIS_LEGAL_DUTIES: null,
  PRIMARY_PROCESSING_LOCATIONS: null,
  FILE_AND_BACKUP_LOCATIONS: null,
  SUPPORT_ACCESS_LOCATIONS: null,
  ENQUIRY_RETENTION: null,
  BUSINESS_RECORD_RETENTION: null,
  SCHOOL_RECORD_RETENTION: null,
  AI_RECORD_RETENTION: null,
  LOG_RETENTION: null,
  SUPPORT_RETENTION: null,
  MARKETING_RECORD_RETENTION: null,
} satisfies Record<string, string | null>;

export type PendingField = keyof typeof pending;

/** True while any field is still to be confirmed. */
export const isDraft = Object.values(pending).some((value) => value === null);

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
