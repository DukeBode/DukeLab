public class TestToString extends Object{
    public static void main(String[] args){
        Cat c1=new Cat(1,1,1);
        Cat c2=new Cat(2,2,2);
        Cat c3=c1;
        System.out.println(c1==c2);
        System.out.println(c1==c3);

    }
}
class Cat{
    int color;
    int height,weight;
    public Cat(int color,int height, int weight){
        this.color=color;
        this.height=height;
        this.weight=weight;
    }
    public boolean equals(Object obj){
        if(obj==null)return false;
        // if(obj instant)
        return true;
    }
    void show(){
        System.out.println(2);
    }
}