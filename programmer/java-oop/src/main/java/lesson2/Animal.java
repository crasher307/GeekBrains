package lesson2;

import lombok.Data;

@Data
public abstract class Animal {
    protected String type; // Тип животного
    protected String name; // Имя
    protected int age; // Возраст
    protected int maxRunDistance; // Макс. дист. бега
    protected int maxSwimDistance; // Макс. дист. плавания
    protected String voice = "[тишина]"; // Издаваемый звук
    protected String jump = "[прыгает]"; // Прыжок
    static int animalCount; // Кол-во животных

    public Animal(String type, String name, int age, int maxRunDistance, int maxSwimDistance) throws Exception {
        this.type = type;
        this.name = name;
        this.setAge(age);
        this.maxRunDistance = maxRunDistance;
        this.maxSwimDistance = maxSwimDistance;
        animalCount++;
    }

    public void setAge(int age) throws Exception {
        if (!(age > 0 && age < 30)) throw new Exception("Введен некорректный возраст");
        this.age = age;
    }

    public void info() {
        infoView("Тип", this.type);
        infoView("Макс. дистанция бега", this.validate(this.maxRunDistance, "Не бегает"));
        infoView("Макс. дистанция плавания", this.validate(this.maxSwimDistance, "Не умеет плавать"));
        infoView("Имя", this.name);
        infoView("Возраст", this.age);
    }

    protected void infoView(String name, Object value) {
        System.out.printf("%s: %s\n", name, value);
    }

    protected Object validate(int value, String error) {
        return value > 0 ? value : error;
    }

    public void voice() {
        System.out.printf("... %s ...\n", this.voice);
    }

    public void jump() {
        System.out.printf("... %s ...\n", this.jump);
    }

    public void run(int distance) {
        if (this.maxRunDistance <= 0) {
            System.out.printf("%s не бегает\n", this.name);
        } else {
            System.out.printf(
                    "%s %sможет пробежать %d метров\n",
                    this.name,
                    distance <= this.maxRunDistance ? "" : "не ",
                    distance
            );
        }
    }

    public void swim(int distance) {
        if (this.maxSwimDistance <= 0) {
            System.out.printf("%s не умеет плавать\n", this.name);
        } else {
            System.out.printf(
                    "%s %sможет проплыть %d метров\n",
                    this.name,
                    distance <= this.maxRunDistance ? "" : "не ",
                    distance
            );
        }
    }
}
