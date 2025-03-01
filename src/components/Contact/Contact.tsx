import React, { FC, useContext, useEffect, useState } from 'react'
import './Contact.scss'
import { Context } from 'App'
import emailRegexExample from 'helpers/constants/emailRegexExample'
import MobileNavItem from 'components/Navigation/MobileNavItem'

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
	const { controls, isMobile } = useContext(Context)

	const [name, setName] = useState({
		value: '',
		label: 'name',
		required: true,
		requirements: {
			maxLength: 48,
		},
		error: '',
		touched: false,
	})
	const [email, setEmail] = useState({
		value: '',
		label: 'email',
		required: true,
		requirements: { maxLength: 254 },
		error: '',
		touched: false,
	})
	const [subject, setSubject] = useState({
		value: '',
		label: 'subject',
		required: false,
		requirements: {
			maxLength: 64,
		},
		error: '',
		touched: false,
	})
	const [message, setMessage] = useState({
		value: '',
		label: 'message',
		required: true,
		requirements: {
			maxLength: 1000,
		},
		error: '',
		touched: false,
	})

	useEffect(() => {
		if (subject.touched) return

		if (controls.software && controls.music) {
			setSubject((prev) => ({
				...prev,
				value: 'I have an awesome idea for a music app',
			}))
		} else if (controls.software) {
			setSubject((prev) => ({
				...prev,
				value: "I'd like to collaborate on my dream project",
			}))
		} else if (controls.music) {
			setSubject((prev) => ({
				...prev,
				value: 'I have a cool gig for you',
			}))
		} else {
			setSubject((prev) => ({
				...prev,
				value: "I'd like to connect",
			}))
		}
	}, [controls])

	useEffect(() => {
		if (name.touched) checkInputErrors(name.label)
	}, [name.value])
	useEffect(() => {
		if (email.touched) checkInputErrors(email.label)
	}, [email.value])
	useEffect(() => {
		if (subject.touched) checkInputErrors(subject.label)
	}, [subject.value])
	useEffect(() => {
		if (message.touched) checkInputErrors(message.label)
	}, [message.value])

	const canSendForm = () => {
		let hasError = false

		if (name.error) hasError = true
		if (email.error) hasError = true
		if (subject.error) hasError = true
		if (message.error) hasError = true
		if (!name.value) hasError = true
		if (!email.value) hasError = true
		if (!message.value) hasError = true

		return !hasError
	}

	const handleInputBlur = (field: string) => {
		switch (field) {
			case 'name':
				setName((prev) => ({
					...prev,
					touched: true,
				}))
				break
			case 'email':
				setEmail((prev) => ({
					...prev,
					touched: true,
				}))
				break
			case 'subject':
				setSubject((prev) => ({
					...prev,
					touched: true,
				}))
				break
			case 'message':
				setMessage((prev) => ({
					...prev,
					touched: true,
				}))
				break

			default:
				break
		}
	}

	const checkInputErrors = (field: string) => {
		const emailRegex = emailRegexExample

		switch (field) {
			case 'name':
				if (!name.value) {
					setName((prev) => ({
						...prev,
						error: 'Please provide your name',
					}))
				} else if (name.value.length > name.requirements.maxLength) {
					setName((prev) => ({
						...prev,
						error: `Name cannot exceed ${name.requirements.maxLength} characters`,
					}))
				} else {
					setName((prev) => ({
						...prev,
						error: '',
					}))
				}
				break
			case 'email':
				if (!email.value) {
					setEmail((prev) => ({
						...prev,
						error: 'Please provide a good email address at which to reach you',
					}))
				} else if (!emailRegex.test(email.value)) {
					setEmail((prev) => ({
						...prev,
						error:
							'The email address you provided is invalid. Please provide a valid email address',
					}))
				} else if (email.value.length > email.requirements.maxLength) {
					setEmail((prev) => ({
						...prev,
						error: `Email cannot exceed ${name.requirements.maxLength} characters`,
					}))
				} else {
					setEmail((prev) => ({
						...prev,
						error: '',
					}))
				}
				break
			case 'subject':
				if (subject.value.length > subject.requirements.maxLength) {
					setSubject((prev) => ({
						...prev,
						error: `Subject cannot exceed ${subject.requirements.maxLength} characters`,
					}))
				} else {
					setSubject((prev) => ({
						...prev,
						error: '',
					}))
				}
				break
			case 'message':
				if (!message.value) {
					setMessage((prev) => ({
						...prev,
						error: "Let me know why you're contact me",
					}))
				} else if (message.value.length > message.requirements.maxLength) {
					setMessage((prev) => ({
						...prev,
						error: `Message cannot exceed ${message.requirements.maxLength} characters`,
					}))
				} else {
					setMessage((prev) => ({
						...prev,
						error: '',
					}))
				}
				break

			default:
				break
		}
	}

	const onBlur = (label: string) => {
		checkInputErrors(label)
		handleInputBlur(label)
	}

	return (
		<div className='Contact'>
			{isMobile && <MobileNavItem id='contact' label='Contact' />}
			<p className='mb-8'>
				I'd love to hear from you! Just fill out the form below and I will respond
				as soon as I am able.
			</p>
			<form action='https://formsubmit.co/fennerstudios@gmail.com' method='POST'>
				<input type='text' name='_honey' style={{ display: 'none' }} />
				<input type='hidden' name='_captcha' value='false' />
				<input type='hidden' name='_next' value='http://localhost:3000#contact' />
				<div className='input-container'>
					{name.error && <span className='error'>{name.error}</span>}
					<input
						className={`required-input ${name.error && 'error'}`}
						type='text'
						name='name'
						required
						value={name.value}
						onChange={(e) => setName((prev) => ({ ...prev, value: e.target.value }))}
						onBlur={() => onBlur(name.label)}
					/>
					<label>Name</label>
				</div>
				<div className='input-container'>
					{email.error && <span className='error'>{email.error}</span>}
					<input
						className={`required-input ${email.error && 'error'}`}
						type='email'
						name='email'
						required
						value={email.value}
						onChange={(e) => setEmail((prev) => ({ ...prev, value: e.target.value }))}
						onBlur={() => onBlur(email.label)}
					/>
					<label>Email</label>
				</div>
				<div className='input-container'>
					{subject.error && <span className='error'>{subject.error}</span>}
					<input
						type='text'
						name='subject'
						className={`${subject.value && 'required-input '} ${
							subject.error && 'error'
						}`}
						value={subject.value}
						onChange={(e) =>
							setSubject((prev) => ({ ...prev, value: e.target.value }))
						}
						onBlur={() => onBlur(subject.label)}
					/>
					<label>Subject</label>
				</div>
				<div className='input-container'>
					{message.error && <span className='error'>{message.error}</span>}
					<textarea
						className={`required-input ${message.error && 'error'}`}
						name='message'
						rows={10}
						cols={60}
						required
						value={message.value}
						onChange={(e) =>
							setMessage((prev) => ({ ...prev, value: e.target.value }))
						}
						onBlur={() => onBlur(message.label)}
					/>
					<label>Message</label>
				</div>
				<button
					className={
						controls.music && controls.software
							? 'both'
							: controls.software
							? 'software'
							: controls.music
							? 'music'
							: 'neither'
					}
					disabled={!canSendForm()}
				>
					Send
				</button>
			</form>
			<div>
				Mock design created in{' '}
				<a
					href='https://figma.com'
					className='emphasis'
					target='_blank'
					rel='noreferrer'
				>
					Figma
				</a>{' '}
				and developed using{' '}
				<a
					href='https://code.visualstudio.com/'
					className='emphasis'
					target='_blank'
					rel='noreferrer'
				>
					Visual Studio Code
				</a>
				. Built with{' '}
				<a
					href='https://react.dev/'
					className='emphasis'
					target='_blank'
					rel='noreferrer'
				>
					React
				</a>{' '}
				Typescript and{' '}
				<a
					href='https://sass-lang.com/'
					className='emphasis'
					target='_blank'
					rel='noreferrer'
				>
					Sass
				</a>
				, deployed using{' '}
				<a
					href='https://netlify.com'
					className='emphasis'
					target='_blank'
					rel='noreferrer'
				>
					Netlify
				</a>
				.
			</div>
		</div>
	)
}

export default Contact
