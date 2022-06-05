import './Kyc.css'

import { useEffect } from 'react'

export const Kyc = () => {

    useEffect(() => {
        loadBlockpassWidget()
    }, [])

    const loadBlockpassWidget = () => {
        const blockpass = new window.BlockpassKYCConnect(
            'kycsupport_72ba7', // service client_id from the admin console
            {
                refId: "asdasdsds",// assign the local user_id of the connected user
            }
        )

        blockpass.startKYCConnect()

        blockpass.on('KYCConnectSuccess', () => {
            //add code that will trigger when data have been sent.
        })
    }


    return (
        <div className="main__button">
            <button id="blockpass-kyc-connect">
                Click to verify your KYC
            </button>
        </div>
    )

}