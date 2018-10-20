// 指定继承 Thread 类
public class ThreadTest extends Thread{
    private int count = 10;
    // 重写 run 方法
    public void run(){
        while(true){
            // 打印 count 变量
            System.out.print(count+" ");
            // 使 count 变量自减，当自减为 0 时，退出循环
            if(--count==0){
                return;
            }
        }
    }
    public static void main(String[] args){
        new ThreadTest().start();
        new ThreadTest().start();
    }
}
