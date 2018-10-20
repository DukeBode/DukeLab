import java.util.Scanner;

public class TestBook{
    public static void main(String[] args){
        int number=1;
        Scanner sc = new Scanner(System.in);
        Book[] book = new Book[number];
        // book[0].add("nihoa","hao",2);
        book[0].add(sc.next(),sc.next(),sc.nextDouble());
        book[0].display();
    }
}

class Book{
    String author,name;
    double price;

    void add(String author,String name,double price){
        this.author=author;
        this.name=name;
        this.price=price;
    }

    void display(){
        System.out.println(author+"\t"+name+"\t"+price);
    }

}

