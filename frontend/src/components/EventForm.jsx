import { Formik, Form, Field } from "formik"
import api from "../helpers/axios"
import { useUser } from "@clerk/clerk-react"
import "./form.css"

export default function EventForm() {
	const { user } = useUser()

	const handleSubmit = async (values) => {
		try {
            console.log({...values, userId: user.id})
			await api.post("/events", { ...values, host_id: user.id })
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div className="form">
			<Formik
				initialValues={{
					event_name: "",
					address: "",
					date_time: "",
                    price: 0,
				}}
				onSubmit={(values) => handleSubmit(values)}
			>
				<Form>
					<Field name="event_name" placeholder="My Event" />
					<Field name="address" placeholder="Location" />
					<Field name="date_time" placeholder="YYYY-MM-DD HH:MM (24 hour)" />
					<Field name="price" placeholder="0" />
					<button className="submitButton" type="submit">Submit</button>
				</Form>
			</Formik>
		</div>
	)
}
