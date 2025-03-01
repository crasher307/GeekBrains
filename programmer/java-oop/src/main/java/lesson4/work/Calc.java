package lesson4.work;

import java.util.List;

class Calc {
    public static Integer sum(List<? extends Number> items) {
        double sum = 0;
        for (Number item : items) sum += item.doubleValue();
        return (int) Math.ceil(sum);
    }
}
