package lesson3.work;

import java.util.ArrayList;

public class pr1 {
    private static int start = 2;
    private static int end = 11;
    private static int fold = 1;
    private static int inc = 2;
    private static final ArrayList<Obj> result = new ArrayList<>();

    public static void main(String[] args) {
        check(start, 0, Integer.toString(start));
        System.out.println("Вариаций: " + result.toArray().length);
        result.forEach(o -> System.out.printf("\t%d операций\tИтог: %s\n", o.operations, o.value));
        System.out.println("count: " + checkCount());
    }

    private static void check(int opStart, int opCount, String res) {
        var newStart = new int[]{opStart + fold, opStart * inc};
        var newRes = new String[]{res + " + " + fold, res + " * " + inc};

        if (newStart[0] > end && newStart[1] > end) result.add(new Obj(opCount, res));
        else {
            if (newStart[0] <= end) check(newStart[0], opCount + 1, newRes[0]); // next +
            if (newStart[1] <= end) check(newStart[1], opCount + 1, newRes[1]); // next *
        }
    }

    private static int checkCount() {
        int[] way = new int[end + 1];
        way[start] = 1;
        for (int i = start + fold; i <= end; i++) way[i] = i % inc == 0 ? way[i - fold] + way[i / inc] : way[i - fold];
        return way[end];
    }
}

class Obj {
    public int operations;
    public String value;

    public Obj(int op, String val) {
        this.operations = op;
        this.value = val;
    }
}