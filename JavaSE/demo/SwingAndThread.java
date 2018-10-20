import java.awt.Container;
import java.net.URL;
import java.swing*;

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
        container.setLayout(null);
        URL url = SwingAndThread.class.getResource("/1.gif");
        Icon icon = new ImageIcon(url);
        jl.setIcon(icon);
    }
}