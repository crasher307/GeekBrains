package lesson5.work.example;

import lombok.AllArgsConstructor;
import lombok.Data;

class Outer {
    public static void main(String[] args) {
        @Data
        @AllArgsConstructor
        class Point {
            int x;
            int y;
            int z;
        }

        Point piont = new Point(10, 20, 30);
    }

    class Inner {
        int innerValue;

        public Inner(int innerValue) {
            this.innerValue = innerValue;
        }

        public void innerMethod() {
            System.out.println(innerValue);
            System.out.println(outerValue);
        }
    }

    int outerValue;

    public Outer(int outerValue) {
        this.outerValue = outerValue;
    }

    public void outerMethod() {
//        System.out.println(innerValue);
        System.out.println(outerValue);
    }
}
