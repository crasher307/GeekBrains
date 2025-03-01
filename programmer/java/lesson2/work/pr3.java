// Напишите метод, который принимает на вход строку (String) и определяет является ли строка палиндромом (возвращает boolean значение).

package lesson2.work;
public class pr3 {
    public static void main(String[] args) {
        String input = "hello world";
//        String input = "helleh";

        System.out.println(isPalindrome(input));
    }

    private static boolean isPalindrome(String st) {
        String st2 = String.valueOf((new StringBuilder(st)).reverse());
        return st.equals(st2);
    }
}

// Ввод с клавиатуры
//    Scanner userInput = new Scanner(System.in);
//// вывести строку с приглашением msg
//        System.out.print(msg);
//                // считать строку
//                String userAnswer = userInput.nextLine()
