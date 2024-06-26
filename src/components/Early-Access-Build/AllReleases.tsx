import React from "react"
import AllReleasesHeader from "./AllReleasesHeader"
import AllReleaseCard from "./AllReleaseCard"
import ReleasingSelector from "./ReleasingSelector"

const AllReleases = () => {
  return (
    <div className="max-w-[1264px]  px-6 w-full mx-auto py-8 md:py-20">
      <AllReleasesHeader />
      <ReleasingSelector className={undefined} />
      <AllReleaseCard />
    </div>
  )
}

export default AllReleases
