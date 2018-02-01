package com.company;

import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class MyPanel extends JPanel implements KeyListener, Runnable {
    double degree=0;
    boolean ismove=false;
    int x0=500;
    int y0=400;
    //泡泡位置
    int[] pox = new int[50];
    int[] poy = new int[50];
    int[] posize = new int[50];
    public MyPanel() {
        // TODO 自动生成的构造函数存根
        System.out.println("我是构造方法");
        for(int i = 0;i < 50; i++) {
            /*
             * Math.random()只是一个产生随机数的方式
             * 产生的0~1之间的随机小数
             * Math.random()*1720相当于产生0-1720之间的数
             * (int)(Math.random()*1720)将小数强制转化为整数
             */
            pox[i]=(int)(Math.random()*2000);
            poy[i]=(int)(Math.random()*250);
            posize[i]=(int)(Math.random()*100);
            System.out.println("随机生成的泡泡的x："+pox[i]);
        }
    }
    @Override
    public void paint(Graphics g) {
        // TODO 自动生成的方法存根
        super.paint(g);
        g.setColor(Color.getHSBColor(169,40,60));
        g.fillOval(-500, -500, 2000, 2000);
        g.setColor(Color.gray);
        g.fillOval(-500, 300, 1000, 200);
        g.setColor(Color.green);
        g.fillOval(-250, 300, 2000, 800);
        g.setColor(Color.blue);
        g.fillOval(400, 400, 400, 100);
        g.setColor(Color.red);
        g.fillOval(-120, -100, 200, 200);

        for(int i=0; i<20; i++) {
            g.setColor(Color.white);
            g.fillOval(pox[i], poy[i], posize[i], posize[i]/2);
            i++;
            g.fillOval(1500-pox[i], poy[i], posize[i], posize[i]/2);
        }

        /*
         * 蚂蚁身体
         */
        g.setColor(Color.black);
        if(!ismove) {
            /*
             * 四肢
             */
            if((x0-500)%80==0) {
                //头
                g.drawLine(x0, y0, x0-10, y0-100);
                g.drawLine(x0, y0, x0-50, y0-100);
                //前
                g.drawLine(x0, y0+55, x0+20, y0+55);
                g.drawLine(x0+20, y0+55, x0+18, y0+12);
                g.fillOval(x0+18, y0+12, 10, 8);
                g.drawLine(x0, y0+55, x0+40, y0+70);
                g.drawLine(x0+40, y0+70, x0+75, y0+30);
                g.fillOval(x0+75-1, y0+28, 18, 10);
                //中
                g.drawLine(x0, y0+95, x0-60, y0+75);
                g.drawLine(x0-60, y0+75, x0-120+40, y0+170);
                g.fillOval(x0-121+40, y0+169, 10, 8);
                g.drawLine(x0, y0+95, x0+30, y0+93);
                g.drawLine(x0+30, y0+93, x0+27, y0+190);
                g.fillOval(x0+26, y0+189, 25, 7);
                //后
                g.drawLine(x0-15, y0+90, x0-5, y0+100);
                g.drawLine(x0-5, y0+100, x0-10+40, y0+200);
                g.fillOval(x0-10+40, y0+198, 20, 5);
                g.drawLine(x0-15, y0+90, x0-10, y0+100);
                g.drawLine(x0-10, y0+100, x0-100, y0+190);
                g.fillOval(x0-113, y0+190, 13, 7);
            }else {
                //头
                g.drawLine(x0, y0, x0-10, y0-100);
                g.drawLine(x0, y0, x0-50, y0-100);
                //前
                g.drawLine(x0, y0+55, x0+20, y0+55);
                g.drawLine(x0+20, y0+55, x0+18, y0+12);
                g.fillOval(x0+18, y0+12, 10, 8);
                g.drawLine(x0, y0+55, x0+40, y0+70);
                g.drawLine(x0+40, y0+70, x0+75, y0+30);
                g.fillOval(x0+75-1, y0+28, 18, 10);
                //中
                g.drawLine(x0, y0+95, x0-60, y0+75);
                g.drawLine(x0-60, y0+75, x0-120, y0+170);
                g.fillOval(x0-121, y0+169, 10, 8);
                g.drawLine(x0, y0+95, x0+30, y0+93);
                g.drawLine(x0+30, y0+93, x0+67, y0+190);
                g.fillOval(x0+66, y0+189, 25, 7);
                //后
                g.drawLine(x0-15, y0+90, x0-5, y0+100);
                g.drawLine(x0-5, y0+100, x0-10, y0+200);
                g.fillOval(x0-10, y0+198, 20, 5);
                g.drawLine(x0-15, y0+90, x0-10, y0+100);
                g.drawLine(x0-10, y0+100, x0-60, y0+190);
                g.fillOval(x0-60, y0+190, 13, 7);
            }

            /*
             * 身体
             */
            //耳朵
            g.fillOval(x0-12, y0-110, 10, 16);
            g.fillOval(x0-53, y0-110, 10, 16);
            //脖子
            g.fillOval(x0-10, y0+35, 10, 20);
            //头
            g.fillOval(x0-50, y0-40, 100, 80);
            //眼睛
            g.setColor(Color.white);
            g.fillOval(x0+10, y0-20, 30, 30);
            g.setColor(Color.black);
            g.fillOval(x0+25, y0-3, 7, 7);
            //身体
            g.fillOval(x0-27, y0+40, 40, 58);
            g.fillOval(x0-25, y0+90, 18, 18);
            //尾巴
            g.fillOval(x0-190, y0+85, 180, 50);
        }else{
            /*
             * 四肢
             */
            if((x0-500)%80==0) {
                //头
                g.drawLine(x0, y0, x0+10, y0-100);
                g.drawLine(x0, y0, x0+50, y0-100);
                //前
                g.drawLine(x0, y0+55, x0-20, y0+55);
                g.drawLine(x0-20, y0+55, x0-18, y0+12);
                g.fillOval(x0-18, y0+12, 10, 8);
                g.drawLine(x0, y0+55, x0-40, y0+70);
                g.drawLine(x0-40, y0+70, x0-75, y0+30);
                g.fillOval(x0-75-18, y0+28, 18, 10);
                //中
                g.drawLine(x0, y0+95, x0+60, y0+75);
                g.drawLine(x0+60, y0+75, x0+120, y0+170);
                g.fillOval(x0+120-10, y0+169, 10, 8);
                g.drawLine(x0, y0+95, x0-30, y0+93);
                g.drawLine(x0-30, y0+93, x0-27-40, y0+190);
                g.fillOval(x0-27-25-40, y0+189, 25, 7);
                //后
                g.drawLine(x0+15, y0+90, x0+5, y0+100);
                g.drawLine(x0+5, y0+100, x0+10, y0+200);
                g.fillOval(x0+10-20, y0+198, 20, 5);
                g.drawLine(x0+15, y0+90, x0+10, y0+100);
                g.drawLine(x0+10, y0+100, x0+100-40, y0+190);
                g.fillOval(x0+100-13-40, y0+190, 13, 7);
            }else {
                //头
                g.drawLine(x0, y0, x0+10, y0-100);
                g.drawLine(x0, y0, x0+50, y0-100);
                //前
                g.drawLine(x0, y0+55, x0-20, y0+55);
                g.drawLine(x0-20, y0+55, x0-18, y0+12);
                g.fillOval(x0-18, y0+12, 10, 8);
                g.drawLine(x0, y0+55, x0-40, y0+70);
                g.drawLine(x0-40, y0+70, x0-75, y0+30);
                g.fillOval(x0-75-18, y0+28, 18, 10);
                //中
                g.drawLine(x0, y0+95, x0+60, y0+75);
                g.drawLine(x0+60, y0+75, x0+120-40, y0+170);
                g.fillOval(x0+120-10-40, y0+169, 10, 8);
                g.drawLine(x0, y0+95, x0-30, y0+93);
                g.drawLine(x0-30, y0+93, x0-27, y0+190);
                g.fillOval(x0-27-25, y0+189, 25, 7);
                //后
                g.drawLine(x0+15, y0+90, x0+5, y0+100);
                g.drawLine(x0+5, y0+100, x0+10-40, y0+200);
                g.fillOval(x0+10-20-40, y0+198, 20, 5);
                g.drawLine(x0+15, y0+90, x0+10, y0+100);
                g.drawLine(x0+10, y0+100, x0+100, y0+190);
                g.fillOval(x0+100-13, y0+190, 13, 7);
            }

            /*
             * 身体
             */
            //耳朵
            g.fillOval(x0+8, y0-110, 10, 16);
            g.fillOval(x0+45, y0-110, 10, 16);
            //脖子
            g.fillOval(x0, y0+35, 10, 20);
            //头
            g.fillOval(x0-50, y0-40, 100, 80);
            //眼睛
            g.setColor(Color.white);
            g.fillOval(x0-40, y0-20, 30, 30);
            g.setColor(Color.black);
            g.fillOval(x0-25-7, y0-3, 7, 7);
            //身体
            g.fillOval(x0-13, y0+40, 40, 58);
            g.fillOval(x0+7, y0+90, 18, 18);
            //尾巴
            g.fillOval(x0+10, y0+85, 180, 50);
        }
    }

    public void setBackground(Color cyan) {
        // TODO 自动生成的方法存根

    }

    @Override
    public void keyTyped(KeyEvent e) {
        // TODO 自动生成的方法存根

    }

    @Override
    public void keyPressed(KeyEvent e) {
        // TODO 自动生成的方法存根
        System.out.println("键盘："+e.getKeyCode());
        switch (e.getKeyCode()) {
            case 37:
                x0-=40;ismove=true;
                break;
            case 38:
                y0-=10;
                break;
            case 39:
                x0+=40;ismove=false;
                break;
            case 40:
                y0+=10;
                break;
            default:
                break;
        }
        //System.out.println(x);
        //repaint：重画
        this.repaint();
    }

    @Override
    public void keyReleased(KeyEvent e) {
        // TODO 自动生成的方法存根
        System.out.println("键盘松开了");
        //ismove=false;
        this.repaint();
    }
    @Override
    public void run() {
        // TODO 自动生成的方法存根
        while(true) {
            for (int i=0;i<50;i++) {
                pox[i]--;
                if(pox[i]<0) {
                    pox[i]=1500;
                }
            }
            try {
                Thread.sleep(30);
            } catch (InterruptedException e) {
                // TODO 自动生成的 catch 块
                e.printStackTrace();
            }
            repaint();
        }
    }

}
