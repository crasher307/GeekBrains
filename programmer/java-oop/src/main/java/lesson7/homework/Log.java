package lesson7.homework;

import lib.Console;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import static java.lang.Math.round;

// final class Log {
//     /** Static */
//     private static final List<Log> data = new ArrayList<>();
//     private static String getLine(String name) {
//         int length = 77;
//         if (name != null) {
//             name = "#[#" + name + "#]#";
//             length -= name.length();
//         }
//
//         return String.format("---%s%" + length + "s", name != null ? name : "", "")
//                 .replace(" ", "-")
//                 .replace("#", " ");
//     }
//     public static String get() {
//         StringBuilder response = new StringBuilder();
//         response.append(getLine("Log")).append("\n");
//         for (Log log : data) response.append(log).append("\n");
//         response.append(getLine(null));
//         return response.toString();
//     }
//     public static void add(String message) {
//         data.add(new Log(message));
//     }
//     public static void add(Throwable err) {
//         // Console.out.err();
//         data.add(new Log(err.getMessage()));
//     }
//     /** Object */
//     private final String dateTime;
//     private final String message;
//     private final String trace = null;
//     public Log(Object message) {
//         this.dateTime = String.format("%s %s", LocalDate.now(), LocalTime.now().toString().substring(0, 12));
//         if (message instanceof Throwable) {
//             this.message = ((Throwable) message).getMessage();
//         } else {
//             this.message = String.valueOf(message);
//         }
//     }
//     @Override
//     public String toString() {
//         return String.format("[%s] %s", this.dateTime, this.message);
//     }
// }
