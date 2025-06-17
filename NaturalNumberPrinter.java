// Create a function to print n natural numbers. Where n is the natural number and it should be passed as an argument to the function.

public class NaturalNumberPrinter {
    public static void printNaturalNumbers(int n) {
        for (int i = 1; i <= n; i++) {
            System.out.print(i + " ");
        }
    }
    public static void main(String[] args) {
        printNaturalNumbers(10); 
    }
}