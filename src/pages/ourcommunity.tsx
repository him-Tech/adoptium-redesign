import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import ConnectWithOther from "../components/Our-Community/ConnectWithOther"
import HowToSupport from "../components/Our-Community/HowToSupport"
import OurMamber from "../components/Our-Community/OurMamber"
import EventCard from "../components/Our-Community/EventCard"
import EventWapper from "../components/Our-Community/EventWapper"
import LatestNews from "../components/LatestNews"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const ourcommunity = () => {
  return (
    <>
      <Layout>
        <PageHeader
          subtitle="Our Community"
          title="Our Community"
          description="Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem."
          className={"mx-auto max-w-[860px] px-2 w-full"}
        />
        <ConnectWithOther />
        <OurMamber />
        <HowToSupport />
        <EventWapper />
        <div className="h-[1px] my-8 md:mt-14 md:mb-8 w-full bg-[#3E3355]"></div>
        <div className=" md:pb-20">
          <LatestNews
            className={"!py-8 !lg:pt-32 lg:pb-16"}
            title={"Latest news and updates"}
          />
        </div>
      </Layout>
    </>
  )
}

export default ourcommunity
export const Head = () => <Seo title="Our Community" />

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    mostRecentLts {
      version
    }
  }
`
