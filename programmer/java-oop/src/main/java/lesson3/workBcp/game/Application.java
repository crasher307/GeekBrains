package lesson3.workBcp.game;

import java.util.Scanner;

public class Application {
    public static void main(String[] args) {
        System.out.println("1-цифры");
        System.out.println("2-буквы EN");
        System.out.println("3-буквы RU");
        Scanner in=new Scanner(System.in);
        System.out.println("Выберите игру");
        int num=in.nextInt();
        Game game = null;
        switch (num){
            case 1:game=new NumberGame();
                break;
//            case 2:game=new WordGame();
//                break;
//            case 3:game=new WordRussianGame();
//                break;
            default:
                System.out.println("такой игры еще не существует");
        }
        game.start(4,2);
        while(game.getGameStatus().equals(GameStatus.START)){
            System.out.println("ваш ход");
            String answer=in.next();
            Answer answerGame=game.inputAnswer(answer);
            System.out.println(String.format("Найдено %d коров и %d быков",answerGame.getCows(),answerGame.getBulls()));
        }
        System.out.println(game.getGameStatus());
    }
}
