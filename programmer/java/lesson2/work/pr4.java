// Напишите метод, который составит строку, состоящую из 100 повторений слова TEST и метод, который запишет эту строку в простой текстовый файл, обработайте исключения.

package lesson2.work;
public class pr4 {
    public static void main(String[] args) {
        var st = createStr("TEST", 100);
        try {
            //
        } catch (Exception e) {
            //
        }
    }

    private static String createStr(String st, int count) {
        return String.valueOf(st).repeat(Math.max(0, count));
    }
}
