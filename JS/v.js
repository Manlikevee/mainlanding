
        function toggleText() {
  
            // Get all the elements from the page
            var points = 
                document.getElementById("points");
  
            var showMoreText =
                document.getElementById("moreText");
  
            var buttonText =
                document.getElementById("textButton");
  
            // If the display property of the dots 
            // to be displayed is already set to 
            // 'none' (that is hidden) then this 
            // section of code triggers
            if (points.style.display === "none") {
  
                // Hide the text between the span
                // elements
                showMoreText.style.display = "none";
  
                // Show the dots after the text
                points.style.display = "inline";
  
                // Change the text on button to 
                // 'Show More'
                buttonText.innerHTML = "Show More";
            }
  
            // If the hidden portion is revealed,
            // we will change it back to be hidden
            else {
  
                // Show the text between the
                // span elements
                showMoreText.style.display = "inline";
  
                // Hide the dots after the text
                points.style.display = "none";
  
                // Change the text on button
                // to 'Show Less'
                buttonText.innerHTML = "Show Less";
            }
        }


        function toggleText2() {
  
            // Get all the elements from the page
            var points = 
                document.getElementById("points2");
          
            var showMoreText =
                document.getElementById("moreText2");
          
            var buttonText =
                document.getElementById("textButton2");
          
            // If the display property of the dots 
            // to be displayed is already set to 
            // 'none' (that is hidden) then this 
            // section of code triggers
            if (points2.style.display === "none") {
          
                // Hide the text between the span
                // elements
                showMoreText.style.display = "none";
          
                // Show the dots after the text
                points2.style.display = "inline";
          
                // Change the text on button to 
                // 'Show More'
                buttonText2.innerHTML = "Show More";
            }
          
            // If the hidden portion is revealed,
            // we will change it back to be hidden
            else {
          
                // Show the text between the
                // span elements
                showMoreText.style.display = "inline";
          
                // Hide the dots after the text
                points2.style.display = "none";
          
                // Change the text on button
                // to 'Show Less'
                buttonText2.innerHTML = "Show Less";
            }
          }  