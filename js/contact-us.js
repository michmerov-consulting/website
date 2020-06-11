/**
 * 
 */
{
	var submitButtonLabel = document.getElementById("submit-button-label");
	var submitButton = document.getElementById("submit-button");
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