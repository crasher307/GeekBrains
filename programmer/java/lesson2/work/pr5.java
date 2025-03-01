// Напишите метод, который вернет содержимое текущей папки в виде массива строк.
// Напишите метод, который запишет массив, возвращенный предыдущим методом в файл.
// Обработайте ошибки с помощью try-catch конструкции. В случае возникновения исключения, оно должно записаться в лог-файл.

package lesson2.work;

import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Objects;

public class pr5 {
    private static final String PATH = "./";
    private static final String FILE_SAVE = "./lesson2/work/pr5_folder.txt";
    private static final String FILE_LOG = "./lesson2/work/pr5.log";

    public static void main(String[] args) {
        var files = viewFolder();
        for (String s : files) System.out.println(s);
        saveToFile(files);
    }

    private static String[] viewFolder() {
        var result = new ArrayList<String>(0);
        try {
            File dir = new File(PATH);
            for (File item : Objects.requireNonNull(dir.listFiles()))
                result.add("[" + (item.isFile() ? "file" : "dir") + "] " + item.getName());
        } catch (Exception e) {
            log(e);
        }
        return result.toArray(String[]::new);
    }

    private static void saveToFile(String[] files) {
        try {
            FileWriter f = new FileWriter(FILE_SAVE);
            for (String item : files) {
                f.append(item).append("\n").flush();
            }
            f.close();
        } catch (Exception e) {
            log(e);
        }
    }

    private static void log(Exception error) {
        try {
            FileWriter f = new FileWriter(FILE_LOG);
            f.append(error.getMessage()).append("\n");
            f.append(Arrays.toString(error.getStackTrace())).append("\n");
            f.flush();
            f.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            System.out.println(Arrays.toString(e.getStackTrace()));
        }
    }
}
