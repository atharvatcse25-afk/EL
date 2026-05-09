<script>
    // Get elements
    const paymentRadios = document.getElementsByName("payment");
    const cardSection = document.querySelector("h4:nth-of-type(1)").nextElementSibling.parentElement;
    const netBankingSection = document.querySelector("h4:nth-of-type(2)").nextElementSibling.parentElement;

    const form = document.querySelector("form");

    // Initially hide both sections
    function hideAll() {
        document.querySelectorAll("h4").forEach(h => h.style.display = "none");
        document.querySelectorAll("h4 + label, h4 + label + input, h4 + label + select")
            .forEach(el => el.style.display = "none");
    }

    hideAll();

    // Show based on selection
    paymentRadios.forEach(radio => {
        radio.addEventListener("change", function () {

            // Hide all first
            document.querySelectorAll("input[name='card_number'], input[name='expiry'], input[name='cvv']")
                .forEach(el => el.parentElement.style.display = "none");

            document.querySelector("select[name='bank']").parentElement.style.display = "none";

            if (this.value === "card") {
                document.querySelectorAll("input[name='card_number'], input[name='expiry'], input[name='cvv']")
                    .forEach(el => el.parentElement.style.display = "block");
            } else if (this.value === "netbanking") {
                document.querySelector("select[name='bank']").parentElement.style.display = "block";
            }
        });
    });

    // Form validation
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.querySelector("input[name='name']").value.trim();
        let email = document.querySelector("input[name='email']").value.trim();
        let payment = document.querySelector("input[name='payment']:checked");

        if (name === "" || email === "") {
            alert("Please fill all personal details!");
            return;
        }

        if (!payment) {
            alert("Please select a payment method!");
            return;
        }

        if (payment.value === "card") {
            let card = document.querySelector("input[name='card_number']").value.trim();
            let cvv = document.querySelector("input[name='cvv']").value.trim();

            if (card.length < 12) {
                alert("Enter valid card number!");
                return;
            }

            if (cvv.length !== 3) {
                alert("CVV must be 3 digits!");
                return;
            }
        }

        // Success message
        alert("🎉 Registration Successful!");
        form.reset();
    });
</script>
