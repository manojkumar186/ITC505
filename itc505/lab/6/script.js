document.getElementById('tellMeBtn').addEventListener('click', function () {
    const dobInput = document.getElementById('dobInput').value;
    const selectedDate = new Date(dobInput);

    // Check if a valid date is selected
    if (isNaN(selectedDate.getTime())) {
        document.getElementById('result').innerText = 'Please enter a valid date.';
    } else {
        const year = selectedDate.getFullYear();

        let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

        if (isLeapYear) {
            document.getElementById('result').innerText = `Hurray!! You are born in a leap year ${year}!`;
        } else {
            document.getElementById('result').innerText = `${year} is not a leap year.`;
        }
    }
});