import Markdown from "@app/common/components/Markdown";
import Header from "@app/ondrej-sika.cz/components/Header";
import TextArea from "@app/ondrej-sika.cz/components/TextArea";
import TwoCol from "@app/ondrej-sika.cz/components/TwoCol";
import References from "@app/ondrej-sika.cz/components/References";
import Price from "@app/ondrej-sika.cz/components/Price";
import Form from "@app/ondrej-sika.cz/components/Form";
import "@app/course-landing/components/TwitterRecommendations";
import Translate from "@app/common/components/Translate";

import Head from "next/head";
import TwitterRecommendations from "@app/course-landing/components/TwitterRecommendations";

export default props => (
  <div>
    <Head>
      <title>{props.course_title} - Ondrej Sika</title>
    </Head>
    <Header
      websiteHeader={props.course_title}
      inquiryBtn={
        <Translate
          lang={props.lang}
          cs="Nezávazně poptat školení"
          en="Ask for a training"
        />
      }
      logo={props.logo}
    ></Header>
    <div className="container course-page">
      {props.children}
      <Markdown source={props.description} />
      <TwoCol
        col1={<Markdown source={props.col1} />}
        col2={<Markdown source={props.col2} />}
      />
    </div>
    {(() => {
      if (props.recommendations)
        return <References ids={props.recommendations} lang={props.lang} />;
    })()}
    <div className="container mb-4 mt-4">
      {(() => {
        if (props.twitter_recommendations)
          return (
            <>
              <h3>Ohlasy z Twitteru</h3>
              <TwitterRecommendations ids={props.twitter_recommendations} />
            </>
          );
      })()}
    </div>
    <Price
      PriceHeader={
        <Translate lang={props.lang} cs="Cena za školení" en="Price" />
      }
      PriceBtn={
        <Translate
          lang={props.lang}
          cs="Nezávazně poptat školení"
          en="Request Training"
        />
      }
    >
      <Translate
        lang={props.lang}
        cs="Otevřený termín (self funded)"
        en="Public session (self funded)"
      />
      : {props.price_self_funded}{" "}
      <Translate lang={props.lang} cs="bez DPH" en="excl. VAT" />
      <br />
      <Translate
        lang={props.lang}
        cs="Otevřený termín (company funded)"
        en="Public session (company funded)"
      />
      : {props.price_company_funded}{" "}
      <Translate lang={props.lang} cs="bez DPH" en="excl. VAT" />
      <br />
      <Translate
        lang={props.lang}
        cs="Firemní školení (ve firmě)"
        en="Company traning (in-house)"
      />
      : {props.price_in_house}{" "}
      <Translate lang={props.lang} cs="bez DPH" en="excl. VAT" />
    </Price>
    <div className="container">
      <TextArea
        TextHeader={
          <Translate
            lang={props.lang}
            cs="Poptávka firemního školení"
            en="Request in-house Training"
          />
        }
        TextParagraph={
          <Translate
            lang={props.lang}
            cs="Pole označené * jsou povinné."
            en="Fields marked * as required."
          />
        }
      >
        <Form
          course={props.course_title}
          FormName={<Translate lang={props.lang} cs="Jméno *" en="Name *" />}
          FromNamePlaceholder="Anton Hrabiš"
          FormCompany={
            <Translate lang={props.lang} cs="Společnost" en="Company" />
          }
          FormCompanyPlaceholder="Drůbežárny"
          FormEmail={<Translate lang={props.lang} cs="Email *" en="Email * " />}
          FormEmailPlaceholder="anton@hrabis.cz"
          FormPhone={<Translate lang={props.lang} cs="Telefon *" en="Phone" />}
          FormPhonePlaceholder="+420111222333"
          FormSent={<Translate lang={props.lang} cs="Odeslat" en="Send" />}
        />
      </TextArea>
    </div>
  </div>
);