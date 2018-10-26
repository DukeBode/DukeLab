import java.awt.*;
import javax.swing.*;
public class Example1 extends JFrame{
    public void CreateJFame(String title){
        JFrame jf = new JFrame(title);
        Container container = jf.getContentPane();
        JLabel jl = new JLabel("JFrame´°Ìå");
        jl.setHorizontalAlignment(SwingConstants.CENTER);
        container.add(jl);
        container.setBackground(Color.BLUE);
        jf.setVisible(true);
        jf.setSize(200,150);
    }
    public static void main(String[] args){
        new Example1().CreateJFame("hello");
    }
}