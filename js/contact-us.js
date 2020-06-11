/**
 * 
 */
{
	var submitButtonLabel = document.getElementById("submit-button-label");
	var submitButton = document.getElementById("submit-button");
	document.body.addEventListener("submit", async function(event) {
        event.preventDefault();
        
        const form = event.target;
		const data = new URLSearchParams(new FormData(formElement));
		const result = await fetch(form.action, {
          method: form.method,
          body: data
        })        
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error)); 
		form.innerHtml=result;
      });
	function recaptchaReadyOnLoad(){
		return true;
	}
	function onSubmit(responseToken){
		document.getElementById("contact-form").submit();
		return true;
	}
	function disableSubmit(){
		submitButton.disabled = true;
		return true;
	}
}