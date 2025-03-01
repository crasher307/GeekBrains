// Напишите метод, который сжимает строку.
// Пример: вход aaaabbbcdd.

package lesson2.work;

public class pr2 {
    public static void main(String[] args) {
        String input = "aaaabbbcdd";

        System.out.println(compress(input));
    }

    private static String compress(String st) {
        var result = new StringBuilder();
        char[] chars = st.toCharArray();
        int i = 0;
        char ch = 0;
        int count = 0;
        do {
            // TODO доделать
            if (ch != chars[i]) {
                count = 0;
                ch = chars[i];
            }
            i++;
            count++;
        } while (i <= chars.length);
//        for (int i = 0, count = 0; i < chars.length; i++, count++) {
//            if (chars[i] != ch) {
//                if (i != 0) result.append(ch).append(count);
//                count = 0;
//                ch = chars[i];
//            }
//        }
        return result.toString();


//        char[] chars = st.toCharArray();
//        int count = 1;
//        StringBuilder result = (new StringBuilder()).append(chars[0]);
//        for (int i = 1; i < st.length(); i++) {
//            if (chars[i] == chars[i - 1])
//                count++;
//            else {
//                result.append(count).append(chars[i]);
//                count = 1;
//            }
//        }
//        result.append(count);
//        return result.toString();
    }
}
