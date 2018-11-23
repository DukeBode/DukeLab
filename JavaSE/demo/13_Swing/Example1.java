import java.awt.*;
import java.awt.event.*;

import javax.swing.*;
public class Example1 extends JFrame{
    int number=0;
    private void add(){
        number=number+1;
    }
    public void CreateJFame(String title){
        JFrame jf = new JFrame(title);
        Container container = jf.getContentPane();
        // JLabel jl = new JLabel("JFrame´°Ìå");
        // jl.setHorizontalAlignment(SwingConstants.CENTER);
        // container.add(jl);
        JButton button = new JButton("button");
        button.setText("0");
        button.addActionListener(new ActionListener(){
        
            @Override
            public void actionPerformed(ActionEvent e) {
                add();
                button.setText(number+"");
                
            }
        });
        container.add(button);

        // container.setBackground(Color.BLUE);
        jf.setVisible(true);
        jf.setSize(200,150);
    }
    public static void main(String[] args){
        new Example1().CreateJFame("hello");
    }
}