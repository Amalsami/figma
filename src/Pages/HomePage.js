import React from 'react'
import SignUpAlert from '../Components/SignUpAlert/SignUpAlert'
import NavBar from '../Components/NavBar/NavBar'
import Header from '../Components/Header/Header'

export default function HomePage() {
    return (
        <div>
            <SignUpAlert />
            <NavBar />
            <Header />
        </div>
    )
}
