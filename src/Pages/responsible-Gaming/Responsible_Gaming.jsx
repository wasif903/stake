import React from "react";
import Header from "../../components/other/Header";
import { Container } from "react-bootstrap";
import style from "./responsibleGaming.module.css";

const Responsible_Gaming = () => {
  return (
    <div>
      <Header />
      <Container className={style.Responsible_Gaming_wrapper}>
        <h1 className="pb-3">Responsible Gaming</h1>
        <div className="d-flex flex-column gap-3">
          <p>Last updated: 2022.01.01</p>
          <p>Please read this information carefully for your own benefit.</p>
          <p>
            infiny.vip is committed to endorsing responsible gaming as a policy
            of customer care and social responsibility. We believe it is our
            responsibility to you, our customers, to ensure that you enjoy your
            wagering experience on our site while remaining fully aware of the
            social and financial harms associated with problem gambling.
          </p>
          <p>
            You cannot transfer, sell, or pledge Your Account to another person.
            This prohibition includes the transfer of any assets of value of any
            kind, including but not limited to ownership of accounts, winnings,
            deposits, bets, rights and/or claims in connection with these
            assets, legal, commercial or otherwise. The prohibition on said
            transfers also includes however is not limited to the encumbrance,
            pledging, assigning, usufruct, trading, brokering, hypothecation
            and/or gifting in cooperation with a fiduciary or any other third
            party, company, natural or legal individual, foundation and/or
            association in any way shape or form.
          </p>
        </div>
        <h1 className="pt-3 pb-3">The restricted countries are:</h1>
        <p>
          Australia, Aruba, Curacao, Saba, Statia, the United Kingdom, the USA
          and any other jurisdiction that the Central Government of Curacao
          deems online gambling illegal. This includes all of the named Nations'
          Territories and Possessions.
        </p>
        <h3>Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions.
        </p>
        <p>
          The following definitions shall have the same meaning regardless of
          whether they appear in singular or in plural.
        </p>
        <h3>Definitions</h3>
        <h1>For the purposes of these Terms and Conditions:</h1>
        <p>
          l Account means a unique account created for You to access our Service
          or parts of our Service.
        </p>
        <p>
          l Company (referred to as either "the Company", "We", "Us" or "Our" in
          this Agreement) refers to Curacao Co
        </p>
        <p>l Service refers to the Website.</p>
        <p>l Website refers to Infiny.vip</p>
        <p>
          l You means the individual accessing or using the Service, or the
          company, or other legal entity on behalf of which such individual is
          accessing or using the Service, as applicable.
        </p>
      </Container>
    </div>
  );
};

export default Responsible_Gaming;
