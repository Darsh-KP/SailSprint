import { Formik, Form, Field } from "formik"
import api from "../helpers/axios"

export default function EventForm() {
	const handleSubmit = async (values) => {
		try {
			await api.post("/events/create", { values })
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div>
			<Formik
				initialValues={{
					eventName: "",
					location: "",
					date: "",
					time: "",
				}}
				onSubmit={(values) => handleSubmit(values)}
			>
				<Form>
					<Field name="eventName" placeholder="My Event" />
					<Field name="location" placeholder="Location" />
					<Field name="date" placeholder="YYYY-MM-DD" />
					<Field name="time" placeholder="HH:MM (24 hour)" />
					<button>Submit</button>
				</Form>
			</Formik>
		</div>
	)
}
