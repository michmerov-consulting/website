/**
 * 
 */
{
	var submitButtonLabel = document.getElementById("submit-button-label");
	var submitButton = document.getElementById("submit-button");
	function recaptchaReadyOnLoad(){
		return true;
	}
	function enableSubmitAfterRecaptcha(responseToken){
		submitButton.disabled=false;
		return true;
	}
	function disableSubmit(){
		submitButton.disabled = true;
		return true;
	}
}