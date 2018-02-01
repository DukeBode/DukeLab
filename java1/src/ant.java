import javax.swing.*;
import java.awt.*;

import static javax.swing.JFrame.*;

public class ant {
    public static void main(String[] args){
        JFrame jFrame = new JFrame("Time");
        jFrame.setSize(1000,800);
        jFrame.setVisible(true);
        MyPanel myPanel = new MyPanel();
        jFrame.addKeyListener(myPanel);
        Thread t = new Thread(myPanel);
        t.start();
        //设置背景色
        myPanel.setBackground(Color.blue);
        //将画布粘到窗体中
        jFrame.add(myPanel);
        //设置默认关闭操作 退出并关闭程序
        jFrame.setDefaultCloseOperation(EXIT_ON_CLOSE);
    }
}