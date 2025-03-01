package lesson4.work;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
public class Main {
    static Random rnd = new Random();
    public static void main(String[] args) {
//        pr1();
//        pr2();
        pr3();
//        pr4();
    }
    public static void pr1() {
        SimpleBox mySB1 = new SimpleBox(10);
        SimpleBox mySB2 = new SimpleBox(20);
        mySB2.setMyObject("20");
        if (mySB1.getMyObject() instanceof Integer && mySB2.getMyObject() instanceof Integer) {
            int sum = (Integer) mySB1.getMyObject() + (Integer) mySB2.getMyObject();
            System.out.println(sum);
        } else {
            System.out.println("Error");
        }

        GenBox<String> strGenBox = new GenBox<>();
        GenBox<Integer> intGenBox1 = new GenBox<>(10);
        GenBox<Integer> intGenBox2 = new GenBox<>(20);
//        intGenBox2.setObj("java-test");
        int sum = intGenBox1.getObj() + intGenBox2.getObj();
        System.out.println("sum = " + sum);
    }
    public static void pr2() {
        BoxWithNumber<Integer> bwn1 = new BoxWithNumber<>(1, 2, 3, 4, 5);
        BoxWithNumber<Integer> bwn2 = new BoxWithNumber<>(2, 4, 6, 8, 10);
//        BoxWithNumber<String> bwn3 = new BoxWithNumber<>("test", "test2");
        BoxWithNumber<Double> bwn4 = new BoxWithNumber<>(1.0, 2.0, 3.0, 4.0, 5.0);

        System.out.println(bwn1.average());
        System.out.println(bwn2.average());

        System.out.println(bwn1.compareAverage(bwn2));
        System.out.println(bwn1.compareAverage(bwn4));
    }
    public static void pr3() {
        System.out.println(Calc.sum(new ArrayList<>(List.of(1, 2, 3))));
        System.out.println(Calc.sum(new ArrayList<>(List.of(1.0, 2.4, 3.5))));

    }
    public static void pr4() {
        ArrayList<Employee> employeeArrayList = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            employeeArrayList.add(new Employee("FIO - " + i, rnd.nextDouble(), "java"));
        }

        LRUCache<Employee> lru = new LRUCache<>(5);
        for (Employee employee : employeeArrayList) {
            System.out.println("EL: " + employee);
            lru.addElement(employee);
        }

        System.out.println("-----------------------");

        for (Employee employee : lru.getAllElement()) {
            System.out.println("Cache: " + employee);
        }

        System.out.println("-----------------------");
        lru.addElement(new Employee("FIO - TEST", rnd.nextDouble(), "java"));

        for (Employee employee : lru.getAllElement()) {
            System.out.println("Cache: " + employee);
        }

        System.out.println("-----------------------");
        System.out.println(lru.getElement(3));
    }
}

