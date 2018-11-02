import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi Hackathon Friends</h1>
    <p>My name is Ilan and I am very excited to participate in the freeCodeCamp 2018 JAMstack Hackathon at GitHub.</p>
    <p>I have been working in web development for 10+ years and I love playing with new web technologies.

    </p>
    <p>
    "The internet could be a very positive step towards education, organisation and participation in a meaningful society."
    <br/> ~ Noam Chomsky
    </p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
