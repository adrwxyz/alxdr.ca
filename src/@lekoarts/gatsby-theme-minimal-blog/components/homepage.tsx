import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"
import React from "react"

export default () => {
  return (
    <Layout>
      <Hero />
      <List sx={{ variant: `section_bottom` }}>
        <Bottom />
      </List>
    </Layout>
  )
}
