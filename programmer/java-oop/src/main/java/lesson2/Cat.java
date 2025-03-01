package lesson2;

public class Cat extends Animal {
    private final String color;

    public Cat(String name, int age, String color) throws Exception {
        this(name, age, color, 0);
    }

    public Cat(String name, int age, String color, int maxSwimDistance) throws Exception {
        super("Кот", name, age, 200, maxSwimDistance);
        this.voice = "Мявк!";
        this.color = color;
    }

    @Override
    public void info() {
        super.info();
        this.infoView("Цвет", this.color);
    }
}