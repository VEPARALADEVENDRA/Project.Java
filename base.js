  /*  Question 1:


    let n= prompt("Enter the user name:");
    function question1(userName)

        console.log("Hello,"+ n +" ! Welcome to JavaScript");
    }   
    question1(n);  */


    /*  Question 2:
        function square (num) {
        return num * num;
        }
        console.log(square(5)); */


 /*   Question 3:

    function addNumbers(num1, num2) {
        return num1 + num2;

        
    }
    console.log(addNumbers(5, 10)); */


  /*  Question 4:

    const a = function() {
        return "Hello, World!";

    }
    console.log(a()); */



  /*  Question 5:
    let a=Number(prompt("Enter a"));
    let b=Number(prompt("Enter b"));

    const add=function(a,b)
    {
        return a*b;
    }
    console.log(add(a,b));  */


     /*   Question 6:
        let a=Number(prompt("Enter a"));

    const even=function(a)
    {
        return a%2==0;
    }
    console.log(even(a));   */


     /*   Question 7:
        let num=Number(prompt("Enter the Number"));

    const square=(n)=>n*n;

    console.log(square(num));   */



     /*       Question 8:
        let a=prompt("Enter the text");

        const sayGood=a=>a+" !";

        console.log(sayGood(a));  */


    /*    Question 9:
        let a=Number(prompt("Enter the a"));
        let b=Number(prompt("Enter the b"));

        const subtract=(a,b)=>a-b;

        console.log(subtract(a,b));   */


   /*     Question 10:
            let a=Number(prompt("Enter the a"));
            let b=Number(prompt("Enter the b"));        
            let c=Number(prompt("Enter the c"));
            const multiply=(a,b,c)=>a*b*c;
            console.log(multiply(a,b,c));  */


   /*     Question 11:
        function applyTwice(num,callback){
        console.log(callback(num))
        
    }

    function twice(num){
        return num*2;
    }

    applyTwice(5,twice)    */



    /*    Question 12:
        function applyTwice(num, callback) {
            return callback(callback(num));
        } 
        function square(num) {
            return num * num;
        }
        console.log(applyTwice(5, square));   */


    /*    Question 13:
        function greet(name) {
        return "Hello, " + name + "!";
        }
        let message = greet("Devendra");
        console.log(message);  // Output: Hello, Devendra   */



    /*    Question 14:
        function countDown(n) {
        if (n <= 0) return; // Base case: stop when n is 0 or negative
        console.log(n);
        countDown(n - 1);   // Recursive call with n - 1       
    }   */


       /*         Question 15:
                function factorial(n) {
            if (n === 0 || n === 1) {
                return 1; // Base case: factorial of 0 or 1 is 1
            } else {
                return n * factorial(n - 1); // Recursive case
            }
        }
        console.log(factorial(5));  // Output: 120
        console.log(factorial(0));  // Output: 1     */


        /*        Question 16:

                function createGreeting(name) {
            return function() {
                return "Hello, " + name + "!";
            };
        }
        const greetDevendra = createGreeting("Devendra");
        console.log(greetDevendra());  // Output: Hello, Devendra!    */




        