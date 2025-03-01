package lesson1.work;

public class Main {
    public static void main(String[] args) {
        var cat = new Cat("Василий", 21, "black");
        var dog = new Dog("Мухтар", 21);
        // по полям
//        cat.name = "Василий";
//        cat.color = "Black";
//        cat.age = 21;
        // инкапсулировали
//        cat.setName("Василий");
//        cat.setColor("Black");
//        cat.setAge(21);

        System.out.println("cat = " + cat);
        cat.info();
        cat.jump();
        cat.voice();
    }
}