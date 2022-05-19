import Heading from "./Heading";

const ContactInfo = ({contact}) => {
    const {id, name, email, address} = contact || {}
    const {street, suite, city, zipcode} = address || {}
    if (!contact) {
        return (
            <Heading tag="h3" text="Empty contact"/>
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