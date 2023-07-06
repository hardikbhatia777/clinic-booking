import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
const Achivements = () => {
  return (
    <div className= "bg-[#FFFFFF]">
        <Navbar/>
        <div className="mx-10 flex flex-wrap my-0 p-3 bg-transparent">
            <Card title="Cardiologist" desc="Leading professional in the healthcare industry with more than 20 years of experience" author="Dr. Suresh" img="https://as2.ftcdn.net/v2/jpg/02/24/86/95/1000_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"/>
            <Card title="Dentist" desc="Practicing dentistry since 2001" author="Dr. Rahul" img="https://as2.ftcdn.net/v2/jpg/01/15/85/23/1000_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg"/>
            <Card title="Dermatologist" desc="Award winning dermatology practitioner" author="Dr. Adam" img="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            <Card title="Physician" desc="HAN BHAI PHYSICIAN HU" author="Dr. Smith" img="https://www.shutterstock.com/image-photo/headshot-portrait-happy-ginger-girl-600w-623804987.jpg"/>
        </div>

    </div>
  )
}

export default Achivements