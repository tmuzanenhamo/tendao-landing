import Link from 'next/link';
import LegalPage from '@/components/page/LegalPage';
import { company, Field, type PendingField } from '@/legal/details';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = {
  ...pageMetadata(
    '/privacy',
    'Privacy Policy',
    'How Snaprise Investments (Private) Limited handles personal information in Tendao, and the roles of Tendao and the school.'
  ),
  // Kept out of search results until the draft is final.
  robots: { index: false },
};

const roles = [
  [
    'Website enquiries, our business administration and our own legal obligations',
    'Tendao is generally the controller for these purposes.',
  ],
  [
    'School pupil records, attendance, marks, assignments, fee records and school-directed communication',
    'The school is generally the controller and Tendao generally acts as its processor under the school agreement.',
  ],
  [
    'AI used within an agreed school workflow',
    'Roles depend on the actual workflow and providers; the school agreement and provider register identify them.',
  ],
  [
    'An external service you choose to visit, such as WhatsApp',
    'That service may process information under its own terms and privacy notice.',
  ],
];

const categories = [
  [
    'Enquiry information',
    'Name, work contact, school, role, approximate enrolment and enquiry text',
    'You or an authorised colleague',
  ],
  [
    'Account information',
    'Name, role, school association, contact details and account settings',
    'School administrator or user',
  ],
  [
    'Pupil and parent records',
    'Pupil identifiers, class, subjects and verified parent or guardian relationships',
    'School, parent or authorised user',
  ],
  [
    'Learning records',
    'Attendance, assignments, submissions, marks, feedback, reports and schemes of work',
    'Staff and pupils',
  ],
  [
    'Financial records',
    'School fee charges, invoices, recorded payment method, receipts and balances',
    'School bursar or authorised integration',
  ],
  [
    'Communications',
    'School messages, recipient details and applicable delivery or interaction records',
    'School and communication providers',
  ],
  [
    'AI interactions',
    'Questions, uploaded working, responses and school context used by an enabled feature',
    'User, school and approved AI workflow',
  ],
  [
    'Support information',
    'Contact details, issue description and necessary diagnostic information',
    'User, authorised school contact and support systems',
  ],
  [
    'Technical information',
    'IP address, browser/device information, service events and security logs included in the verified processing inventory',
    'Device or service operation',
  ],
];

const grounds: [string, PendingField | string][] = [
  ['Enquiry response and requested walkthrough', 'BASIS_ENQUIRIES'],
  ['Business account and subscription administration', 'BASIS_BUSINESS_ADMIN'],
  ['Necessary service security and misuse investigation', 'BASIS_SECURITY'],
  ['Accounting, legal obligations and lawful requests', 'BASIS_LEGAL_DUTIES'],
  [
    'Optional marketing to adult business contacts',
    'Specific opt-in, subject to the applicable rules',
  ],
  [
    'Non-essential website technologies, if deployed',
    'The choices described in the Cookie Policy',
  ],
];

const retention: [string, PendingField][] = [
  ['Unconverted enquiries and walkthrough requests', 'ENQUIRY_RETENTION'],
  [
    'Tendao’s subscription, billing and legal records',
    'BUSINESS_RECORD_RETENTION',
  ],
  ['Security and activity logs', 'LOG_RETENTION'],
  ['Support tickets and attachments', 'SUPPORT_RETENTION'],
  [
    'Marketing preferences and minimal suppression records',
    'MARKETING_RECORD_RETENTION',
  ],
];

const isField = (value: string): value is PendingField =>
  /^[A-Z_]+$/.test(value);

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <h2>1. Who we are</h2>
      <p>
        Tendao is operated by {company.name}, registered in{' '}
        {company.registeredIn} under registration number {company.number}, with
        its business address at {company.address}.
      </p>
      <p>
        For privacy questions, contact <Field name="PRIVACY_EMAIL" />. Our
        designated privacy contact is{' '}
        <Field name="PRIVACY_CONTACT_NAME_OR_ROLE" />. If a Data Protection
        Officer has been appointed, the officer’s contact details are{' '}
        <Field name="DPO_CONTACT_DETAILS" />.
      </p>
      <p>
        This policy covers the Tendao website, enquiries and services operated
        by that entity. A school’s own privacy notice also applies to
        information the school determines how and why to process.
      </p>

      <h2>2. Our role and the school’s role</h2>
      <p>
        A data controller decides why and how personal information is processed.
        A processor handles information on a controller’s documented
        instructions.
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Context</th>
            <th scope="col">Responsibility</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(([context, who]) => (
            <tr key={context}>
              <td>{context}</td>
              <td>{who}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Roles depend on actual conduct, not a label alone. If Tendao determines
        a separate purpose, we must identify it and the relevant
        responsibilities before processing for that purpose.
      </p>
      <p>
        A parent or pupil may need the school to decide a request concerning the
        school’s records. You may still contact Tendao; we will help route the
        request appropriately and handle our own responsibilities.
      </p>

      <h2>3. Information we handle</h2>
      <p>The information depends on how the school and user use the service.</p>
      <table>
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Examples</th>
            <th scope="col">Source</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(([category, examples, source]) => (
            <tr key={category}>
              <th scope="row">{category}</th>
              <td>{examples}</td>
              <td>{source}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Some educational, financial and other school information is sensitive
        under Zimbabwean law. Free text and uploaded files can also reveal
        sensitive information.
      </p>
      <p>
        Do not send unnecessary health details, identity documents, passwords,
        bank-card security information or information about another person
        through a general enquiry or AI prompt.
      </p>
      <p>
        Direct payment-provider processing, if offered, must be disclosed
        separately. A recorded payment method does not establish that Tendao
        receives full card details.
      </p>

      <h2>4. Why information is used</h2>
      <p>We use information for the following agreed purposes:</p>
      <ul>
        <li>Responding to enquiries and arranging relevant walkthroughs.</li>
        <li>Creating and maintaining authorised accounts.</li>
        <li>Providing the school workflows included in the agreement.</li>
        <li>
          Processing a school’s lawful instructions, including authorised
          communications.
        </li>
        <li>
          Providing enabled AI assistance within the approved school workflow.
        </li>
        <li>Resolving support requests and investigating faults.</li>
        <li>Protecting accounts, records and service integrity.</li>
        <li>
          Administering Tendao’s school subscriptions, invoices and legal
          obligations.
        </li>
        <li>
          Sending optional business updates to adults who choose to receive
          them.
        </li>
        <li>Meeting lawful requests and handling disputes.</li>
      </ul>
      <p>
        We do not treat a privacy-policy acknowledgement as blanket permission
        for unrelated processing. We do not sell identifiable school
        information, use it for targeted advertising or use it to train
        general-purpose AI models.
      </p>
      <p>
        We do not reuse identifiable pupil work or conversations for an
        independent product-development purpose merely because they were entered
        into Tendao.
      </p>

      <h2>5. Lawful grounds and choices</h2>
      <p>
        The responsible controller must identify a lawful ground for each
        purpose under applicable law, including the additional conditions
        relevant to sensitive information and children.
      </p>
      <p>For Tendao’s own processing, the assessed grounds are:</p>
      <table>
        <thead>
          <tr>
            <th scope="col">Purpose</th>
            <th scope="col">Assessed lawful ground or permission</th>
          </tr>
        </thead>
        <tbody>
          {grounds.map(([purpose, ground]) => (
            <tr key={purpose}>
              <td>{purpose}</td>
              <td>{isField(ground) ? <Field name={ground} /> : ground}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        For school-directed processing, the school identifies and records the
        ground in its notices and processing arrangements. Tendao must follow
        lawful documented instructions and cannot rely on an invalid school
        instruction to justify processing.
      </p>
      <p>
        Where consent is the ground, it must meet the applicable standard and
        may be withdrawn. Withdrawal does not automatically erase records that
        must lawfully be retained or invalidate earlier lawful processing. We or
        the school will explain the consequences for the affected feature and
        any available alternative.
      </p>

      <h2>6. Children and guardian involvement</h2>
      <p>
        Tendao is used by schools that hold records of children. The commercial
        subscription is arranged with an authorised adult school representative,
        not with a child.
      </p>
      <p>
        The school must give understandable information to parents, guardians
        and pupils, verify the relevant authority and obtain and record written
        parent or guardian consent where required before children’s information
        is processed. Any exception must have a documented legal basis and
        satisfy any required regulatory steps.
      </p>
      <p>
        Optional AI tutoring and optional marketing permissions must not be
        hidden within a general acknowledgement. The current advertised pupil
        tutoring range is Form 1 to Upper 6, subject to school enablement and
        the required authority.
      </p>
      <p>
        We do not offer targeted advertising to pupils. We do not authorise
        solely automated decisions affecting children’s rights.
      </p>

      <h2>7. AI information</h2>
      <p>
        When an approved AI feature is used, relevant prompts, attachments and
        limited school context may be processed by the providers identified in
        the Provider Register.
      </p>
      <p>
        Teachers and school administrators can review pupil-tutor conversations
        as described in the enabled product. Conversations should not be treated
        as private from the school, or as continuously monitored by a person.
      </p>
      <p>
        The provider register and school processing agreement must identify the
        actual provider, purpose, processing locations, retention and
        model-training restrictions. These details are not established merely by
        describing the feature as “AI.”
      </p>
      <p>
        AI output can be wrong. The school and teacher remain responsible for
        appropriate human review of consequential decisions and suggested marks.
        See <Link href="/ai">how the AI help works</Link>.
      </p>

      <h2>8. Who may receive information</h2>
      <p>
        Information is shared only for an identified, lawful purpose with an
        appropriate recipient. Depending on the workflow, recipients may
        include:
      </p>
      <ul>
        <li>
          Authorised users at the same school, according to their roles and
          verified relationships.
        </li>
        <li>
          Approved hosting, storage, communications, support and AI providers.
        </li>
        <li>
          Tendao personnel or contractors who need access for an authorised
          service task and are bound by confidentiality duties.
        </li>
        <li>
          Professional advisers where necessary for an identified business or
          legal matter.
        </li>
        <li>
          A regulator, court or other body where disclosure is legally required
          or otherwise lawfully justified.
        </li>
        <li>
          A successor organisation in a lawful business transfer, subject to
          appropriate safeguards, notice and existing restrictions on school
          information.
        </li>
      </ul>
      <p>
        A business transfer does not itself permit incompatible reuse of pupil
        information. Cross-school disclosure is not authorised merely because
        both schools use Tendao.
      </p>

      <h2>9. Processing locations and international transfers</h2>
      <p>
        Primary application and database locations:{' '}
        <Field name="PRIMARY_PROCESSING_LOCATIONS" />.
      </p>
      <p>
        File and backup locations: <Field name="FILE_AND_BACKUP_LOCATIONS" />.
      </p>
      <p>
        Support-access locations: <Field name="SUPPORT_ACCESS_LOCATIONS" />.
      </p>
      <p>
        Provider-specific processing locations and remote-access arrangements
        are listed in the Provider Register.
      </p>
      <p>
        We assess international processing before enabling it and put the
        required legal, contractual and technical protections in place. The
        school and Tendao must complete applicable notification or authorisation
        steps, including additional requirements relevant to children’s
        information.
      </p>
      <p>
        A statement that a provider is “global” does not replace location
        information. Acceptance of these terms is not blanket consent to
        transfer information to any country.
      </p>

      <h2>10. Retention</h2>
      <p>
        Information is kept for the relevant purpose and applicable legal
        requirements, rather than indefinitely.
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Retention rule</th>
          </tr>
        </thead>
        <tbody>
          {retention.slice(0, 2).map(([category, field]) => (
            <tr key={category}>
              <td>{category}</td>
              <td>
                <Field name={field} />
              </td>
            </tr>
          ))}
          <tr>
            <td>Active school operational records</td>
            <td>
              School’s approved schedule:{' '}
              <Field name="SCHOOL_RECORD_RETENTION" />
            </td>
          </tr>
          <tr>
            <td>Pupil-tutor and other AI interaction records</td>
            <td>
              <Field name="AI_RECORD_RETENTION" />, including provider copies
            </td>
          </tr>
          {retention.slice(2).map(([category, field]) => (
            <tr key={category}>
              <td>{category}</td>
              <td>
                <Field name={field} />
              </td>
            </tr>
          ))}
          <tr>
            <td>Active records after school service ends</td>
            <td>
              Export window <Field name="EXPORT_WINDOW_DAYS" /> days; active
              deletion within <Field name="ACTIVE_DELETION_DAYS" /> days after
              that window ends, or earlier on a lawful school instruction,
              except identified lawful retention
            </td>
          </tr>
          <tr>
            <td>Residual backups</td>
            <td>
              Expire within <Field name="BACKUP_EXPIRY_DAYS" /> days under the
              verified schedule
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        The school may have separate legal duties to retain educational or
        financial records. Closing a user’s account or leaving a school does not
        automatically erase those records.
      </p>
      <p>
        A necessary legal hold may pause deletion for an identified record.
        Access and use remain restricted. We explain the applicable basis and
        limits when responding to a request.
      </p>

      <h2>11. Security and incidents</h2>
      <p>
        We use appropriate organisational and technical measures for the actual
        risks. Our verified public summary is set out on{' '}
        <Link href="/trust">Your school’s data</Link>.
      </p>
      <p>
        No online service can remove every risk. Users should protect their
        accounts and report suspected exposure promptly through{' '}
        <Field name="SECURITY_EMAIL" />.
      </p>
      <p>
        When a personal-information incident occurs, we assess it, take
        containment steps and make the notifications required of us. Where
        acting as processor, we notify the school’s designated contact without
        undue delay and cooperate so that the school can meet its own
        obligations. We do not wait for a complete investigation before
        providing available initial information.
      </p>
      <p>
        We do not claim independent certification, a particular encryption
        standard, constant human monitoring or a specific uptime level unless it
        is expressly documented.
      </p>

      <h2>12. Rights and requests</h2>
      <p>Depending on the information and applicable law, you may ask to:</p>
      <ul>
        <li>Be told how your information is used.</li>
        <li>Access your information.</li>
        <li>Correct false or misleading information.</li>
        <li>Object to processing where the law provides that right.</li>
        <li>Request deletion where the applicable conditions are met.</li>
        <li>Withdraw consent for processing that relies on consent.</li>
        <li>Stop optional Tendao marketing.</li>
      </ul>
      <p>
        Contact <Field name="PRIVACY_EMAIL" /> to make a request.
      </p>
      <p>
        We may need proportionate information to verify identity and authority.
        Do not email a full identity document unless we explain why it is
        necessary and provide a suitable method.
      </p>
      <p>
        Requests involving school records may require a decision by the school.
        We assist with the relevant steps. We will not disclose another person’s
        information simply because it appears in the same document.
      </p>
      <p>
        If a request cannot be met in full, the responsible party should explain
        the lawful reason and available options within applicable time limits.
        This policy does not promise an unconditional right to erase required
        records or a universal right to data portability.
      </p>

      <h2>13. Cookies, optional updates and external links</h2>
      <p>
        Our Cookie Policy identifies website technologies and their purposes.
        Optional analytics, marketing or embedded technologies are handled
        according to the published choices.
      </p>
      <p>
        Optional Tendao marketing is separate from operational school
        communication. You can withdraw optional marketing permission without
        using the school’s messaging preferences as a substitute.
      </p>
      <p>
        If you choose to use WhatsApp or another external service, its own
        policies may also apply. We do not control that service merely because
        our website links to it.
      </p>

      <h2>14. Complaints</h2>
      <p>
        Contact <Field name="PRIVACY_EMAIL" /> with a concern about Tendao’s
        processing. You may contact the school’s privacy representative about
        school-controlled records.
      </p>
      <p>
        You may also complain directly to the relevant regulator. In Zimbabwe,
        the designated Data Protection Authority is POTRAZ. Use its official
        website for current complaint channels.
      </p>
      <p>
        You do not have to give up a regulatory complaint or another lawful
        remedy to contact us first.
      </p>

      <h2>15. Changes and contact</h2>
      <p>
        We update the version and effective date when this policy changes.
        Material changes will be communicated in an appropriate way. A new
        purpose requiring consent or other authority will be addressed before
        processing for that purpose.
      </p>
      <p>
        Privacy contact: <Field name="PRIVACY_CONTACT_NAME_OR_ROLE" />
        <br />
        Email: <Field name="PRIVACY_EMAIL" />
        <br />
        Address: {company.address}
        <br />
        Phone: <Field name="BUSINESS_PHONE" />
      </p>
    </LegalPage>
  );
}
