const main = () => {
	const formHtmlEl = document.getElementById('submit'),
		inputHtmlEl = document.getElementById('inputForm')
	
	
	const sendMessageBot = async () => {
			const TOKEN = '',
				CHAT_ID = '',
				URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
	
			await fetch(URI_API, {
				headers: {
					'Content-Type': 'application/json'
				},
				method: "post",
				body: JSON.stringify({chat_id: CHAT_ID, text: inputHtmlEl.textContent})
			})
			
		 
	
			
		}

	const submitEvent = (e) => {
		e.preventDefault()
		sendMessageBot()
	}

	formHtmlEl.addEventListener('submit', submitEvent)


}


document.addEventListener('DOMContentLoaded', main)  