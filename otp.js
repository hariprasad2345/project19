let generateOTP = () => {
 
    const otp = Math.floor(1000 + Math.random() * 9000);

        document.getElementById("otpDisplay").innerText = `${otp}`;
  };
  
  
  document.getElementById("generateBtn").addEventListener("click", generateOTP);
  window.addEventListener("load", generateOTP);