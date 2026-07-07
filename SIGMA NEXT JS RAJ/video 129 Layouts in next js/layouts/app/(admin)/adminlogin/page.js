import React from 'react'

const page = () => {
  return (
    <div>
      This is the login page of the Application
    </div>
  )
}

export default page


// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: 'AdminLogin: - Connect with friends and the world around you',
  }
}
