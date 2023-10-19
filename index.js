function palindrome(str) {
    let pal;
    for (let i = 0; i < str.length; i++) {
      pal = str.split("");
    }
    let palOne = pal
      .join("")
      .toLowerCase()
      .match(/[a-zA-Z0-9]/g);
    str = palOne.join("");
    let strReverse = palOne.reverse().join("");
    console.log(strReverse, str);
  
    if (str == strReverse) {
      return true;
    } else str !== strReverse;
    return false;
  }
  
  const form = document.getElementById("palindromeForm");
  const resultDiv = document.getElementById("result");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const word = document.getElementById("wordInput").value;
  
    if (palindrome(word)) {
      resultDiv.innerText = "Bravo !";
    } else {
      resultDiv.innerText = "Ce n'est pas un palindrome.";
    }
  });
  
  palindrome("not a palindrome");
  
  export default palindrome;
  