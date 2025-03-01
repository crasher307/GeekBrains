// Дано четное число n (>0) и символы c1 и c2.
// Написать метод, который вернет строку длины N, которая состоит из чередующихся символов c1 и c2, начиная с c1.
// Пример: c1c2c1…c2 (всего N символов)

package lesson2.work;

public class pr1 extends lib.base {

    public static void main(String[] args) {
        char[] sym = {'h', 'i'};

        String result = createStr(getInt(), sym);
        System.out.println(result + " (всего " + result.length() + " символов)");
    }

    private static String createStr(int num, char[] chars) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < num; i++) {
            result.append(chars[i % 2 == 0 ? 0 : 1]);
        }
        return result.toString();
    }
}
