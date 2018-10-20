import java.awt.Container;
import java.net.URL;
import javax.swing.*;

public class SwingAndThread extends JFrame{
    // 声明 JLabel 对象
    private JLabel jl = new JLabel();
    // 声明线程对象
    private static Thread t;
    // 声明计数变量
    private int count = 0;
    // 声明容器
    private Container container = getContentPane();

    public SwingAndThread(){
        // 绝对定窗体大小与位置
        setBounds(300,200,250,100);
        // 使窗体不使用任何布局管理器
        container.setLayout(null);
        // 获取图片的 URL
        URL url = SwingAndThread.class.getResource("/1.gif");
        // 实例化一个 Icon
        Icon icon = new ImageIcon(url);
        // 将图标放置在标签中
        jl.setIcon(icon);
        // 设置图片在标签的最左方
        jl.setHorizontalAlignment(SwingConstants.LEFT);
        // 设置标签的位置大小
        jl.setBounds(10,10,200,50);
        jl.setOpaque(true);
        // 定义匿名内部类，该类实现 Runnable 接口
        t = new Thread(new Runnable(){
            // 重写 run() 方法
            public void run(){
                // 设置循环条件
                while(count<=200){
                    // 将标签的横坐标用变量表示
                    jl.setBounds(count,10,200,50);
                    try{
                        // 使线程休眠 1000 毫秒
                        Thread.sleep(1000);
                    }catch(Exception e){
                        e.printStackTrace();
                    }
                    // 使横坐标每次增加4
                    count += 5;
                    if(count==200){
                        // 当图标到达标签的最右边时，使其回到标签最左边
                        count = 10;
                    }
                }
            }
        });
        // 启动线程
        t.start();
        // 将标签添加到容器中
        container.add(jl);
        // 使窗体可见
        setVisible(true);
        // 设置窗体的关闭方式
        setDefaultCloseOperation(WindowConstants.DISPOSE_ON_CLOSE);
    }
    public static void main(String[] args){
        // 实例化一个 SwingAndThread 对象
        new SwingAndThread();
    }
}