import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from './home';

export default function temp() {
  return (
<div>
  <div>
    <p dir="ltr">Sir,&nbsp;</p>
    <p dir="ltr">I am writing to tell you that I wish to raise a grievance about the following:&nbsp;</p>
    <ol>
      <li dir="ltr">
        <p dir="ltr" role="presentation">That, on xx-xx-xxxx, I received a mail from xyz, on my student e-mail id (Provided to me by IIT-Madras), i.e. 
          <a href="mailto:xyz@xyz.edu.in" target="_blank" rel="noopener">xyz@xyz.edu.in</a>, stating XYZ. The relevant mail screenshot is attached herewith and marked as Annexure – A.
        </p>
      </li>
      <li dir="ltr">
        <p dir="ltr" role="presentation">That, to avail the benefits, I followed the steps/procedures as was mentioned in the email.</p>
      </li>
      <li dir="ltr">
        <p dir="ltr" role="presentation">That, after the completion of the procedure successfully, my savings account (A/c No. XXXXXXXX) was activated on xx-xx-xxxx, and to the best of my knowledge, I had not applied for any credit card as such nor It was ever issued to me.</p>
      </li>
      <li dir="ltr">
        <p dir="ltr" role="presentation">That, on xx-xx-xxxx, I received an e-mail from your bank (email id- 
          <a href="mailto:xyz@xyz.com" target="_blank" rel="noopener">xyz@xyz.com</a>) stating “usage of credit card, along with bill” and the mentioned credit card was issued under my name.&nbsp;
        </p>
      </li>
    </ol>
    <p dir="ltr">Note: As mentioned in paragraph 3, the credit card was neither applied by me nor was/is issued to me. Also, the issuance of such a credit card was never informed to me.</p>
    <p dir="ltr">The relevant mail screenshot is attached herewith and marked as Annexure – B</p>
    <ol start="5">
      <li dir="ltr">
        <p dir="ltr" role="presentation">That, then I started receiving similar e-mails frequently, stating the usage of credit card issued under my name, connected to my account, and affecting my credit score along with the bills demanding to pay. The relevant mail screenshots are attached herewith and marked as Annexures – C, D, and E.</p>
      </li>
      <li dir="ltr">
        <p dir="ltr" role="presentation">That, to avoid any further loss I tried to contact customer service numerous times but their only response I got was to pay the bills. Anticipating a drop in my credit score I paid the bill amount of Rs. XYZ/- and then communicated my issue with your grievance department, but all they said was “it's system generated and can’t resolve”.&nbsp;</p>
      </li>
      <li dir="ltr">
        <p dir="ltr" role="presentation">Also, surprisingly the credit card number which was mentioned by them during the telephonic conversation was different from the credit card bills I was receiving in my e-mail.</p>
      </li>
      <li dir="ltr">
        <p dir="ltr" role="presentation">That, the above-stated facts show your irresponsibility and lack of care. You are hereby requested to treat this matter as very urgent and resolve the issue.</p>
      </li>
    </ol>
    <p dir="ltr">You are hereby expected to do as follows to avoid consequences of litigation:</p>
    <ol>
      <li dir="ltr">
        <p dir="ltr" role="presentation">Close any and every credit card existing in my name or linked to my account in any way, as of now.</p>
      </li>
      <li dir="ltr">
        <p dir="ltr" role="presentation">Compensate for the bills I was forced to pay. The relevant documents are attached herewith and marked as Annexure – F.</p>
      </li>
    </ol>
    <br></br>
  </div>
</div>



  )
}
