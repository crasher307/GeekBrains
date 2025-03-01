package lib;

import java.util.Scanner;

public class in {
    private static final Scanner scanner = new Scanner(System.in);

    private static String get() {
        return get("Введите строку");
    }

    private static String get(String message) {
        System.out.print(message + ": ");
        try {
            return scanner.nextLine();
        } catch (Exception e) {
            // TODO добавить лог
            return "";
        }
    }

    public static int getInt() {
        return getInt("Введите число");
    }

    public static int getInt(String message) {
        try {
            return Integer.parseInt(get(message));
        } catch (Exception e) {
            // TODO добавить лог
            return 0;
        }
    }

    public static double getDouble() {
        return getDouble("Введите дробное число");
    }

    public static double getDouble(String message) {
        try {
            return Double.parseDouble(get(message));
        } catch (Exception e) {
            // TODO добавить лог
            return 0;
        }
    }
}