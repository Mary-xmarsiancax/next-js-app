import Heading from "./Heading";
import {ContactType} from "../types";
import {FC} from "react"

type ContactInfoProps = {
    contact: ContactType
}
const ContactInfo: FC<ContactInfoProps> = ({contact}) => {
    const {name, email, address} = contact || {}
    const {street, suite, city, zipcode} = address || {}
    if (!contact) {
        return (
            <Heading  text="Empty contact"/>
        )
    }
    return <>
        <Heading text={name}/>
        <div><strong>{email}</strong></div>
        <div>
            <strong>Address: </strong>
            `${street},${suite},${city},${zipcode}`
        </div>
    </>
}
export default ContactInfo