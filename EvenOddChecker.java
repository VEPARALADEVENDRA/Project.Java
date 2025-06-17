// Create a function to find whether the number passed to the function is even or odd.

public class EvenOddChecker {
    public static String checkEvenOdd(int number) {
        if (number % 2 == 0) {
            return "Even";
        } else {
            return "Odd";
        }
    }
    public static void main(String[] args) {
        System.out.println(checkEvenOdd(10)); 
        System.out.println(checkEvenOdd(7));  
    }
}

