package lesson7.homework;

import lombok.*;

// @Getter
// @NoArgsConstructor
// final class Calc {
//     /** Data */
//     private CN result = new CN(0);
//
//     /** Constructor */
//     public Calc(Object result) {
//         this.calc('=', result);
//     }
//
//     /** Use */
//     public Calc plus(Object... values) {
//         for (Object value : values) this.calc('+', value);
//         return this;
//     }
//
//     public Calc minus(Object... values) {
//         for (Object value : values) this.calc('-', value);
//         return this;
//     }
//
//     public Calc multi(Object... values) {
//         for (Object value : values) this.calc('*', value);
//         return this;
//     }
//
//     public Calc div(Object... values) {
//         for (Object value : values) this.calc('/', value);
//         return this;
//     }
//
//     /** Service */
//     private void calc(char action, Object value) {
//         CN cn = null;
//         if (value instanceof CN) cn = (CN) value;
//         if (value instanceof Number) cn = new CN(((Number) value).doubleValue());
//         if (cn == null) {
//             Log.add(new Exception("Неверный тип (обработка полученного типа не описана)"));
//             return;
//         }
//         switch (action) {
//             case '=' -> this.result = cn;
//             case '+' -> {
//                 this.result.r += cn.r;
//                 this.result.i += cn.i;
//             }
//             case '-' -> {
//                 this.result.r -= cn.r;
//                 this.result.i -= cn.i;
//             }
//             case '*' -> {
//                 this.result = new CN(
//                         this.result.r * cn.r - this.result.i * cn.i,
//                         this.result.i * cn.r + this.result.r * cn.i
//                 );
//             }
//             case '/' -> {
//                 double v = cn.r * cn.r + cn.i * cn.i;
//                 this.result = new CN(
//                         (this.result.r * cn.r + this.result.i * cn.i) / v,
//                         (this.result.i * cn.r - this.result.r * cn.i) / v
//                 );
//             }
//             default -> {
//                 Log.add(new Exception("Неверное действие (обработка запрашиваемого действия не описана)"));
//                 return;
//             }
//         }
//         // Add to log
//         int cnLength = 16 - cn.toString().length();
//         if (cnLength < 1) cnLength = 1;
//         Log.add(String.format(
//                 "%s%c %s %s",
//                 switch (action) {
//                     default -> "Unexpected ";
//                     case '+' -> "Сложение   ";
//                     case '-' -> "Вычитание  ";
//                     case '*' -> "Умножение  ";
//                     case '/' -> "Деление    ";
//                     case '=' -> "Присвоение ";
//                 },
//                 action,
//                 cn,
//                 action == '=' ? "" : String.format("%" + cnLength + "s = %s", "", this.result.toString())
//         ));
//     }
// }

