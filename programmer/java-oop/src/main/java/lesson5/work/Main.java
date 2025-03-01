package lesson5.work;

import lombok.*;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Controller.main();
    }
}

/** Data Model : data */
@Data
abstract class User {
    int id;
    String fio;
    Date dateBirth;
    List<Rest> rest;
    @Data
    @AllArgsConstructor
    static class Rest {
        private Date start;
        private Date end;
    }
    public User(int id, String fio, Date dateBirth) {
        this.id = id;
        this.fio = fio;
        this.dateBirth = dateBirth;
        this.rest = new ArrayList<>();
    }
    public void addRest(Date start, Date end) {
        rest.add(new Rest(start, end));
    }
}

class Student extends User {
    int groupId;
    List<Integer> grade;
    public Student(int id, String fio, Date dateBirth) {
        super(id, fio, dateBirth);
    }
    public Student() {
        super(1, "Студент", new Date(2023, 03, 15));
    }
    @Override
    public String toString() {
        return "Student{" +
                "groupId=" + groupId +
                ", grade=" + grade +
                ", id=" + id +
                ", fio='" + fio + '\'' +
                ", dateBirth=" + dateBirth +
                ", rest=" + rest +
                '}';
    }
}

class Teacher extends User {
    int expYears;
    List<Integer> group;
    public Teacher(int id, String fio, Date dateBirth) {
        super(id, fio, dateBirth);
    }
    public Teacher() {
        super(1, "Учитель", new Date(2023, 03, 15));
    }
    @Override
    public String toString() {
        return "Teacher{" +
                "expYears=" + expYears +
                ", group=" + group +
                ", id=" + id +
                ", fio='" + fio + '\'' +
                ", dateBirth=" + dateBirth +
                ", rest=" + rest +
                '}';
    }
}

/** Service Model : service */
interface DataService {
    User create(Student student);
    User create(Teacher teacher);
    List<User> read(List<User> users);
}
class UserService implements DataService {
    @Override
    public User create(Student student) {
        return new Student();
    }
    @Override
    public User create(Teacher teacher) {
        return new Teacher();
    }
    @Override
    public List<User> read(List<User> users) {
        return users;
    }
}

/** View */
class View {
    public String dataView(List<User> users) {
        return users.toString();
    }
}

/** Controller */
class Controller {
    public static void main() {
        UserService userService = new UserService(); // Object controller
        List<User> users = new ArrayList<>();

        users.add(userService.create(new Student()));
        users.add(userService.create(new Teacher()));

        userService.read(users);

        View view = new View();
        System.out.println(view.dataView(users).replace("}, ", "}\n"));
    }
}