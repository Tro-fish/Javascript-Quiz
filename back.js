            let score = 0;
            //The number of next question
            let question_number = 0;            
            //If the index is 1, it's a question that came out once.
            let question_on =[0,0,0,0,0,0]
            //The number of questions so far.
            let question_count = 0;

            //Return the page number need to open.
            function page_change()
            {
                question_count++;
                //When we get 4 questions, the game is over.
                if(question_count > 4)
                {
                    document.getElementById("result").innerText = "Total Score : " +String(score);
                    return "page_end"
                }
                else
                {
                    while(1)
                    {
                        //Choose random numbers fromo 2 to 7
                        //The selected number is the page number that will come out next.
                        question_number = Math.floor(Math.random()*7)+2;
                        if(question_on[question_number-2] == 0)
                        {
                            break;
                        }
                    }
                    question_on[question_number-2] = 1;
                    let page_num = "page" + String(question_number);

                    //Change the information on the next page.                    
                    let quest_num = "qnum" + String(question_number); //question number
                    let progrss_num = page_num + "_progress"; //progress-bar
                    let score_num = page_num + "_score"; //score
                    console.log(score_num);
                    document.getElementById(quest_num).innerText ="Question "+(question_count)+"/4";
                    document.getElementById(progrss_num).style = ("width : " + String(question_count*25)+"%");
                    document.getElementById(score_num).innerText = score;  
                    //Return the next page number
                    return page_num;
                }
            }            
            //move first page to next page
             function page1()
             {                
                document.getElementById("page1").style ="display : none";   
                //Open next random page               
                document.getElementById(page_change()).style ="display : block";   
             } 
             
             function question1_1()
             {
                 //Answer is wrong -> red
                document.getElementById("question2_1").style = "background : red";                              
                document.getElementById("page2_score").innerText = score;  
                //Page number to move on.
                let page_num = page_change();  
                //Sleep 1 second to show answer color             
                setTimeout(() => document.getElementById("page2").style ="display : none",1000);                  
                //Show next Page
                document.getElementById(page_num).style = "display : block";                   
                
             }
             function question1_2()
             {
                //Answer is right -> green
                document.getElementById("question2_2").style = "background : green";   
                //score + 1                                           
                score++; 
                //score update
                document.getElementById("page2_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page2").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";                                
             } 

             /* Below works with the same algorithm as above. */
             
             function question1_3()
             {
                document.getElementById("question2_3").style = "background : red";                              
                document.getElementById("page2_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page2").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";    
                
             }
             function question1_4()
             {
                document.getElementById("question2_4").style = "background : red";                              
                document.getElementById("page2_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page2").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";                   
             }
             function question2_1()
             {
                document.getElementById("question3_1").style = "background : red";                              
                document.getElementById("page3_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page3").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";      
             }
             function question2_2()
             {
                document.getElementById("question3_2").style = "background : green";  
                score++;                             
                document.getElementById("page3_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page3").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";  
                
             }
             function question2_3()
             {
                document.getElementById("question3_3").style = "background : red";                              
                document.getElementById("page3_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page3").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block"; 
                
             }
             function question2_4()
             {
                document.getElementById("question3_4").style = "background : red";                              
                document.getElementById("page3_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page3").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";   
                
             } 
             
             
             function question3_1()
             {
                document.getElementById("question4_1").style = "background : green";                              
                score++; 
                document.getElementById("page4_score").innerText = score;  
                let page_num = page_change();                
                setTimeout(() => document.getElementById("page4").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";                   
             }
             function question3_2()
             {
                document.getElementById("question4_2").style = "background : red";                              
                document.getElementById("page4_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page4").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";    
                
             }
             function question3_3()
             {
                document.getElementById("question4_3").style = "background : red";                              
                document.getElementById("page4_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page4").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";     
                
             }
             function question3_4()
             {
                document.getElementById("question4_4").style = "background : red";                                             
                document.getElementById("page4_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page4").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";                      
             } 

             function question4_1()
             {
                document.getElementById("question5_1").style = "background : red";                                             
                document.getElementById("page5_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page5").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";     
                
             }
             function question4_2()
             {
                document.getElementById("question5_2").style = "background : green";   
                score++;                            
                document.getElementById("page5_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page5").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";    
                
             }
             function question4_3()
             {
                document.getElementById("question5_3").style = "background : red";                              
                document.getElementById("page5_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page5").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";    
                
             }
             function question4_4()
             {
                document.getElementById("question5_4").style = "background : red";                              
                document.getElementById("page5_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page5").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";                     
             } 


             function question5_1()
             {
                document.getElementById("question6_1").style = "background : red";                                              
                document.getElementById("page6_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page6").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";     
                
             }
             function question5_2()
             {
                document.getElementById("question6_2").style = "background : red";                              
                document.getElementById("page6_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page6").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";    
                
             }
             function question5_3()
             {
                document.getElementById("question6_3").style = "background : green";
                score++;                              
                document.getElementById("page6_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page6").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";    
                
             }
             function question5_4()
             {
                document.getElementById("question6_4").style = "background : red";                              
                document.getElementById("page6_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page6").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";                     
             } 


             function question6_1()
             {
                document.getElementById("question7_1").style = "background : green";     
                score++;                                        
                document.getElementById("page7_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page7").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";     
                
             }
             function question6_2()
             {
                document.getElementById("question7_2").style = "background : red";                              
                document.getElementById("page7_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page7").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";    
                
             }
             function question6_3()
             {
                document.getElementById("question7_3").style = "background : green";
                score++;                              
                document.getElementById("page7_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page7").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";    
                
             }
             function question6_4()
             {
                document.getElementById("question7_4").style = "background : red";                              
                document.getElementById("page7_score").innerText = score;  
                let page_num = page_change();
                setTimeout(() => document.getElementById("page7").style ="display : none",1000);                  
                document.getElementById(page_num).style = "display : block";                     
             } 



             function restart()
             {
                //Clear all variable
                score = 0;
                question_number = 0;
                question_on.fill(0);
                question_count =0;
                let temp = "question";                                                                                 
                 //Clear all color information
                 for(let i=2;i<=7;i++)
                 {                     
                     for(let k=1;k<=4;k++)
                     {
                         let re = temp + String(i)+"_"+String(k)
                        document.getElementById(re).style = "background : #ffffff";
                     }
                 }
                 document.getElementById("page_end").style ="display : none"      
                 let page_num = page_change();
                 document.getElementById(page_num).style = "display : block";

             }