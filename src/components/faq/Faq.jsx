/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./faq.css";
import { Link } from "react-router-dom";
import Velo from '../velo/Section.jsx'
export default function Faq() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);

  const handler = () => {
    setOne(!one);
    setTwo(false);
    setThird(false);
    setFourth(false);
  };

  const handlerv2 = () => {
    setOne(false);
    setTwo(!two);
    setThird(false);
    setFourth(false);
  };

  const handlerv3 = () => {
    setOne(false);
    setTwo(false);
    setThird(!third);
    setFourth(false);
  };
  const handlerv4 = () => {
    setOne(false);
    setTwo(false);
    setThird(false);
    setFourth(!fourth);
  };
  const handlerv5 = () => {
    setOne(false);
    setTwo(false);
    setThird(false);
    setFourth(false);
    setFifth(!fifth);
  };

  const handleBlogCardClick = () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="faq_container">
      <Velo/>
      <div className="servicer12"></div>
      <h2 className="service_title">Frequently Asked Questions
      </h2>
      <div className="lino"></div>

      <div className="faq_grid">
        <div className="faq_sub_grid maq">
          <div className="left_card_faq">
            <img
              className="mok"
              src="https://media.istockphoto.com/id/1148378134/photo/back-view-of-a-businessman-raising-his-hand-on-a-seminar.webp?b=1&s=612x612&w=0&k=20&c=phaQ719gUfQkOlzIwk7Cm6XTd5ydeE0dqDgYBw4wp44="
              alt=""
            />
          </div>
        </div>
        <div className="faq_sub_grid jkob">
          <div className="faq_list_card">
            <div className="list_card_top_title">
              <h2 className="faq_reason">
                What complaints can I go to an acupuncturist for?
              </h2>
              <div className="faq_me" onClick={handler}>
                {one ? (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/il6uzHS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/DEr97dS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>

            {one && (
              <>
                <div className="fg"></div>
                {/* <img src="https://i.imgur.com/T8jRqj7.jpeg" alt="" /> */}
                <p className="faq_reason_ans">
                  You can visit an acupuncturist with all kinds of complaints,
                  for example:
                </p>
                <ul className="mihor_ul">
                  <li className="mihor_li">(Chronic) pain complaints</li>
                  <li className="mihor_li">allergies</li>
                  <li className="mihor_li">Insomnia,</li>
                  <li className="mihor_li">Fatigue,</li>
                  <li className="mihor_li">Concentration problems,</li>
                  <li className="mihor_li">Depression,</li>
                  <li className="mihor_li">(sports) injuries</li>
                  <li className="mihor_li">Burn-out</li>
                </ul>
                <p className="faq_reason_ans">
                  You can read more about this on the World Health Organisation
                  (WHO) website
                </p>
              </>
            )}
          </div>
          {/* ...........................................................second...................................................... */}
          <div className="faq_list_card">
            <div className="list_card_top_title">
              <h2 className="faq_reason">
                Do you feel anything from the acupuncture needles?
              </h2>
              <div className="faq_me" onClick={handlerv2}>
                {two ? (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/il6uzHS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/DEr97dS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>

            {two && (
              <>
                <div className="fg"></div>
                <p className="faq_reason_ans">
                  This varies per person and the place where the needle is
                  inserted. They are very fine, thin needles so that the prick
                  is barely noticeable. Sometimes people experience a heavy
                  feeling, tingling or shock. This means that the energy
                  blockage has been lifted and the energy in that place starts
                  to flow again.
                </p>
              </>
            )}
          </div>
          {/* ...........................................................third...................................................... */}
          <div className="faq_list_card">
            <div className="list_card_top_title">
              <h2 className="faq_reason">
                How do I know if acupuncture is helping?
              </h2>
              <div className="faq_me" onClick={handlerv3}>
                {third ? (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/il6uzHS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/DEr97dS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>

            {third && (
              <>
                <div className="fg"></div>
                <ul className="mihor_ul">
                  <li className="mihor_li">
                    You experience a reduction in complaints
                  </li>
                  <li className="mihor_li">
                    If you feel tired and lethargic after the treatment, this
                    means that the needles have put the body to work
                  </li>
                  <li className="mihor_li">
                    If you experience a worsening of the complaint after the
                    treatment, do not worry, this is part of the recovery
                    process.
                  </li>
                </ul>
              </>
            )}
          </div>

          {/* ...........................................................fifth...................................................... */}
          <div className="faq_list_card">
            <div className="list_card_top_title">
              <h2 className="faq_reason">Are the needles reused?</h2>
              <div className="faq_me" onClick={handlerv4}>
                {fourth ? (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/il6uzHS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/DEr97dS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>

            {fourth && (
              <>
                <div className="fg"></div>
                <p className="faq_reason_ans">
                  No, they are sterile, single-use needles.
                </p>
              </>
            )}
          </div>
          <div className="faq_list_card">
            <div className="list_card_top_title">
              <h2 className="faq_reason">Is acupuncture reimbursed?</h2>
              <div className="faq_me" onClick={handlerv5}>
                {fifth ? (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/il6uzHS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/DEr97dS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>

            {fifth && (
              <>
                <div className="fg"></div>
                <p className="faq_reason_ans">
                  Acupuncture is reimbursed depending on your supplementary
                  insurance. Your policy conditions or health insurer can give
                  you more information about this. You can also look at the
                  Health Insurance Guide to see how much your health insurance
                  reimburses.
                </p>
              </>
            )}
          </div>
          {/* ----------------------------------------6th----------------------- */}
          <div className="faq_list_card">
            <div className="list_card_top_title">
              <h2 className="faq_reason">
                Do you need a referral from your GP?
              </h2>
              <div className="faq_me" onClick={handlerv5}>
                {fifth ? (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/il6uzHS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/DEr97dS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>

            {fifth && (
              <>
                <div className="fg"></div>
                <p className="faq_reason_ans">
                  No, you can visit an acupunturist without a referral.
                </p>
              </>
            )}
          </div>

          {/* ----------------------------------7th--------------------------------------------- */}
          <div className="faq_list_card">
            <div className="list_card_top_title">
              <h2 className="faq_reason">
                Is acupuncture covered by the annual deductible?
              </h2>
              <div className="faq_me" onClick={handlerv5}>
                {fifth ? (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/il6uzHS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/DEr97dS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>

            {fifth && (
              <>
                <div className="fg"></div>
                <p className="faq_reason_ans">
                  No, acupuncture is reimbursed from the supplementary package.
                </p>
              </>
            )}
          </div>

          {/* ---------------------------------------------8th--------------------------- */}
          <div className="faq_list_card">
            <div className="list_card_top_title">
              <h2 className="faq_reason">
                Can I be treated with acupuncture during pregnancy?
              </h2>
              <div className="faq_me" onClick={handlerv5}>
                {fifth ? (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/il6uzHS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/DEr97dS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>

            {fifth && (
              <>
                <div className="fg"></div>
                <p className="faq_reason_ans">
                  Yes, you can go to an acupuncturist during your pregnancy.
                  Please inform the acupuncturist that you are pregnant.
                </p>
              </>
            )}
          </div>

          {/* ----------------------------------------------------------9th-------------------------------------------------------- */}
          <div className="faq_list_card">
            <div className="list_card_top_title">
              <h2 className="faq_reason">
                Is the practice accessible for the disabled?
              </h2>
              <div className="faq_me" onClick={handlerv5}>
                {fifth ? (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/il6uzHS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/DEr97dS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>

            {fifth && (
              <>
                <div className="fg"></div>
                <p className="faq_reason_ans">
                  Our practice in The Hague is accessible to everyone,
                  regardless of mobility level. We have barrier-free entrances
                  and adapted facilities. If you have specific needs, please let
                  us know for a comfortable experience.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
