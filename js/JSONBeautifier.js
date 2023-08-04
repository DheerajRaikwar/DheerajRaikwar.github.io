function beautifyJSON(jsonString) {
    try {
      const parsedJSON = JSON.parse(jsonString);
      return JSON.stringify(parsedJSON, null, 2);
    } catch (error) {
      return "Invalid JSON data!";
    }
  }
  
  function handleBeautify() {
    const input = document.getElementById("jsonInput").value;
    const beautifiedJSON = beautifyJSON(input);
    document.getElementById("beautifiedJSON").innerText = beautifiedJSON;
  }

  function copyToClipboard() {
    const beautifiedJSON = document.getElementById("beautifiedJSON").innerText;
    const tempInput = document.createElement("textarea");
    tempInput.value = beautifiedJSON;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showCopyMessage();
  }
  
  function showCopyMessage() {
    const messageDiv = document.getElementById("copyMessage");
    messageDiv.innerText = "Copied to clipboard!";
    setTimeout(() => {
      messageDiv.innerText = "";
    }, 1500);
  }