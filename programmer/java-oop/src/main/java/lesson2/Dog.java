package lesson2;

public class Dog extends Animal {
    public Dog(String name, int age) throws Exception {
        super("Собака", name, age, 500, 300);
        this.voice = "Гав! Гав!";
    }
}
