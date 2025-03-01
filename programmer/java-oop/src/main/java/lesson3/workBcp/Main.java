package lesson3.workBcp;

import lesson3.workBcp.human.Bicycle;
import lesson3.workBcp.human.Human;
import lesson3.workBcp.human.Roliki;
import lesson3.workBcp.human.Transport;

public class Main {
    public static void main(String[] args) {
        Human human = new Human();
        Bicycle bicycle = new Bicycle();
        human.stop();
        human.drive(bicycle);
        human.stop();
        Roliki roliki=new Roliki();
        human.drive(roliki);
        Transport transport = new Bicycle();
    }
}