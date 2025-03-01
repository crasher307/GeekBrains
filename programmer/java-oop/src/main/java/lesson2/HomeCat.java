package lesson2;

public class HomeCat extends Cat {
    public HomeCat(String name, int age, String color) throws Exception {
        this(name, age, color, 0);
    }

    public HomeCat(String name, int age, String color, int maxSwimDistance) throws Exception {
        super(name, age, color, maxSwimDistance);
        this.type = "Домашний кот";
        this.voice = "[уставился] /ᐠ.ᆽ.ᐟ\\";
        this.jump = "ТыГыДык";
        this.maxRunDistance = 50;
    }
}