<html>
<head>
    <title>Workshop Registration</title>
  <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f6fc;
        }

        .container {
            width: 400px;
            margin: 40px auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        h2 {
            text-align: center;
        }

        h3 {
            margin-top: 20px;
            color: #333;
        }

        label {
            font-weight: bold;
        }

        input[type="text"],
        input[type="email"],
        input[type="month"],
        input[type="password"],
        select {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            margin-bottom: 15px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        input[type="radio"] {
            margin-right: 5px;
        }

        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

<h2>Workshop Registration</h2>

<form>

    
    <h3>Personal Details</h3>

    <label>Name:</label><br>
    <input type="text" name="name"><br><br>

    <label>Email:</label><br>
    <input type="email" name="email"><br><br>
 <h3>Payment Method</h3>

    <input type="radio" name="payment" value="card"> Credit Card<br>
    <input type="radio" name="payment" value="netbanking"> Net Banking<br><br>

   
    <h4>Credit Card Details</h4>

    <label>Card Number:</label><br>
    <input type="text" name="card_number"><br><br>

    <label>Expiry Date:</label><br>
    <input type="month" name="expiry"><br><br>

    <label>CVV:</label><br>
    <input type="password" name="cvv"><br><br>

    
    <h4>Net Banking Details</h4><label>Select Bank:</label><br>
    <select name="bank">
        <option>State Bank of India</option>
        <option>HDFC Bank</option>
        <option>ICICI Bank</option>
        <option>Axis Bank</option>
    </select><br><br>

    <!-- Submit -->
    <input type="submit" value="Register & Pay">

</form>
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
</body>
</html>











































</body>
</html>
