document.addEventListener("DOMContentLoaded", () => {
    const DBUsers = [];

    const mainForm = document.getElementById('mainForm');
    const btnSubmit = document.getElementById('btnSubmit');
    const btnResetPass = document.getElementById('btnResetPass');
    const btnReturnForm = document.getElementById('btnReturnForm');

    mainForm.addEventListener("submit", (ev => {
        ev.preventDefault()
    }));

    btnSubmit.addEventListener('click', () => {
        const validationParam = {
            'mailValid': /\w\@\w+\.\w{2,}/,
            'passValid': 8
        };

        const mailInput = document.getElementById("email-input");
        const passInput = document.getElementById("pass-input");

        const valueMail = document.getElementById("email-input").value;
        const valuePass = document.getElementById("pass-input").value;

        const checkMail = validationParam.mailValid.test(valueMail);
        const checkPass = validationParam.passValid <= valuePass.length;

        function removeAnimationMail() {
            mailInput.classList.remove('animation-wrong-data')
        }
        function removeAnimationPass() {
            passInput.classList.remove('animation-wrong-data')
        }

        if (!checkMail) {
            mailInput.classList.add('animation-wrong-data');
            setTimeout(removeAnimationMail, 1000)
        } else if (!checkPass) {
            passInput.classList.add('animation-wrong-data');
            setTimeout(removeAnimationPass, 1000);
            console.log(valueMail)
        } else {
            const userData = {
                'userEmail': valueMail,
                'userPassword': valuePass
            };
            DBUsers.push(userData);
            mailInput.value = '';
            passInput.value = '';
        }
    });

    function toggleForm(){
        const mainFormWrap = document.getElementById('mainFormWrap');
        const forgotPass = document.getElementById('forgotPass');
        mainFormWrap.classList.toggle('inactive')
        forgotPass.classList.toggle('inactive')
    }

    btnResetPass.addEventListener('click', toggleForm)

    btnReturnForm.addEventListener('click', toggleForm)
});

