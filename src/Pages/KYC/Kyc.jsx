import Header from "../../components/other/Header";
import { Container } from "react-bootstrap";
import style from "./kyc.module.css";

const Kyc = () => {
  return (
    <div>
      <Header />
      <Container className={style.Responsible_Gaming_wrapper}>
        <h1 className="pb-3">KYC</h1>
        <div className="d-flex flex-column gap-3">
          <h2 className="pb-3">Last updated: 2023.09.01</h2>
          <p>
            When a user makes an aggregate lifetime total of deposits exceeding
            EUR 2000 or requests a withdrawal of any amount inside the
            Infiny.vip Platform, then it is compulsory for them to perform a
            full KYC process.
            <br />
            During this process, the user will have to input some basic details
            about themselves and then upload
          </p>
          <ol>
            <li>
              A copy of Government Issued Photo ID (in some cases front and back
              depending on the doc)
            </li>
            <li>A selfie of themselves holding the ID doc</li>
            <li>A bank statement/Utility Bill</li>
          </ol>
          <br />
          <p>
            Once uploaded, the user will get a “Temporarily Approved” Status and
            the documents will now be on our side, and the “KYC Team” will have
            24hrs to go over them and email the user about the outcome:
          </p>

          <ul>
            <li>Approval</li>
            <li>Rejection</li>
            <li>More information needed – No change in Status</li>
          </ul>

          <p>When the user is on “Temporarily Approved” Status then</p>

          <ul>
            <li>They can use the platform normally</li>
            <li>They cannot deposit more than EUR 500 in aggregate total</li>
            <li>They cannot complete any withdrawal</li>
          </ul>
          <p> Guideline for the “KYC Process </p>

          <h2>2. Proof of ID</h2>
          <ul>
            <li>Signature Is there</li>
            <li>
              Country is not a Restricted Country: United States of America and
              its territories, France and its territories, Netherlands and its
              territories and countries that form the Kingdom of Netherlands
              including Bonaire, Sint Eustatius, Saba, Aruba, Curacao and Sint
              Maarten, Australia and its territories, United Kingdom of Great
              Britain, Northern Ireland, Spain.
            </li>
            <li>Full Name matches client’s name</li>
            <li>Document does not expire in the next 3 months</li>
            <li>Owner is over 18 years of age</li>
          </ul>

          <h2>2. Proof of Residence</h2>
          <ul>
            <li>Bank Statement or Utility Bill</li>
            <li>
              Country is not a Restricted Country: United States of America and
              its territories, France and its territories, Netherlands and its
              territories and countries that form the Kingdom of Netherlands
              including Bonaire, Sint Eustatius, Saba, Aruba, Curacao and Sint
              Maarten, Australia and its territories, United Kingdom of Great
              Britain, Northern Ireland, Spain, and Cyprus.
            </li>
            <li>
              Full Name matches client’s name and is same as in proof of ID.
            </li>
          </ul>

          <h2>Selfie with ID</h2>
          <ol>
            <li>Holder is the same as in the ID document above</li>
            <li>
              ID document is the same as in “1”. Make sure photo/ID number is
              the same
            </li>
          </ol>

          <h2>Notes on the “KYC Process”</h2>
          <ul>
            <li>
              When the KYC process is unsuccessful then the reason is documented
              and a support ticket is created in the system. The ticket number
              along with an explanation is communicated back to the user.
            </li>
            <li>
              Once all proper documents are in our possession then the account
              gets approved.
            </li>
          </ul>

          <h2>Other AML measures</h2>
          <ol>
            If a user has not passed full KYC then they cannot make additional
            deposits or withdrawals of any amount
          </ol>
          <ol>If a user has passed the KYC process successfully then</ol>
          <ol>There is a deposit limit per transaction (max EUR 2,000)</ol>
          <ol>
            Prior to any withdrawal there is a detailed algorithmic and manual
            check on the activity and balance of the user to see if the amount
            withdrawn is a result of proper activity in the platform.
          </ol>
          <ol>
            Under no circumstances may a user transfer funds directly to another
            user.
          </ol>
        </div>
      </Container>
    </div>
  );
};

export default Kyc;
