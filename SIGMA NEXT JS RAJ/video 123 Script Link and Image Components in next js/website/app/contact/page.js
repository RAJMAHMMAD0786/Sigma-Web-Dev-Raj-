import React from 'react'

// Script components are used to give the some message visit the page
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script>
        {`alert("Wecome to contact page");`}
      </Script>
      This is the contact page
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact Facebook - Connect with the world",
  description: "This is contact facebook and we can connect with the world using facebook",
};
