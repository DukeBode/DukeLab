import java.util.Scanner;

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

public class TestBook{
    public static void main(String[] args){
        int number=1;
        Scanner sc = new Scanner(System.in);
        Book[] book = new Book[number];
        // book.add("nihoa","hao",2);
        book[0].add(sc.next(),sc.next(),sc.nextInt());
        book[0].display();
    }
}