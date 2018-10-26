public class Book{
    private String name;
    // 定义一个 getName() 方法
    public String getName(){
        // 局部变量
        int id=0;
        // 调用类中其他方法
        setName("Java");
        // 设置方法返回值
        return id+this.name;
    }
    // 定义一个 setName() 方法
    private void setName(String name){
        // 将参数赋予类中的成员变量
        this.name = name;
    }
    public Book getBook(){
        // 返回 Book 类引用
        return this;
    }
}