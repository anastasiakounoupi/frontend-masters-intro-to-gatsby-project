import * as React from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components/seo.js';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About this Site"
        description="More information about this site."
      />
      <main>
        <h1>About Page</h1>
        <Link to="/">Back to Home</Link>
      </main>
    </>
  )
}