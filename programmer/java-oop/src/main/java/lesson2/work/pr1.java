package lesson2.work;

import lesson2.Animal;
import lesson2.Cat;
import lesson2.Dog;
import lesson2.HomeCat;

public class pr1 {
    public static void main(String[] args) throws Exception {
        Animal[] animals = {
                new Cat("Васька", 8, "черный"),
                new HomeCat("Барсик", 5, "рыжий"),
                new HomeCat("Василий", 14, "белый", 100),
                new Dog("Мухтар", 12),
        };
        for (Animal a : animals) {
            System.out.printf("\n--- %s %s, %d лет ---\n", a.getType(), a.getName(), a.getAge());
//            a.info();
            a.run(150);
            a.swim(50);
            a.jump();
            a.voice();
        }
    }
}