import Link from 'next/link';
import LegalPage from '@/components/page/LegalPage';
import { company, Field } from '@/legal/details';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = {
  ...pageMetadata(
    '/terms',
    'Terms of Service',
    'The terms on which Snaprise Investments (Private) Limited provides Tendao to schools and their users.'
  ),
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <h2>1. Who provides Tendao</h2>
      <p>
        Tendao is operated by {company.name}, registered in{' '}
        {company.registeredIn} under registration number {company.number}.
      </p>
      <p>
        Our business and legal-service address is {company.address}. You can
        contact us at <Field name="GENERAL_EMAIL" />. Formal notices should be
        sent to <Field name="LEGAL_EMAIL" /> and our legal-service address.
      </p>
      <p>
        In these terms, “Tendao,” “we,” “us” and “our” refer to that entity.
        “School” means the organisation that orders the platform. “User” means
        an authorised staff member, pupil, parent or guardian.
      </p>

      <h2>2. What these terms cover</h2>
      <p>
        These terms explain the conditions for access to Tendao’s website and
        platform. Our AI Use Policy, set out on{' '}
        <Link href="/ai">how the AI help works</Link>, forms part of the
        platform-use conditions.
      </p>
      <p>
        A paid school subscription begins only when an authorised representative
        and Tendao accept an order or school agreement. Requesting a walkthrough
        or browsing the website does not order a subscription.
      </p>
      <p>
        A child does not enter the school’s commercial agreement by using a
        pupil account. The school must provide age-appropriate use rules and
        arrange any required parental or guardian authority.
      </p>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains processing of
        personal information. Reading or acknowledging it is not, by itself,
        consent to every type of processing.
      </p>

      <h2>3. The school agreement</h2>
      <p>
        The order must identify the school, authorised representative, included
        services, subscription period, charges, payment dates, renewal
        arrangements and any implementation work.
      </p>
      <p>
        Mandatory law always applies. A specifically negotiated school agreement
        controls a conflicting commercial term. For processing school personal
        information, the signed Data Processing Addendum controls a conflict
        with the general terms. An order cannot silently authorise new uses of
        pupil information.
      </p>
      <p>
        Service-level commitments apply only when expressly agreed in writing.
        Marketing examples and demonstration records are illustrative; features
        described as planned are not included unless the order says otherwise.
      </p>

      <h2>4. Permission to use the service</h2>
      <p>
        During the agreed subscription, we grant the school and its authorised
        users permission to use the included services for the school’s
        legitimate educational and administrative work.
      </p>
      <p>
        The school may assign access to the appropriate staff, pupils and
        parents. It may not resell access, give unrelated organisations access
        or attempt to access another school’s records without an express
        agreement.
      </p>
      <p>
        We retain rights in Tendao’s software, branding and materials. You may
        not copy, sell or redistribute them except where we give permission or
        the law allows it.
      </p>

      <h2>5. Accounts and access</h2>
      <p>
        The school is responsible for identifying its authorised users, checking
        parent or guardian relationships, selecting appropriate permissions and
        removing access when responsibilities change.
      </p>
      <p>
        Users must keep sign-in details private, use their own accounts and
        promptly report suspected unauthorised access. Do not send passwords or
        verification codes to support.
      </p>
      <p>
        We will operate the access controls described in the school’s processing
        and security schedule. A school’s instruction cannot authorise access
        that would be unlawful.
      </p>
      <p>
        If an account has been linked to the wrong child or an incorrect person
        can see records, report this to <Field name="GENERAL_EMAIL" />{' '}
        immediately.
      </p>

      <h2>6. What the service does</h2>
      <p>
        The services available to a school are those identified in its order.
        They may include pupil records, attendance, homework, marks, reports,
        fee invoicing, recorded payments, parent access and approved AI
        features.
      </p>
      <p>
        Recording a payment in Tendao does not necessarily mean that Tendao
        processed or received that payment. A direct payment integration must be
        identified separately in the order, including the responsible payment
        provider.
      </p>
      <p>
        The school remains responsible for its charges, grading configuration,
        reports, teaching decisions and accuracy of records it supplies. We
        remain responsible for supplying the agreed service with reasonable care
        and skill.
      </p>
      <p>
        Internet access, devices, third-party communications networks and
        external providers may affect availability. Offline operation, delivery
        guarantees, examination-board integration or accreditation are not
        included unless expressly confirmed.
      </p>

      <h2>7. School information and lawful use</h2>
      <p>
        The school must establish a lawful basis for the information it
        provides, give appropriate notices and obtain and record any required
        consent or other authority.
      </p>
      <p>
        For children’s information, the school must satisfy applicable
        requirements for parent or guardian consent, verification and any
        authorised exception before information is provided to Tendao. A school
        subscription does not replace these requirements.
      </p>
      <p>
        Educational and financial records can be sensitive under applicable law.
        Upload only information needed for an agreed, supported purpose. Do not
        upload additional health, biometric, identification or other high-risk
        information unless its processing has been specifically assessed and
        authorised.
      </p>
      <p>
        The school must take reasonable care over data accuracy, parent links,
        imports, opening balances and instructions. We must provide reasonable
        assistance to correct errors arising from the service.
      </p>

      <h2>8. How we may use school information</h2>
      <p>
        The school retains control of its records, subject to the rights of the
        people concerned. These terms do not give either party ownership of
        another person’s privacy rights.
      </p>
      <p>
        The school authorises processing only to provide and secure the agreed
        service, follow documented lawful instructions and meet applicable legal
        duties, as described in the Data Processing Addendum.
      </p>
      <p>
        We do not sell identifiable school information, use it for targeted
        advertising or use it to train general-purpose AI models. Approved
        providers must be restricted consistently with the processing agreement.
      </p>
      <p>
        This permission is limited to the service and its agreed retention
        arrangements. It is not a perpetual licence to repurpose pupil work,
        photographs, conversations or records.
      </p>
      <p>
        Optional feedback must not include school personal information unless
        its use has been specifically authorised.
      </p>

      <h2>9. AI assistance</h2>
      <p>
        AI features are governed by our AI Use Policy, set out on{' '}
        <Link href="/ai">how the AI help works</Link>, and the school’s enabled
        settings.
      </p>
      <p>
        AI may provide incomplete, inaccurate, biased or unsuitable responses.
        Teachers must check assignment drafts, suggested marks and feedback
        before using or saving them.
      </p>
      <p>
        Tendao must not be used to make solely automated decisions affecting a
        child’s rights. Admission, exclusion, disciplinary action, final
        assessment and other consequential decisions require appropriate human
        judgement and lawful procedures.
      </p>
      <p>
        The school must explain who can access pupil conversations and how
        concerns are handled. A model instruction to guide learning or flag a
        concern does not guarantee that every unsafe response or concern will be
        prevented or detected.
      </p>
      <p>
        AI is not an emergency, medical, counselling or safeguarding response
        service.
      </p>

      <h2>10. Charges and payment</h2>
      <p>
        The accepted order sets out the full price, currency, pupil-count basis,
        billing period, due dates, taxes and any additional setup, messaging,
        AI, training or support charges.
      </p>
      <p>
        A website starting price is not a complete school quote. We will
        identify additional charges before the school agrees to them.
      </p>
      <p>
        The school should raise a disputed invoice promptly with{' '}
        <Field name="BILLING_EMAIL" />, identifying the disputed entry. The
        parties will investigate in good faith. Undisputed charges remain
        payable under the order.
      </p>
      <p>
        Price changes apply as agreed in the order and cannot be imposed
        retrospectively. Any renewal price and notice must be supplied before
        the school is required to decide on renewal.
      </p>

      <h2>11. Subscription period and renewal</h2>
      <p>The subscription starts and ends on the dates stated in the order.</p>
      <p>
        Automatic renewal applies only if the order expressly describes it,
        including the renewal period, price basis and cancellation procedure.
        Otherwise, renewal requires a further agreement.
      </p>
      <p>
        The school may request cancellation through{' '}
        <Field name="BILLING_EMAIL" />. The ordinary cancellation notice is{' '}
        <Field name="CANCELLATION_NOTICE" />. Any applicable statutory
        cancellation or refund right takes priority over a less favourable
        contractual condition.
      </p>

      <h2>12. Support, maintenance and changes</h2>
      <p>
        Support is available by email at <Field name="GENERAL_EMAIL" />, and any
        additional arrangements are stated in the order.
      </p>
      <p>
        We may maintain, repair or improve the service. We will give reasonable
        notice of planned changes likely to materially affect the school’s use,
        except where urgent action is needed for security, legal compliance or
        service protection.
      </p>
      <p>
        A material reduction in a paid, contracted feature must be handled
        through the school agreement, with a reasonable remedy where required. A
        website policy update does not remove an existing contractual remedy.
      </p>

      <h2>13. Suspension</h2>
      <p>
        We may restrict access where reasonably necessary to address unlawful
        use, a material security threat or a serious breach of the agreement.
      </p>
      <p>
        For ordinary non-payment, we will first notify the authorised school
        contact and give the agreed opportunity to resolve the matter. A genuine
        dispute must be considered fairly.
      </p>
      <p>
        Restrictions must be proportionate and, where feasible, limited to
        affected accounts or features. We will explain the reason and recovery
        steps unless doing so is prohibited or would materially increase the
        risk.
      </p>
      <p>
        Suspension does not authorise destruction of school information or
        refusal of legally required access. We will consider a safe route for
        authorised records access and export.
      </p>

      <h2>14. Ending the agreement</h2>
      <p>
        Either party may end the agreement for a material breach not corrected
        within <Field name="BREACH_REMEDY_PERIOD" /> after written notice,
        subject to any different lawful provisions in the school agreement.
      </p>
      <p>
        Immediate termination may be appropriate where continued performance
        would be unlawful or a serious threat cannot reasonably be controlled by
        a narrower measure.
      </p>
      <p>
        If we permanently discontinue the contracted service, we will give the
        notice and transition assistance required by the agreement and
        applicable law. Any refund for undelivered prepaid service is handled
        under the cancellation policy and mandatory rights.
      </p>

      <h2>15. Records after the agreement ends</h2>
      <p>
        The authorised school contact may request an export of supported school
        records during <Field name="EXPORT_WINDOW_DAYS" /> days after the
        service ends, subject to any longer legal entitlement. The supported
        format and any separately agreed assistance must be explained before the
        school contracts.
      </p>
      <p>
        At the end of the export window, or earlier on a lawful school
        instruction, active school information is deleted within{' '}
        <Field name="ACTIVE_DELETION_DAYS" /> days, except information lawfully
        retained for an identified purpose.
      </p>
      <p>
        Residual backup copies expire within <Field name="BACKUP_EXPIRY_DAYS" />{' '}
        days under the backup schedule. Retained copies remain protected, are
        restricted from ordinary use and are not restored to resume processing
        after deletion.
      </p>
      <p>
        The school remains responsible for legal retention decisions within its
        control. The detailed schedule is in the processing agreement and{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>16. Confidentiality</h2>
      <p>
        Each party must protect the other’s confidential information and use it
        only for the agreement or a lawful requirement.
      </p>
      <p>
        Access may be given to people and approved providers who need it and are
        bound by suitable confidentiality duties.
      </p>
      <p>
        These obligations do not prevent a lawful report to a regulator, a
        protected disclosure or the exercise of a person’s legal rights.
      </p>

      <h2>17. Service quality and remedies</h2>
      <p>
        We will provide the agreed service with reasonable care and skill. We
        cannot promise that software or AI will always be uninterrupted,
        error-free or suitable for every unassessed use.
      </p>
      <p>
        If the service materially fails to meet an agreed requirement, notify us
        with enough information to investigate. We will consider correction,
        repeat performance, a proportionate refund or another appropriate
        remedy, subject to the agreement and applicable law.
      </p>
      <p>
        Nothing in these terms removes a warranty or remedy that cannot lawfully
        be excluded.
      </p>

      <h2>18. Liability</h2>
      <p>
        Subject to the exceptions below, the parties’ agreed liability limit is{' '}
        <Field name="LIABILITY_CAP_TEXT" />.
      </p>
      <p>
        No limit or exclusion applies to fraud, wilful misconduct, gross
        negligence, liability that cannot lawfully be limited or any other
        expressly agreed uncapped category.
      </p>
      <p>
        Claims involving confidentiality, personal information, security
        incidents or intellectual-property infringement must be addressed
        expressly in the school agreement; they are not silently excluded by a
        general reference to lost data or indirect loss.
      </p>
      <p>
        Each party remains responsible for loss caused by its own breach to the
        extent established under applicable law. Users are not required to give
        a blanket indemnity merely for using a pupil or parent account.
      </p>

      <h2>19. Events outside reasonable control</h2>
      <p>
        A party affected by an event outside its reasonable control must notify
        the other, take reasonable steps to limit the impact and resume
        performance when possible.
      </p>
      <p>
        This does not excuse reasonable security preparation, payment already
        due, data-protection duties or an otherwise applicable refund or
        termination right.
      </p>

      <h2>20. Changes to these terms</h2>
      <p>
        We will identify a new version and effective date when the terms change.
      </p>
      <p>
        For material contractual changes, we will give{' '}
        <Field name="MATERIAL_CHANGE_NOTICE_DAYS" /> days’ advance notice or
        another period required by law or the school agreement. Changes
        requiring agreement will be presented for affirmative acceptance by the
        appropriate adult representative.
      </p>
      <p>
        Changes will not apply retrospectively to remove an accrued right or
        silently expand the use of school information.
      </p>

      <h2>21. Questions, complaints and disputes</h2>
      <p>
        Contact <Field name="LEGAL_EMAIL" /> with a contractual concern. We will
        try to resolve it fairly with the appropriate school representative.
      </p>
      <p>
        The agreement is governed by the laws of Zimbabwe, subject to any
        mandatory law that applies. Competent courts may hear disputes unless a
        valid, separately agreed process applies.
      </p>
      <p>
        No user must waive access to a regulator, lawful consumer remedy or
        court as a condition of raising a concern with Tendao.
      </p>

      <h2>22. Related documents</h2>
      <ul>
        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>

        <li>
          <Link href="/ai">How the AI help works</Link>
        </li>

        <li>
          <Link href="/trust">Your school’s data</Link>
        </li>
        <li>School-specific order and signed Data Processing Addendum</li>
      </ul>
    </LegalPage>
  );
}
