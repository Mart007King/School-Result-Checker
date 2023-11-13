



 function load() {

    var user = document.getElementById('username').value
    var gender = document.getElementById('sex').value

    if (gender.toLowerCase().trim() == 'm') {
      alert('Welcome, Mr '+ user +'. Note that whatever the outcome of the result, We consider you a great student. Keep working. Please click OK to contine.' )
    }else if (gender.toLowerCase().trim() == 'f') {
      alert('Welcome, Miss/Mrs '+ user +'. Note that whatever the outcome of the result, We consider you a great student. Keep working. Please click OK to contine.')
    }
   }


    function gradeCalc(score,display) {

      if (score < 40) {
        grade = 'F' ;
        document.getElementById(display).style= 'border: 2px solid red';
       
        
      } else if (score <= 40 || score < 45) {

        grade = 'E';
        document.getElementById(display).style= 'border: 2px solid orange';
       
        
      } else if (score <= 45 || score < 50) {

        grade = 'D';
        document.getElementById(display).style= 'border: 2px solid yellow';
        

      } else if (score <= 50 || score < 60) {

         grade = 'C';
         document.getElementById(display).style= 'border: 2px solid yellow';

        
      } else if (score <= 60 || score <= 69) {

        grade = 'B';
        document.getElementById(display).style= 'border: 2px solid blue';
         

      } else if (score >= 70) {

        grade = 'A';
        document.getElementById(display).style= 'border: 2px solid green';
    
      }
      document.getElementById(display).value= grade;
      
     }

    

    function last() {

      var stores1= document.getElementById('result1').value
      var stores2= document.getElementById('result2').value
      var stores3= document.getElementById('result3').value
      var stores4= document.getElementById('result4').value
      var stores5= document.getElementById('result5').value

      var store1 = Number(stores1)
      var store2 = Number(stores2)
      var store3 = Number(stores3)
      var store4 = Number(stores4)
      var store5 = Number(stores5)

    

     var total = store1 + store2 + store3 + store4 + store5
     var sum = total/5
     var average = parseInt(sum)

    if (average < 50 ) {
      document.getElementById('final').innerHTML = '<b>TOTAL: </b>'+ total +'<br> <b>AVERAGE: </b>'+ average +'<br> <b><i>REMARKS: Study harder and Better Luck next time..</i></b><span style="font-size:50px"> &#128546 </span>'
    } else if (average > 50) {
      document.getElementById('final').innerHTML = '<b>TOTAL: </b>'+ total +'<br> <b>AVERAGE: </b>'+ average +'<br> <b><i>REMARKS: Congratulations, You have graduated. Keep it Up.</i></b><span style="font-size:50px"> &#128170 </span>'
    }




     
    }
   
